"use client";

import { useState, useRef, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import TopAppBar from "@/components/TopAppBar";

interface Message {
  id: string;
  role: "user" | "ai";
  text: string;
  timestamp: string;
  attachment?: { type: "image" | "url" | "range"; name: string };
  actionCard?: { title: string; subtitle: string; icon: string };
  actions?: { label: string; primary?: boolean }[];
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "ai",
    text: "Welcome! I can help you extract data from images, URLs, or text and build Excel tables. Upload a file or describe the data you need.",
    timestamp: "Now",
    actionCard: {
      title: "Quick Start",
      subtitle: "Upload an image, paste a URL, or describe your data",
      icon: "rocket_launch",
    },
    actions: [
      { label: "Upload Image", primary: true },
      { label: "Paste URL" },
    ],
  },
];

function getTimeString() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: input,
      timestamp: getTimeString(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        text: "I understand your request. Let me process that and prepare a preview for you.",
        timestamp: getTimeString(),
        actionCard: {
          title: "Extracted Table Data",
          subtitle: "4 columns \u2022 12 rows \u2022 98% confidence",
          icon: "table_chart",
        },
        actions: [
          { label: "Preview", primary: true },
          { label: "Dismiss" },
        ],
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 800);
  };

  return (
    <div className="flex h-screen bg-[#d8dadc]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopAppBar />

        {/* Chat Messages */}
        <main ref={scrollRef} className="flex-1 overflow-y-auto bg-[#f7f9fb] px-4 py-6">
          <div className="max-w-2xl mx-auto flex flex-col gap-5">
            {/* Date Marker */}
            <div className="flex justify-center">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#6f7a70] bg-[#eceef0] px-3 py-1 rounded-full">
                Today
              </span>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} msg-enter`}
              >
                <div className={`max-w-[85%] ${msg.role === "user" ? "" : "flex gap-2.5"}`}>
                  {/* AI Avatar */}
                  {msg.role === "ai" && (
                    <div className="w-8 h-8 min-w-[32px] rounded-full bg-[#005931] flex items-center justify-center mt-1 shadow-sm">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: 16, fontVariationSettings: "'FILL' 1" }}>
                        smart_toy
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Message Bubble */}
                    <div
                      className={`rounded-2xl px-4 py-3 shadow-sm ${
                        msg.role === "user"
                          ? "bg-white border border-[#bfc9be] rounded-tr-md"
                          : "bg-[#d5e3fc]/40 border-l-[3px] border-l-[#005931] rounded-tl-md"
                      }`}
                    >
                      {msg.role === "ai" && (
                        <div className="flex items-center gap-1.5 mb-2">
                          <span className="text-[10px] font-bold tracking-widest uppercase text-[#005931]">
                            Codex AI
                          </span>
                        </div>
                      )}
                      <p className="text-[14px] leading-relaxed text-[#191c1e]">{msg.text}</p>

                      {/* Action Card */}
                      {msg.actionCard && (
                        <div className="mt-3 bg-white border border-[#bfc9be] rounded-xl p-3 flex items-center gap-3 shadow-sm">
                          <div className="w-10 h-10 rounded-lg bg-[#eceef0] flex items-center justify-center">
                            <span className="material-symbols-outlined text-[#005931]" style={{ fontSize: 22 }}>
                              {msg.actionCard.icon}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[13px] font-semibold text-[#191c1e] truncate">{msg.actionCard.title}</p>
                            <p className="text-[11px] text-[#6f7a70] truncate">{msg.actionCard.subtitle}</p>
                          </div>
                          <span className="material-symbols-outlined text-[#bfc9be]" style={{ fontSize: 18 }}>
                            chevron_right
                          </span>
                        </div>
                      )}

                      {/* Action Buttons */}
                      {msg.actions && (
                        <div className="flex gap-2 mt-3">
                          {msg.actions.map((action) => (
                            <button
                              key={action.label}
                              className={`text-[12px] font-semibold px-4 py-2 rounded-full transition-all ${
                                action.primary
                                  ? "bg-[#005931] text-white hover:bg-[#176c40] shadow-sm hover:shadow"
                                  : "bg-transparent border border-[#6f7a70] text-[#005931] hover:bg-[#eceef0]"
                              }`}
                            >
                              {action.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Timestamp */}
                    <p className={`text-[10px] text-[#6f7a70] mt-1 ${msg.role === "user" ? "text-right pr-1" : "pl-1"}`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Input Area */}
        <footer className="bg-white border-t border-[#bfc9be] px-4 py-3 shadow-[0_-2px_8px_rgba(0,0,0,0.04)]">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-end bg-[#f7f9fb] border border-[#bfc9be] rounded-2xl px-3 py-2 shadow-sm focus-within:border-[#005931] focus-within:ring-2 focus-within:ring-[#005931]/10 transition-all">
              <div className="flex-1 flex flex-col">
                <textarea
                  className="w-full bg-transparent border-none outline-none resize-none text-[14px] text-[#191c1e] placeholder:text-[#6f7a70] px-1 py-1.5 max-h-32"
                  placeholder="Describe the data you need, or paste a URL..."
                  rows={1}
                  style={{ minHeight: "40px" }}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                />
                <div className="flex justify-between items-center pt-1 pb-0.5">
                  <div className="flex items-center gap-0.5">
                    {[
                      { icon: "image", title: "Upload Image" },
                      { icon: "link", title: "Paste URL" },
                      { icon: "grid_on", title: "Select Data Range" },
                    ].map((btn) => (
                      <button
                        key={btn.icon}
                        title={btn.title}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-[#6f7a70] hover:text-[#005931] hover:bg-[#e6e8ea] transition-colors"
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                          {btn.icon}
                        </span>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="w-9 h-9 rounded-xl bg-[#005931] text-white flex items-center justify-center hover:bg-[#176c40] transition-all shadow-sm disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#005931]"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 18, fontVariationSettings: "'FILL' 1" }}>
                      send
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <p className="text-center text-[10px] text-[#6f7a70] mt-2 opacity-60">
              Codex AI can make mistakes. Always verify important data before committing to Excel.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
