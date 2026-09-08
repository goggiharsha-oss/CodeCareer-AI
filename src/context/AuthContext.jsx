import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const USERS_KEY = "codecareer_users";
const SESSION_KEY = "codecareer_current_user";

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || {};
  } catch {
    return {};
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { name, email }
  const [ready, setReady] = useState(false);

  // Restore session on load
  useEffect(() => {
    const savedEmail = localStorage.getItem(SESSION_KEY);
    if (savedEmail) {
      const users = readUsers();
      const found = users[savedEmail];
      if (found) {
        setUser({ name: found.name, email: found.email });
      }
    }
    setReady(true);
  }, []);

  // signup: creates a new account and logs the user in
  const signup = (name, email, password) => {
    const users = readUsers();
    const key = email.trim().toLowerCase();

    if (users[key]) {
      return { success: false, error: "An account with this email already exists." };
    }

    users[key] = { name, email: key, password };
    writeUsers(users);
    localStorage.setItem(SESSION_KEY, key);
    setUser({ name, email: key });
    return { success: true };
  };

  // login: validates against stored users
  const login = (email, password) => {
    const users = readUsers();
    const key = email.trim().toLowerCase();
    const found = users[key];

    if (!found || found.password !== password) {
      return { success: false, error: "Invalid email or password." };
    }

    localStorage.setItem(SESSION_KEY, key);
    setUser({ name: found.name, email: found.email });
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, ready, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
