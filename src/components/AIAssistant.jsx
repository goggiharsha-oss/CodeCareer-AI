import { useState } from "react";
import "./AIAssistant.css";

function AIAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        className="ai-button"
        onClick={() => setOpen(!open)}
      >
        🤖
      </button>

      {/* Chat Popup */}
      {open && (
        <div className="ai-popup">
          <div className="ai-header">
            <span>🤖 CodeCareer AI</span>

            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="ai-body">
            <h3>👋 Welcome!</h3>

            <p>
              Ask me anything about:
            </p>

            <ul>
              <li>🐍 Programming Languages</li>
              <li>💼 Career Paths</li>
              <li>💰 Salaries</li>
              <li>🛣️ Learning Roadmaps</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default AIAssistant;