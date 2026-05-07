"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopAppBar from "@/components/TopAppBar";

const tableData = [
  { dept: "Sales", q1: "$1,250,000", q2: "$1,320,500", q3: "$1,450,005", ytd: "$4,020,505", flagQ3: false },
  { dept: "Marketing", q1: "$850,200", q2: "$910,000", q3: "$890,500", ytd: "$2,650,700", flagQ3: false },
  { dept: "Engineering", q1: "$2,100,000", q2: "$2,150,000", q3: "$2,250,000", ytd: "$6,500,000", flagQ1: false },
  { dept: "Support", q1: "$420,000", q2: "$450,000", q3: "$480,000", ytd: "$1,350,000", flagQ3: false },
  { dept: "Operations", q1: "$600,000", q2: "$620,000", q3: "$650,000", ytd: "$1,870,000", flagQ3: false },
  { dept: "HR", q1: "$150,000", q2: "$160,000", q3: "$170,000", ytd: "$480,000", flagQ3: false },
];

interface FlaggedCell {
  id: string;
  row: number;
  col: string;
  desc: string;
  original: string;
  suggested: string;
}

export default function DataPreviewPage() {
  const [flaggedCells, setFlaggedCells] = useState<FlaggedCell[]>([
    { id: "1", row: 1, col: "D", desc: "Character misread: 'S' interpreted as '5'", original: "$1,450,00S", suggested: "$1,450,005" },
    { id: "2", row: 3, col: "C", desc: "Character misread: 'I' interpreted as '1'", original: "$2,I00,000", suggested: "$2,100,000" },
  ]);

  const handleFix = (id: string) => setFlaggedCells((prev) => prev.filter((c) => c.id !== id));

  return (
    <div className="flex h-screen bg-[#d8dadc]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopAppBar />

        <main className="flex-1 flex flex-col overflow-hidden bg-[#f7f9fb]">
          {/* Header Bar */}
          <div className="px-5 py-4 flex justify-between items-center border-b border-[#bfc9be]">
            <div>
              <h2 className="text-lg font-semibold text-[#191c1e]">Pre-commit Preview</h2>
              <p className="text-[12px] text-[#6f7a70] mt-0.5">
                Review extracted data from <span className="font-medium text-[#3f4941]">Q3_Financials_Scan.png</span> before committing to sheet
              </p>
            </div>
            <div className="flex items-center gap-2 bg-[#005931]/10 text-[#005931] px-3 py-2 rounded-xl border border-[#005931]/20">
              <span className="material-symbols-outlined" style={{ fontSize: 18, fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="text-[13px] font-bold">98% Accurate</span>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex gap-4 p-4 overflow-hidden">
            {/* Table Panel */}
            <div className="flex-1 bg-white border border-[#bfc9be] rounded-xl shadow-sm flex flex-col overflow-hidden">
              {/* Table Toolbar */}
              <div className="flex justify-between items-center px-4 py-2.5 border-b border-[#e6e8ea] bg-[#f2f4f6]">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#6f7a70]">Extracted Data</span>
                  <div className="w-px h-4 bg-[#bfc9be]" />
                  <span className="text-[12px] text-[#6f7a70]">6 Rows, 5 Columns</span>
                </div>
                <div className="flex items-center gap-1">
                  {["filter_list", "search"].map((icon) => (
                    <button key={icon} className="w-8 h-8 rounded-lg flex items-center justify-center text-[#6f7a70] hover:bg-[#e6e8ea] hover:text-[#3f4941] transition-colors">
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{icon}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="flex-1 overflow-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="sticky top-0 bg-[#eceef0] z-10 shadow-sm">
                    <tr>
                      <th className="px-3 py-2.5 text-[10px] font-bold tracking-widest uppercase text-[#6f7a70] border-r border-[#bfc9be] w-10 text-center bg-[#e6e8ea]">#</th>
                      <th className="px-3 py-2.5 text-[10px] font-bold tracking-widest uppercase text-[#191c1e] border-r border-[#bfc9be] min-w-[140px]">Department</th>
                      <th className="px-3 py-2.5 text-[10px] font-bold tracking-widest uppercase text-[#191c1e] border-r border-[#bfc9be] min-w-[110px] text-right">Q1 Revenue</th>
                      <th className="px-3 py-2.5 text-[10px] font-bold tracking-widest uppercase text-[#191c1e] border-r border-[#bfc9be] min-w-[110px] text-right">Q2 Revenue</th>
                      <th className="px-3 py-2.5 text-[10px] font-bold tracking-widest uppercase text-[#191c1e] border-r border-[#bfc9be] min-w-[110px] text-right">Q3 Revenue</th>
                      <th className="px-3 py-2.5 text-[10px] font-bold tracking-widest uppercase text-[#191c1e] min-w-[110px] text-right">YTD Total</th>
                    </tr>
                  </thead>
                  <tbody className="text-[13px] font-medium text-[#191c1e]">
                    {tableData.map((row, idx) => (
                      <tr key={idx} className="border-b border-[#e6e8ea] hover:bg-[#f7f9fb] transition-colors">
                        <td className="px-3 py-2.5 border-r border-[#e6e8ea] bg-[#f2f4f6] text-[#6f7a70] text-center text-[11px] font-mono">{idx + 1}</td>
                        <td className="px-3 py-2.5 border-r border-[#e6e8ea] font-semibold">{row.dept}</td>
                        <td className="px-3 py-2.5 border-r border-[#e6e8ea] text-right font-mono text-[12px]">{row.q1}</td>
                        <td className="px-3 py-2.5 border-r border-[#e6e8ea] text-right font-mono text-[12px]">{row.q2}</td>
                        <td className="px-3 py-2.5 border-r border-[#e6e8ea] text-right font-mono text-[12px]">{row.q3}</td>
                        <td className="px-3 py-2.5 text-right font-mono text-[12px] font-bold">{row.ytd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-4 py-2.5 border-t border-[#e6e8ea] bg-[#f2f4f6] flex justify-between items-center">
                <span className="text-[11px] text-[#6f7a70]">Showing 1 to 6 of 12 entries</span>
                <div className="flex items-center gap-2">
                  <button className="w-7 h-7 rounded-lg flex items-center justify-center text-[#6f7a70] hover:bg-[#e6e8ea] disabled:opacity-30" disabled>
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chevron_left</span>
                  </button>
                  <span className="text-[11px] font-medium text-[#191c1e]">1 / 2</span>
                  <button className="w-7 h-7 rounded-lg flex items-center justify-center text-[#6f7a70] hover:bg-[#e6e8ea]">
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Flagged Cells Panel */}
            <div className="w-[300px] min-w-[300px] bg-white border border-[#bfc9be] rounded-xl shadow-sm flex flex-col overflow-hidden">
              <div className="px-4 py-3 border-b border-[#e6e8ea] bg-[#f2f4f6] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ba1a1a]" style={{ fontSize: 18 }}>warning</span>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#191c1e]">Flagged Cells</span>
                </div>
                <span className="text-[10px] font-bold bg-[#ffdad6] text-[#93000a] px-2 py-0.5 rounded-full">
                  {flaggedCells.length} Issues
                </span>
              </div>

              <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
                {flaggedCells.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
                    <span className="material-symbols-outlined text-[#005931] mb-2" style={{ fontSize: 32, fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <p className="text-[13px] font-semibold text-[#191c1e]">All clear!</p>
                    <p className="text-[11px] text-[#6f7a70] mt-1">No issues detected in the extracted data.</p>
                  </div>
                ) : (
                  flaggedCells.map((cell) => (
                    <div key={cell.id} className="bg-[#f7f9fb] border border-[#ba1a1a]/20 rounded-xl p-3 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#ba1a1a] rounded-r" />
                      <div className="pl-2">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-[10px] font-bold tracking-widest uppercase text-[#6f7a70]">Row {cell.row}, Col {cell.col}</span>
                          <span className="text-[9px] font-bold bg-[#ffdad6] text-[#93000a] px-1.5 py-0.5 rounded">Low Confidence</span>
                        </div>
                        <p className="text-[12px] text-[#3f4941] mb-2">{cell.desc}</p>
                        <div className="flex items-center gap-2 bg-white p-2 rounded-lg border border-[#e6e8ea] font-mono text-[12px]">
                          <span className="text-[#ba1a1a] line-through opacity-60">{cell.original}</span>
                          <span className="material-symbols-outlined text-[#6f7a70]" style={{ fontSize: 14 }}>arrow_forward</span>
                          <span className="text-[#005931] font-bold">{cell.suggested}</span>
                        </div>
                        <div className="flex gap-2 mt-2.5">
                          <button onClick={() => handleFix(cell.id)} className="flex-1 text-[10px] font-bold tracking-wide uppercase py-1.5 rounded-lg border border-[#bfc9be] text-[#3f4941] bg-white hover:bg-[#eceef0] transition-colors">
                            Ignore
                          </button>
                          <button onClick={() => handleFix(cell.id)} className="flex-1 text-[10px] font-bold tracking-wide uppercase py-1.5 rounded-lg bg-[#005931] text-white hover:bg-[#176c40] transition-colors shadow-sm">
                            Accept Fix
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="px-5 py-3 border-t border-[#bfc9be] bg-white flex justify-between items-center shadow-[0_-2px_8px_rgba(0,0,0,0.04)]">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#bfc9be] text-[#0b61a1] bg-white hover:bg-[#eceef0] transition-colors text-[13px] font-semibold">
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>edit</span>
              Edit Table
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#005931] text-white hover:bg-[#176c40] transition-colors shadow-md hover:shadow-lg text-[13px] font-semibold">
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>publish</span>
              Commit to Sheet
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
