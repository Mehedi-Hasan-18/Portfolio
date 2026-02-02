
import React, { useState, useRef, useEffect } from "react";
import { sendToWebhook } from "../utils/sendToWebhook";

// Simple chatbot icon SVG
function ChatbotIcon({ size = 48, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#222" stroke="#555" strokeWidth="2" />
      <ellipse cx="24" cy="28" rx="10" ry="6" fill="#333" />
      <circle cx="18" cy="22" r="2.5" fill={color} />
      <circle cx="30" cy="22" r="2.5" fill={color} />
      <rect x="20" y="26" width="8" height="2" rx="1" fill={color} opacity="0.5" />
    </svg>
  );
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    const response = await sendToWebhook(input);
    setLoading(false);
    // Format the response for display (pretty print objects/arrays)
    let botText = "";
    if (typeof response === "string") {
      botText = response;
    } else if (typeof response === "object") {
      // Prefer 'output', then 'reply', then 'message', else pretty print
      botText = response.output || response.reply || response.message || JSON.stringify(response, null, 2);
    } else {
      botText = String(response);
    }
    const botMessage = {
      sender: "bot",
      text: botText,
    };
    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  };

  // Close chat when clicking outside
  const chatRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      {!open && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <button
            aria-label="Open chatbot"
            style={{
              background: "#222",
              border: "none",
              borderRadius: "50%",
              boxShadow: "0 0 24px 8px #2563eb, 0 2px 8px #0008",
              padding: 8,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "box-shadow 0.2s",
              animation: "chatbot-glow 1.5s infinite alternate",
              position: "relative",
            }}
            onClick={() => setOpen(true)}
          >
            <ChatbotIcon size={48} color="#fff" />
            <style>{`
              @keyframes chatbot-glow {
                0% { box-shadow: 0 0 24px 8px #2563eb, 0 2px 8px #0008; }
                100% { box-shadow: 0 0 48px 16px #60a5fa, 0 2px 8px #0008; }
              }
            `}</style>
          </button>
          <span style={{
            marginTop: 8,
            color: "#fff",
            fontWeight: 600,
            fontSize: 16,
            textShadow: "0 2px 8px #2563eb, 0 0 2px #000",
            letterSpacing: 0.5,
            background: "rgba(24,24,27,0.85)",
            borderRadius: 8,
            padding: "2px 12px"
          }}>
            Talk to Mehedi
          </span>
        </div>
      )}
      {open && (
        <div
          ref={chatRef}
          style={{
            width: 340,
            height: 440,
            background: "#18181b",
            color: "#fff",
            borderRadius: 16,
            boxShadow: "0 4px 24px #000a",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Header */}
          <div style={{
            background: "#23232b",
            padding: "12px 16px",
            fontWeight: 600,
            fontSize: 18,
            borderBottom: "1px solid #333",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <span>Chatbot</span>
            <button
              aria-label="Close chatbot"
              onClick={() => setOpen(false)}
              style={{ background: "none", border: "none", color: "#fff", fontSize: 22, cursor: "pointer" }}
            >
              ×
            </button>
          </div>
          {/* Messages */}
          <div style={{ flex: 1, padding: 16, overflowY: "auto", background: "#18181b" }}>
            {messages.length === 0 && (
              <div style={{ color: "#aaa", textAlign: "center", marginTop: 40 }}>
                Start the conversation!
              </div>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  margin: "10px 0",
                }}
              >
                <span
                  style={{
                    background: msg.sender === "user" ? "#27272a" : "#23232b",
                    color: "#fff",
                    padding: "8px 14px",
                    borderRadius: 8,
                    display: "inline-block",
                    maxWidth: "80%",
                    wordBreak: "break-word",
                    fontSize: 15,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            {loading && <div style={{ color: "#aaa", textAlign: "left" }}>Mehedi is typing...</div>}
          </div>
          {/* Input */}
          <div style={{
            background: "#23232b",
            padding: 12,
            borderTop: "1px solid #333",
            display: "flex",
            gap: 8,
          }}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              style={{
                flex: 1,
                padding: "10px 12px",
                borderRadius: 6,
                border: "1px solid #333",
                background: "#18181b",
                color: "#fff",
                fontSize: 15,
                outline: "none",
              }}
              placeholder="Type your message..."
              disabled={loading}
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              style={{
                padding: "0 18px",
                background: loading || !input.trim() ? "#444" : "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                fontWeight: 600,
                fontSize: 15,
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                transition: "background 0.2s",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
