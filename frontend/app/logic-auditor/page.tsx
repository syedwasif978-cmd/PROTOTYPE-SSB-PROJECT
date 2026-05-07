"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopAppBar from "@/components/TopAppBar";

const logicSteps = [
  {
    id: "1",
    num: 1,
    title: "Calculate Total Revenue",
    desc: "Multiply 'Quantity' (Column C) by 'Unit Price' (Column D) for each row in the Sales table.",
    formula: "=C2*D2",
    method: "Excel Formula",
    methodIcon: "functions",
  },
  {
    id: "2",
    num: 2,
    title: "Group by Category",
    desc: "Aggregate the calculated Total Revenue, grouped by the unique values in 'Category' (Column B).",
    formula: "=SUMIFS(E:E, B:B, @Category)",
    method: "Dynamic Array",
    methodIcon: "data_array",
    note: "Codex will generate a unique list of categories using UNIQUE() in a helper column.",
  },
  {
    id: "3",
    num: 3,
    title: "Calculate Year-over-Year Growth",
    desc: "Compare each category total against the previous year data to compute percentage growth.",
    formula: "=(CurrentYear - PriorYear) / PriorYear",
    method: "Derived Column",
    methodIcon: "trending_up",
  },
];

const previewData = [
  { cat: "Electronics", rev: "$14,500.00", growth: "+12.3%" },
  { cat: "Office Supplies", rev: "$3,250.50", growth: "+5.1%" },
  { cat: "Furniture", rev: "$8,900.00", growth: "-2.4%" },
  { cat: "Software", rev: "$22,100.00", growth: "+18.7%" },
];

export default function LogicAuditorPage() {
  const [expanded, setExpanded] = useState<string | null>("1");

  return (
    <div className="flex h-screen bg-[#d8dadc]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopAppBar />

        <main className="flex-1 overflow-y-auto bg-[#f7f9fb] p-5 flex flex-col gap-4">
          {/* Header */}
          <div className="flex justify-between items-end pb-3 border-b border-[#bfc9be]">
            <div>
              <h2 className="text-lg font-semibold text-[#191c1e]">Proposed Logic: Revenue Aggregation</h2>
              <p className="text-[12px] text-[#6f7a70] mt-0.5">
                Review generated steps before applying to <span className="font-medium text-[#3f4941]">Sales_Data.xlsx</span>
              </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#005931] text-white hover:bg-[#176c40] transition-colors shadow-md hover:shadow-lg text-[13px] font-semibold">
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>done_all</span>
              Apply to Workbook
            </button>
          </div>

          {/* Logic Cards */}
          <div className="flex flex-col gap-3">
            {logicSteps.map((card) => (
              <div key={card.id} className="bg-white border border-[#bfc9be] rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 flex items-start gap-3">
                  <div className="w-8 h-8 min-w-[32px] rounded-full bg-[#0b61a1]/10 text-[#0b61a1] flex items-center justify-center text-[12px] font-bold">
                    {card.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-[14px] font-semibold text-[#191c1e]">{card.title}</h3>
                      <span className="flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase text-[#6f7a70] bg-[#eceef0] px-2 py-0.5 rounded-full">
                        <span className="material-symbols-outlined" style={{ fontSize: 12 }}>{card.methodIcon}</span>
                        {card.method}
                      </span>
                    </div>
                    <p className="text-[13px] text-[#6f7a70] leading-relaxed">{card.desc}</p>
                  </div>
                </div>

                {/* Formula Preview Toggle */}
                <div
                  className="mx-4 mb-4 bg-[#f2f4f6] rounded-xl border border-[#e6e8ea] cursor-pointer hover:bg-[#eceef0] transition-colors"
                  onClick={() => setExpanded(expanded === card.id ? null : card.id)}
                >
                  <div className="flex justify-between items-center px-3 py-2.5">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#6f7a70]">Formula Preview</span>
                    <div className="flex items-center gap-1 text-[#0b61a1] text-[12px] font-medium">
                      <span>{expanded === card.id ? "Hide" : "Show"}</span>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                        {expanded === card.id ? "expand_less" : "expand_more"}
                      </span>
                    </div>
                  </div>
                  {expanded === card.id && (
                    <div className="px-3 pb-3 animate-fade-in">
                      <code className="block bg-white text-[13px] font-mono text-[#191c1e] p-3 rounded-lg border border-[#e6e8ea] overflow-x-auto">
                        {card.formula}
                      </code>
                      {card.note && (
                        <p className="text-[11px] text-[#6f7a70] italic mt-2 pl-1">{card.note}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Preview Results Table */}
          <div className="mt-auto bg-white border border-[#bfc9be] rounded-xl shadow-sm flex flex-col overflow-hidden">
            <div className="px-4 py-3 border-b border-[#e6e8ea] bg-[#f2f4f6] flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0b61a1]" style={{ fontSize: 18 }}>preview</span>
                <span className="text-[14px] font-semibold text-[#191c1e]">Preview Results</span>
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#6f7a70] bg-[#eceef0] px-2 py-0.5 rounded-full">
                First 4 Rows
              </span>
            </div>
            <div className="overflow-auto">
              <table className="w-full text-left border-collapse text-[13px]">
                <thead className="bg-[#eceef0]">
                  <tr>
                    <th className="px-4 py-2.5 text-[10px] font-bold tracking-widest uppercase text-[#191c1e] border-r border-[#bfc9be]">Category</th>
                    <th className="px-4 py-2.5 text-[10px] font-bold tracking-widest uppercase text-[#191c1e] border-r border-[#bfc9be] text-right">Total Revenue</th>
                    <th className="px-4 py-2.5 text-[10px] font-bold tracking-widest uppercase text-[#191c1e] text-right">YoY Growth</th>
                  </tr>
                </thead>
                <tbody className="text-[#191c1e]">
                  {previewData.map((row, idx) => (
                    <tr key={idx} className="border-b border-[#e6e8ea] hover:bg-[#f7f9fb] transition-colors">
                      <td className="px-4 py-2.5 border-r border-[#e6e8ea] font-medium">{row.cat}</td>
                      <td className="px-4 py-2.5 border-r border-[#e6e8ea] text-right font-mono text-[12px]">{row.rev}</td>
                      <td className={`px-4 py-2.5 text-right font-mono text-[12px] font-bold ${row.growth.startsWith("+") ? "text-[#005931]" : "text-[#ba1a1a]"}`}>
                        {row.growth}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
