import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../context/AuthContext";

// Every logged-in user's data is namespaced under their email.
// Users who aren't logged in fall back to a shared "guest" bucket,
// so nothing crashes if this hook is used outside an auth flow.
function storageKey(email, key) {
  const namespace = email || "guest";
  return `codecareer_data_${namespace}_${key}`;
}

/**
 * useUserData("ai-chat-history", [])
 * Works like useState, but automatically persists to localStorage
 * under the current logged-in user, and reloads it whenever the
 * logged-in user changes (e.g. after login/logout).
 */
export function useUserData(key, initialValue) {
  const { user } = useAuth() || {};
  const email = user?.email || null;

  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey(email, key));
      return raw ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  });

  // Reload data whenever the logged-in user changes
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey(email, key));
      setValue(raw ? JSON.parse(raw) : initialValue);
    } catch {
      setValue(initialValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  // Persist on every change
  useEffect(() => {
    try {
      localStorage.setItem(storageKey(email, key), JSON.stringify(value));
    } catch {
      // storage full or unavailable — fail silently
    }
  }, [email, key, value]);

  const clear = useCallback(() => {
    localStorage.removeItem(storageKey(email, key));
    setValue(initialValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, key]);

  return [value, setValue, clear];
}
