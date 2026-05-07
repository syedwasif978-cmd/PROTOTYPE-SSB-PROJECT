"use client";

import { useState, useRef, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import TopAppBar from "@/components/TopAppBar";

interface Message {
  id: string;
  role: "user" | "ai";
  text: string;
  timestamp: string;
  actionCard?: { title: string; subtitle: string; icon: string };
  actions?: { label: string; primary?: boolean }[];
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "ai",
    text: "Welcome! I can help you extract data, build tables, run calculations, and generate charts in your workbook. What would you like to do?",
    timestamp: "Now",
    actions: [
      { label: "Extract from Image", primary: true },
      { label: "Paste URL" },
      { label: "New Table" },
    ],
  },
];

function getTimeString() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

/* ── Demo spreadsheet data ───────────────────────────── */
const sheetTabs = ["Sales_Data", "Q3_Summary", "Charts"];
const headers = ["", "A", "B", "C", "D", "E", "F"];
const rows = [
  ["1", "Department", "Q1 Revenue", "Q2 Revenue", "Q3 Revenue", "YTD Total", "Growth"],
  ["2", "Sales", "$1,250,000", "$1,320,500", "$1,450,005", "$4,020,505", "+8.2%"],
  ["3", "Marketing", "$850,200", "$910,000", "$890,500", "$2,650,700", "+4.7%"],
  ["4", "Engineering", "$2,100,000", "$2,150,000", "$2,250,000", "$6,500,000", "+3.6%"],
  ["5", "Support", "$420,000", "$450,000", "$480,000", "$1,350,000", "+7.1%"],
  ["6", "Operations", "$600,000", "$620,000", "$650,000", "$1,870,000", "+4.2%"],
  ["7", "HR", "$150,000", "$160,000", "$170,000", "$480,000", "+6.7%"],
  ["8", "", "", "", "", "", ""],
  ["9", "TOTAL", "$5,370,200", "$5,610,500", "$5,890,505", "$16,871,205", "+5.4%"],
  ["10", "", "", "", "", "", ""],
  ["11", "", "", "", "", "", ""],
  ["12", "", "", "", "", "", ""],
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [activeSheet, setActiveSheet] = useState("Sales_Data");
  const [selectedCell, setSelectedCell] = useState<string | null>("B2");
  const [hasFile, setHasFile] = useState(false);
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
          subtitle: "6 columns • 7 rows • 98% confidence",
          icon: "table_chart",
        },
        actions: [
          { label: "Preview in Sheet", primary: true },
          { label: "Edit First" },
        ],
      };
      setMessages((prev) => [...prev, aiMsg]);
      if (!hasFile) setHasFile(true);
    }, 800);
  };

  const handleFileOpen = () => setHasFile(true);

  return (
    <div className="flex h-screen bg-[#d8dadc]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopAppBar />

        <div className="flex-1 flex overflow-hidden">
          {/* ═══ LEFT: Excel Sheet Viewer ═══ */}
          <div className="flex-1 flex flex-col min-w-0 bg-white border-r border-[#bfc9be]">
            {hasFile ? (
              <>
                {/* Toolbar */}
                <div className="h-10 min-h-[40px] flex items-center gap-1 px-2 bg-[#f2f4f6] border-b border-[#e6e8ea]">
                  <span className="material-symbols-outlined text-[#005931] mr-1" style={{ fontSize: 18, fontVariationSettings: "'FILL' 1" }}>
                    description
                  </span>
                  <span className="text-[12px] font-semibold text-[#191c1e] mr-3 truncate">Sales_Data.xlsx</span>
                  <div className="w-px h-5 bg-[#bfc9be]" />
                  {["undo", "redo", "content_cut", "content_copy", "content_paste"].map((icon) => (
                    <button key={icon} className="w-7 h-7 rounded flex items-center justify-center text-[#6f7a70] hover:bg-[#e6e8ea] hover:text-[#3f4941] transition-colors">
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{icon}</span>
                    </button>
                  ))}
                  <div className="flex-1" />
                  <span className="text-[10px] text-[#6f7a70] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#005931]" />
                    Synced
                  </span>
                </div>

                {/* Formula Bar */}
                <div className="h-8 min-h-[32px] flex items-center border-b border-[#e6e8ea] bg-white">
                  <div className="w-16 text-center text-[11px] font-mono font-bold text-[#3f4941] border-r border-[#e6e8ea] h-full flex items-center justify-center bg-[#f2f4f6]">
                    {selectedCell || "A1"}
                  </div>
                  <div className="flex-1 px-2 text-[12px] font-mono text-[#191c1e] truncate">
                    {selectedCell === "B2" ? "Sales" : selectedCell === "F9" ? "=SUM(F2:F7)" : ""}
                  </div>
                </div>

                {/* Spreadsheet Grid */}
                <div className="flex-1 overflow-auto">
                  <table className="w-full border-collapse text-[12px] font-mono select-none">
                    {/* Column Headers */}
                    <thead className="sticky top-0 z-10">
                      <tr className="bg-[#eceef0]">
                        {headers.map((h, i) => (
                          <th
                            key={i}
                            className={`px-1 py-1.5 text-[10px] font-bold text-[#6f7a70] border border-[#d8dadc] text-center ${
                              i === 0 ? "w-10 min-w-[40px] bg-[#e6e8ea]" : "min-w-[110px]"
                            }`}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, rowIdx) => (
                        <tr key={rowIdx} className="hover:bg-[#f7f9fb]">
                          {row.map((cell, colIdx) => {
                            const cellRef = colIdx === 0 ? null : `${headers[colIdx]}${row[0]}`;
                            const isSelected = cellRef === selectedCell;
                            const isHeader = rowIdx === 0 && colIdx > 0;
                            const isTotal = row[1] === "TOTAL" && colIdx > 0;
                            const isGrowth = colIdx === 6 && rowIdx > 0 && rowIdx < 8 && cell;

                            return (
                              <td
                                key={colIdx}
                                onClick={() => cellRef && setSelectedCell(cellRef)}
                                className={`px-2 py-1.5 border border-[#e6e8ea] cursor-default transition-colors ${
                                  colIdx === 0
                                    ? "bg-[#eceef0] text-[10px] text-[#6f7a70] font-bold text-center w-10"
                                    : isSelected
                                    ? "bg-[#005931]/5 outline outline-2 outline-[#005931] -outline-offset-1 z-10 relative"
                                    : isHeader
                                    ? "bg-[#f2f4f6] font-bold text-[#191c1e] text-[11px]"
                                    : isTotal
                                    ? "bg-[#f2f4f6] font-bold text-[#191c1e]"
                                    : "text-[#191c1e]"
                                } ${
                                  colIdx >= 2 && colIdx <= 5 ? "text-right" : ""
                                } ${
                                  isGrowth
                                    ? cell.startsWith("+")
                                      ? "text-[#005931] font-semibold text-right"
                                      : cell.startsWith("-")
                                      ? "text-[#ba1a1a] font-semibold text-right"
                                      : "text-right"
                                    : ""
                                }`}
                              >
                                {cell}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Sheet Tabs */}
                <div className="h-8 min-h-[32px] flex items-center bg-[#eceef0] border-t border-[#bfc9be] px-1 gap-0.5">
                  {sheetTabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveSheet(tab)}
                      className={`px-3 py-1 text-[11px] font-medium rounded-t transition-colors ${
                        activeSheet === tab
                          ? "bg-white text-[#005931] font-semibold border border-[#bfc9be] border-b-white -mb-px"
                          : "text-[#6f7a70] hover:bg-[#e6e8ea] hover:text-[#3f4941]"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                  <button className="w-6 h-6 rounded flex items-center justify-center text-[#6f7a70] hover:bg-[#e6e8ea] ml-1">
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>add</span>
                  </button>
                </div>
              </>
            ) : (
              /* ── Empty / File Picker State ── */
              <div className="flex-1 flex flex-col items-center justify-center p-8 bg-[#f7f9fb]">
                <div className="w-20 h-20 rounded-2xl bg-[#005931]/10 flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[#005931]" style={{ fontSize: 40, fontVariationSettings: "'FILL' 1" }}>
                    folder_open
                  </span>
                </div>
                <h2 className="text-[18px] font-semibold text-[#191c1e] mb-2">No workbook opened</h2>
                <p className="text-[13px] text-[#6f7a70] text-center max-w-sm mb-6 leading-relaxed">
                  Open an Excel file to get started. Codex will read and display your spreadsheet here, ready for AI-powered analysis.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleFileOpen}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#005931] text-white font-semibold text-[13px] hover:bg-[#176c40] transition-all shadow-md hover:shadow-lg"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>upload_file</span>
                    Open File
                  </button>
                  <button
                    onClick={handleFileOpen}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[#bfc9be] text-[#3f4941] font-semibold text-[13px] hover:bg-[#eceef0] transition-colors"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>folder</span>
                    Browse Directory
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ═══ RIGHT: Chatbot Panel ═══ */}
          <div className="w-[380px] min-w-[380px] flex flex-col bg-[#f7f9fb] border-l border-[#bfc9be]">
            {/* Chat Header */}
            <div className="h-11 min-h-[44px] flex items-center justify-between px-4 border-b border-[#bfc9be] bg-white">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#005931]" style={{ fontSize: 18, fontVariationSettings: "'FILL' 1" }}>
                  smart_toy
                </span>
                <span className="text-[13px] font-semibold text-[#191c1e]">Codex AI</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#005931] shadow-[0_0_4px_rgba(0,89,49,0.5)]" />
              </div>
              <button className="w-7 h-7 rounded-lg flex items-center justify-center text-[#6f7a70] hover:bg-[#eceef0]">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>more_vert</span>
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-4">
              {/* Date Marker */}
              <div className="flex justify-center">
                <span className="text-[9px] font-bold tracking-widest uppercase text-[#6f7a70] bg-[#eceef0] px-2.5 py-0.5 rounded-full">
                  Today
                </span>
              </div>

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} msg-enter`}
                >
                  <div className={`max-w-[92%] ${msg.role === "ai" ? "flex gap-2" : ""}`}>
                    {msg.role === "ai" && (
                      <div className="w-7 h-7 min-w-[28px] rounded-full bg-[#005931] flex items-center justify-center mt-1">
                        <span className="material-symbols-outlined text-white" style={{ fontSize: 14, fontVariationSettings: "'FILL' 1" }}>
                          smart_toy
                        </span>
                      </div>
                    )}
                    <div>
                      <div
                        className={`rounded-2xl px-3 py-2.5 shadow-sm text-[13px] leading-relaxed ${
                          msg.role === "user"
                            ? "bg-[#005931] text-white rounded-tr-md"
                            : "bg-white border border-[#e6e8ea] text-[#191c1e] rounded-tl-md"
                        }`}
                      >
                        {msg.text}

                        {msg.actionCard && (
                          <div className="mt-2 bg-[#f7f9fb] border border-[#e6e8ea] rounded-lg p-2.5 flex items-center gap-2.5 cursor-pointer hover:bg-[#eceef0] transition-colors">
                            <div className="w-8 h-8 rounded-lg bg-[#005931]/10 flex items-center justify-center">
                              <span className="material-symbols-outlined text-[#005931]" style={{ fontSize: 16 }}>
                                {msg.actionCard.icon}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[12px] font-semibold text-[#191c1e] truncate">{msg.actionCard.title}</p>
                              <p className="text-[10px] text-[#6f7a70] truncate">{msg.actionCard.subtitle}</p>
                            </div>
                            <span className="material-symbols-outlined text-[#bfc9be]" style={{ fontSize: 14 }}>chevron_right</span>
                          </div>
                        )}

                        {msg.actions && (
                          <div className="flex flex-wrap gap-1.5 mt-2.5">
                            {msg.actions.map((action) => (
                              <button
                                key={action.label}
                                className={`text-[11px] font-semibold px-3 py-1.5 rounded-full transition-all ${
                                  action.primary
                                    ? msg.role === "user"
                                      ? "bg-white/20 text-white hover:bg-white/30"
                                      : "bg-[#005931] text-white hover:bg-[#176c40] shadow-sm"
                                    : msg.role === "user"
                                    ? "border border-white/30 text-white/90 hover:bg-white/10"
                                    : "border border-[#bfc9be] text-[#3f4941] hover:bg-[#eceef0]"
                                }`}
                              >
                                {action.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      <p className={`text-[9px] text-[#6f7a70] mt-1 ${msg.role === "user" ? "text-right pr-1" : "pl-1"}`}>
                        {msg.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-[#bfc9be] bg-white px-3 py-2.5">
              <div className="flex items-end bg-[#f7f9fb] border border-[#e6e8ea] rounded-xl px-2.5 py-2 focus-within:border-[#005931] focus-within:ring-1 focus-within:ring-[#005931]/10 transition-all">
                <div className="flex-1 flex flex-col">
                  <textarea
                    className="w-full bg-transparent border-none outline-none resize-none text-[13px] text-[#191c1e] placeholder:text-[#bfc9be] px-0.5 py-1 max-h-24"
                    placeholder="Ask Codex..."
                    rows={1}
                    style={{ minHeight: "32px" }}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                  />
                  <div className="flex justify-between items-center pt-0.5">
                    <div className="flex items-center gap-0.5">
                      {[
                        { icon: "image", title: "Upload Image" },
                        { icon: "link", title: "Paste URL" },
                        { icon: "grid_on", title: "Select Range" },
                      ].map((btn) => (
                        <button
                          key={btn.icon}
                          title={btn.title}
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-[#6f7a70] hover:text-[#005931] hover:bg-[#e6e8ea] transition-colors"
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{btn.icon}</span>
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={handleSend}
                      disabled={!input.trim()}
                      className="w-8 h-8 rounded-lg bg-[#005931] text-white flex items-center justify-center hover:bg-[#176c40] transition-all shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 16, fontVariationSettings: "'FILL' 1" }}>send</span>
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-center text-[9px] text-[#bfc9be] mt-1.5">
                Codex AI can make mistakes. Verify important data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
