"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopAppBar from "@/components/TopAppBar";

export default function ChatPage() {
  const [messages, setMessages] = useState<
    Array<{ id: string; role: string; text: string }>
  >([
    {
      id: "1",
      role: "ai",
      text: "I've identified a table in this image. Would you like to preview the extraction?"
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        role: "user",
        text: input
      };
      setMessages([...messages, newMessage]);
      setInput("");

      setTimeout(() => {
        const aiResponse = {
          id: (Date.now() + 1).toString(),
          role: "ai",
          text: "Processing your request... This is a demo response."
        };
        setMessages((prev) => [...prev, aiResponse]);
      }, 500);
    }
  };

  return (
    <div className="flex h-screen bg-surface-dim">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopAppBar />
        <main className="flex-1 overflow-y-auto bg-surface-bright flex flex-col p-md gap-lg">
          <div className="flex justify-center">
            <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-container px-sm py-xs rounded-full">
              TODAY
            </span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-lg">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-96 ${
                    msg.role === "user"
                      ? "bg-surface border border-outline-variant rounded-xl rounded-tr-none"
                      : "bg-tertiary-fixed border-l-4 border-primary rounded-xl rounded-tl-none"
                  } p-md shadow-sm`}
                >
                  {msg.role === "ai" && (
                    <div className="flex items-center gap-sm mb-md">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <span
                          className="material-symbols-outlined text-on-primary text-sm"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          smart_toy
                        </span>
                      </div>
                      <span className="font-label-caps text-label-caps text-primary">
                        CODEX AI
                      </span>
                    </div>
                  )}
                  <p className="font-body-md text-body-md text-on-surface">
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="bg-surface border-t border-outline-variant p-md flex flex-col gap-sm z-10">
          <div className="flex items-end bg-surface-container-lowest border border-outline-variant rounded-xl p-xs shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
            <div className="flex flex-col w-full">
              <textarea
                className="w-full bg-transparent border-none outline-none resize-none font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant px-sm py-sm max-h-32 overflow-y-auto"
                placeholder="Ask Codex..."
                rows={1}
                style={{ minHeight: "44px" }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <div className="flex justify-between items-center px-xs pb-xs pt-xs">
                <div className="flex items-center gap-xs">
                  <button className="p-xs text-on-surface-variant hover:text-primary hover:bg-surface-container rounded transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      image
                    </span>
                  </button>
                  <button className="p-xs text-on-surface-variant hover:text-primary hover:bg-surface-container rounded transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      link
                    </span>
                  </button>
                  <button className="p-xs text-on-surface-variant hover:text-primary hover:bg-surface-container rounded transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      border_all
                    </span>
                  </button>
                </div>
                <button
                  onClick={handleSend}
                  className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-surface-tint transition-colors shadow-sm disabled:opacity-50"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  <span className="material-symbols-outlined text-sm">
                    send
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="text-center font-label-caps text-label-caps text-on-surface-variant opacity-75 px-md">
            Codex AI can make mistakes. Verify important data.
          </div>
        </footer>
      </div>
    </div>
  );
}
