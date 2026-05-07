"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopAppBar from "@/components/TopAppBar";

export default function LogicAuditorPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="flex h-screen bg-surface-dim">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopAppBar />

        <main className="flex-1 overflow-y-auto bg-surface-container-lowest p-lg flex flex-col space-y-lg">
          <div className="flex justify-between items-end pb-sm border-b border-outline-variant">
            <div>
              <h2 className="font-h2 text-h2 text-on-surface mb-xs">
                Proposed Logic: Revenue Aggregation
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Review the generated steps before applying to &apos;Sales_Data.xlsx&apos;
              </p>
            </div>
            <button className="bg-primary hover:bg-surface-tint text-on-primary font-body-md text-body-md px-md py-sm rounded shadow-sm transition-colors flex items-center space-x-xs">
              <span className="material-symbols-outlined text-sm">done_all</span>
              <span>Apply to Workbook</span>
            </button>
          </div>

          <div className="flex-1 flex flex-col space-y-md">
            {[
              {
                id: "1",
                num: "1",
                title: "Calculate Total Revenue",
                desc: "Multiply 'Quantity' (Column C) by 'Unit Price' (Column D) for each row.",
                formula: "=C2*D2"
              },
              {
                id: "2",
                num: "2",
                title: "Group by Category",
                desc: "Aggregate the calculated Total Revenue, grouped by the unique values in 'Category' (Column B).",
                formula: "=SUMIFS(E:E, B:B, Unique_Category_Ref)"
              }
            ].map((card) => (
              <div
                key={card.id}
                className="bg-surface-bright border border-outline-variant rounded-lg p-md shadow-sm"
              >
                <div className="flex items-start space-x-sm mb-md">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-caps text-label-caps mt-xs">
                    {card.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-body-md text-body-md text-on-surface font-semibold mb-xs">
                      {card.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {card.desc}
                    </p>
                  </div>
                </div>
                <div
                  className="bg-surface-container-low rounded p-sm border border-outline-variant relative group cursor-pointer hover:bg-surface-container transition-colors"
                  onClick={() =>
                    setExpanded(expanded === card.id ? null : card.id)
                  }
                >
                  <div className="flex justify-between items-center">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                      Formula Preview
                    </span>
                    <div className="flex items-center text-secondary font-body-sm text-body-sm space-x-xs">
                      <span>
                        {expanded === card.id ? "Hide" : "Show"} Formula
                      </span>
                      <span className="material-symbols-outlined text-sm">
                        {expanded === card.id ? "expand_less" : "expand_more"}
                      </span>
                    </div>
                  </div>
                  {expanded === card.id && (
                    <div className="mt-sm">
                      <code className="font-code text-code text-on-surface bg-surface p-xs rounded block w-full overflow-x-auto border border-outline-variant border-opacity-50">
                        {card.formula}
                      </code>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto bg-surface border border-outline-variant rounded-lg flex flex-col h-64 shadow-sm">
            <div className="px-md py-sm border-b border-outline-variant bg-surface-container-lowest rounded-t-lg flex justify-between items-center">
              <h4 className="font-body-md text-body-md font-semibold text-on-surface flex items-center space-x-xs">
                <span className="material-symbols-outlined text-sm text-secondary">
                  preview
                </span>
                <span>Preview Results</span>
              </h4>
              <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-container px-xs py-xs rounded">
                First 5 Rows
              </span>
            </div>
            <div className="flex-1 overflow-auto p-0">
              <table className="w-full text-left border-collapse font-body-sm text-body-sm">
                <thead className="sticky top-0 bg-surface-container shadow-sm z-10">
                  <tr>
                    <th className="px-sm py-xs font-semibold text-on-surface border-b border-r border-outline-variant w-1/2">
                      Category
                    </th>
                    <th className="px-sm py-xs font-semibold text-on-surface border-b border-outline-variant bg-primary/10 relative">
                      Total Revenue
                      <div className="absolute top-0 left-0 w-full h-xs bg-primary"></div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-on-surface-variant">
                  {[
                    { cat: "Electronics", rev: "$14,500.00" },
                    { cat: "Office Supplies", rev: "$3,250.50" },
                    { cat: "Furniture", rev: "$8,900.00" },
                    { cat: "Software", rev: "$22,100.00" }
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-surface-container-lowest border-b border-outline-variant border-opacity-50"
                    >
                      <td className="px-sm py-xs border-r border-outline-variant">
                        {row.cat}
                      </td>
                      <td className="px-sm py-xs font-code text-code">
                        {row.rev}
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
