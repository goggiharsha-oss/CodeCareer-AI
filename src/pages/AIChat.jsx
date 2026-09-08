import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Send,
  Sparkles,
  ArrowLeft,
  User,
  Zap,
  Copy,
  Check,
  Mic,
  MicOff,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getAIReply, getFollowUpSuggestions } from "../utils/aiEngine";
import { useAuth } from "../context/AuthContext";
import { useUserData } from "../utils/userStorage";
import "./AIChat.css";

const WELCOME_MESSAGE = {
  sender: "ai",
  text: "👋 Hi! I'm CodeCareer AI. Ask me about Programming Languages, Career Paths, Salaries or Learning Roadmaps.",
};

function formatTime(ts) {
  if (!ts) return "";

  return new Date(ts).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function AIChat() {
  const { user } = useAuth();

  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [listening, setListening] = useState(false);
  const [followUps, setFollowUps] = useState([]);

  const messagesContainerRef = useRef(null);
  const recognitionRef = useRef(null);

  const [messages, setMessages, clearChat] = useUserData("ai-chat-history", [
    { ...WELCOME_MESSAGE, time: Date.now() },
  ]);

  // Only the chat messages area will auto-scroll
  useEffect(() => {
    const chatContainer = messagesContainerRef.current;

    if (!chatContainer) return;

    chatContainer.scrollTo({
      top: chatContainer.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  const getReply = (userMessage) => {
    return getAIReply(userMessage);
  };

  const handleSend = (overrideText) => {
    const userMessage = (overrideText ?? message).trim();

    if (!userMessage || typing) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
        time: Date.now(),
      },
    ]);

    setMessage("");
    setTyping(true);
    setFollowUps([]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: getReply(userMessage),
          time: Date.now(),
        },
      ]);

      setFollowUps(getFollowUpSuggestions(userMessage));

      setTyping(false);
    }, 500);
  };

  const askQuickQuestion = (question) => {
    setMessage(question);
  };

  const handleCopy = (text, index) => {
    navigator.clipboard?.writeText(text);

    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
    }, 1500);
  };

  const toggleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice input isn't supported in this browser.");
      return;
    }

    if (listening) {
      recognitionRef.current?.stop();
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;

      setMessage(transcript);
    };

    recognitionRef.current = recognition;

    recognition.start();
  };

  return (
    <div className="ai-chat-page">
      <Navbar />

      <main className="ai-chat-main">
        {/* Background Glows */}
        <div className="ai-chat-glow ai-chat-glow-one" />
        <div className="ai-chat-glow ai-chat-glow-two" />

        {/* Floating Particles */}
        <div className="ai-chat-particles">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="ai-chat-particle" />
          ))}
        </div>

        <motion.section
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="ai-chat-shell"
        >
          {/* Page Heading */}
          <div className="ai-chat-heading">
            <Link to="/" className="ai-back-link">
              <ArrowLeft size={17} />
              Back to Home
            </Link>

            <div className="ai-title-icon">
              <Bot size={34} />
              <span />
            </div>

            <p className="ai-eyebrow">
              <Sparkles size={16} />
              CODECAREER AI
            </p>

            <h1>
              Your <span>Career AI</span> Assistant
            </h1>

            <p className="ai-subtitle">
              Get quick guidance on programming languages, career paths,
              salaries, skills, interviews and learning roadmaps.
            </p>
          </div>

          {/* Chat Card */}
          <div className="ai-chat-card-wrap">
            <div className="ai-chat-card-border" />

            <div className="ai-chat-card">
              {/* Chat Header */}
              <div className="ai-chat-card-header">
                <div className="ai-status">
                  <div className="ai-avatar">
                    <span className="ai-avatar-ring" />
                    <Bot size={23} />
                  </div>

                  <div>
                    <h2>CodeCareer AI</h2>

                    <p>
                      <span />
                      Online Assistant
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  {user && (
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#7dd3fc",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Saved for {user.name}
                    </span>
                  )}

                  {/* Clear Chat */}
                  <button
                    type="button"
                    onClick={() => clearChat()}
                    className="ai-premium-badge"
                    style={{
                      cursor: "pointer",
                    }}
                    title="Clear chat history"
                  >
                    <span>Clear</span>
                  </button>

                  {/* Premium Badge */}
                  <div className="ai-premium-badge">
                    <Zap size={12} />
                    <span>Premium AI</span>
                  </div>
                </div>
              </div>

              {/* ONLY THIS CONTAINER SCROLLS */}
              <div className="ai-chat-messages" ref={messagesContainerRef}>
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className={`ai-msg-row ${msg.sender}`}
                  >
                    {/* Message Avatar */}
                    <div className="ai-msg-avatar">
                      {msg.sender === "ai" ? (
                        <Bot size={14} />
                      ) : (
                        <User size={14} />
                      )}
                    </div>

                    {/* Message Content */}
                    <div className="ai-msg-col">
                      <div className="ai-chat-msg">
                        {msg.text}

                        {/* Copy Button */}
                        {msg.sender === "ai" && (
                          <button
                            type="button"
                            className="ai-copy-btn"
                            onClick={() => handleCopy(msg.text, index)}
                            aria-label="Copy message"
                            title="Copy"
                          >
                            {copiedIndex === index ? (
                              <Check size={13} />
                            ) : (
                              <Copy size={13} />
                            )}
                          </button>
                        )}
                      </div>

                      {/* Message Time */}
                      {msg.time && (
                        <span className="ai-msg-time">
                          {formatTime(msg.time)}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {typing && (
                  <div className="ai-msg-row ai">
                    <div className="ai-msg-avatar">
                      <Bot size={14} />
                    </div>

                    <div className="ai-typing">
                      <span className="ai-typing-label">Thinking</span>

                      <span className="ai-typing-dots">
                        <i />
                        <i />
                        <i />
                      </span>
                    </div>
                  </div>
                )}

                {/* Follow Up Questions */}
                {!typing && followUps.length > 0 && (
                  <div className="ai-followups">
                    {followUps.map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => handleSend(q)}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Questions */}
              <div className="ai-quick-questions">
                <button
                  type="button"
                  onClick={() => askQuickQuestion("Python salary")}
                >
                  <span>🐍</span>
                  Python
                </button>

                <button
                  type="button"
                  onClick={() => askQuickQuestion("Java roadmap")}
                >
                  <span>☕</span>
                  Java
                </button>

                <button
                  type="button"
                  onClick={() => askQuickQuestion("What is AI?")}
                >
                  <span>🤖</span>
                  AI
                </button>

                <button
                  type="button"
                  onClick={() => askQuickQuestion("Web Development")}
                >
                  <span>🌐</span>
                  Web Dev
                </button>

                <button
                  type="button"
                  onClick={() => askQuickQuestion("Highest salary")}
                >
                  <span>💰</span>
                  Salary
                </button>
              </div>

              {/* Chat Input */}
              <div className="ai-chat-input">
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

                {/* Voice Button */}
                <button
                  type="button"
                  onClick={toggleVoiceInput}
                  aria-label={listening ? "Stop voice input" : "Voice input"}
                  title={
                    listening ? "Listening... click to stop" : "Voice input"
                  }
                  className={`ai-mic-btn ${listening ? "listening" : ""}`}
                >
                  {listening ? <MicOff size={28} /> : <Mic size={28} />}
                </button>

                {/* Send Button */}
                <button
                  type="button"
                  onClick={() => handleSend()}
                  aria-label="Send message"
                >
                  <Send size={19} />
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}

export default AIChat;
