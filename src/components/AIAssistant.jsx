import { useState } from "react";
import "./AIAssistant.css";

function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hi! I'm CodeCareer AI. Ask me about Programming Languages, Career Paths, Salaries or Learning Roadmaps.",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setMessage("");

    setTimeout(() => {
      const q = userMessage.toLowerCase();

      let reply =
        "❌ I can answer only Programming Languages and Career Paths.";

      if (q.includes("python")) {
        reply =
          "🐍 Python is beginner-friendly and is widely used in AI, Data Science, Automation and Web Development.";
      } else if (q.includes("java")) {
        reply =
          "☕ Java is mainly used for Enterprise Applications and Android Development.";
      } else if (q.includes("javascript") || q.includes("js")) {
        reply =
          "🟨 JavaScript is the most popular language for Web Development.";
      } else if (q.includes("c++")) {
        reply =
          "⚙️ C++ is used in Game Development, System Programming and Competitive Coding.";
      } else if (
        q === "c" ||
        q.includes(" c ") ||
        q.startsWith("c ")
      ) {
        reply =
          "🔵 C is the foundation of programming and is widely used in Embedded Systems.";
      } else if (q.includes("c#")) {
        reply =
          "🟣 C# is mainly used with .NET and Unity Game Development.";
      } else if (
        q.includes("artificial intelligence") ||
        q.includes("ai")
      ) {
        reply =
          "🤖 Artificial Intelligence focuses on building intelligent systems using Machine Learning.";
      } else if (q.includes("machine learning")) {
        reply =
          "🧠 Machine Learning helps computers learn from data.";
      } else if (q.includes("data science")) {
        reply =
          "📊 Data Science combines Python, Statistics and Machine Learning.";
      } else if (q.includes("web development")) {
        reply =
          "🌐 Web Development includes HTML, CSS, JavaScript, React and Backend technologies.";
      } else if (q.includes("android")) {
        reply =
          "📱 Android Development mainly uses Java and Kotlin.";
      } else if (q.includes("cyber")) {
        reply =
          "🔐 Cyber Security protects systems and networks from cyber attacks.";
      } else if (q.includes("cloud")) {
        reply =
          "☁️ Cloud Computing includes AWS, Azure and Google Cloud.";
      } else if (q.includes("devops")) {
        reply =
          "⚡ DevOps combines development and operations using Docker, Kubernetes and CI/CD.";
      } else if (q.includes("ui") || q.includes("ux")) {
        reply =
          "🎨 UI/UX Design focuses on creating beautiful and user-friendly interfaces.";
      } else if (q.includes("game")) {
        reply =
          "🎮 Game Development uses Unity (C#) and Unreal Engine (C++).";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: reply,
        },
      ]);
    }, 500);
  };

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

        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.sender === "ai"
                  ? "ai-msg"
                  : "user-msg"
              }
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Ask about Python, Java, AI..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
          />

          <button onClick={handleSend}>
            Send
          </button>

        </div>

      </div>

    </div>
  )}
</>
  );
}

export default AIAssistant;