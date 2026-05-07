"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopAppBar from "@/components/TopAppBar";

export default function DataPreviewPage() {
  const [flaggedCells, setFlaggedCells] = useState<
    Array<{ id: string; row: number; col: string; original: string; suggested: string }>
  >([
    {
      id: "1",
      row: 1,
      col: "D",
      original: "$1,450,00S",
      suggested: "$1,450,005"
    },
    {
      id: "2",
      row: 3,
      col: "C",
      original: "$2,I00,000",
      suggested: "$2,100,000"
    }
  ]);

  const handleApplyFix = (id: string) => {
    setFlaggedCells(flaggedCells.filter((cell) => cell.id !== id));
  };

  const handleIgnore = (id: string) => {
    setFlaggedCells(flaggedCells.filter((cell) => cell.id !== id));
  };

  return (
    <div className="flex h-screen bg-surface-dim">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopAppBar />

        <main className="flex-1 flex overflow-hidden p-md gap-md bg-surface-bright">
          <div className="flex-1 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm flex flex-col overflow-hidden">
            <div className="flex justify-between items-center px-md py-sm border-b border-outline-variant bg-surface-container-low">
              <div className="flex items-center space-x-md">
                <span className="font-label-caps text-label-caps text-on-surface-variant">
                  Extracted Data
                </span>
                <div className="h-4 w-px bg-outline-variant"></div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  12 Rows, 5 Columns
                </span>
              </div>
              <div className="flex items-center space-x-sm">
                <button className="p-xs text-on-surface-variant hover:bg-surface-container rounded">
                  <span className="material-symbols-outlined text-sm">
                    filter_list
                  </span>
                </button>
                <button className="p-xs text-on-surface-variant hover:bg-surface-container rounded">
                  <span className="material-symbols-outlined text-sm">
                    search
                  </span>
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-surface-container z-10 shadow-sm border-b border-outline-variant">
                  <tr>
                    <th className="px-md py-sm font-label-caps text-label-caps text-on-surface border-r border-outline-variant w-12 text-center bg-surface-container-high"></th>
                    <th className="px-md py-sm font-label-caps text-label-caps text-on-surface border-r border-outline-variant min-w-40">
                      Department
                    </th>
                    <th className="px-md py-sm font-label-caps text-label-caps text-on-surface border-r border-outline-variant min-w-32 text-right">
                      Q1 Revenue
                    </th>
                    <th className="px-md py-sm font-label-caps text-label-caps text-on-surface border-r border-outline-variant min-w-32 text-right">
                      Q2 Revenue
                    </th>
                    <th className="px-md py-sm font-label-caps text-label-caps text-on-surface border-r border-outline-variant min-w-32 text-right">
                      Q3 Revenue
                    </th>
                    <th className="px-md py-sm font-label-caps text-label-caps text-on-surface min-w-32 text-right">
                      YTD Total
                    </th>
                  </tr>
                </thead>
                <tbody className="font-code text-code text-on-surface divide-y divide-outline-variant">
                  {[
                    {
                      dept: "Sales",
                      q1: "$1,250,000",
                      q2: "$1,320,500",
                      q3: "$1,450,005",
                      ytd: "$4,020,500"
                    },
                    {
                      dept: "Marketing",
                      q1: "$850,200",
                      q2: "$910,000",
                      q3: "$890,500",
                      ytd: "$2,650,700"
                    },
                    {
                      dept: "Engineering",
                      q1: "$2,100,000",
                      q2: "$2,150,000",
                      q3: "$2,250,000",
                      ytd: "$6,500,000"
                    }
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-surface-container-lowest group cursor-default"
                    >
                      <td className="px-md py-sm border-r border-outline-variant bg-surface-container-low text-on-surface-variant text-center text-xs">
                        {idx + 1}
                      </td>
                      <td className="px-md py-sm border-r border-outline-variant group-hover:bg-surface-container-low">
                        {row.dept}
                      </td>
                      <td className="px-md py-sm border-r border-outline-variant text-right group-hover:bg-surface-container-low">
                        {row.q1}
                      </td>
                      <td className="px-md py-sm border-r border-outline-variant text-right group-hover:bg-surface-container-low">
                        {row.q2}
                      </td>
                      <td className="px-md py-sm border-r border-outline-variant text-right group-hover:bg-surface-container-low">
                        {row.q3}
                      </td>
                      <td className="px-md py-sm text-right group-hover:bg-surface-container-low">
                        {row.ytd}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-md py-sm border-t border-outline-variant bg-surface-container-low flex justify-between items-center">
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Showing 1 to 6 of 12 entries
              </span>
              <div className="flex items-center space-x-sm">
                <button className="p-xs text-on-surface-variant hover:bg-surface-container rounded disabled:opacity-50">
                  <span className="material-symbols-outlined text-sm">
                    chevron_left
                  </span>
                </button>
                <span className="font-body-sm text-body-sm text-on-surface">
                  Page 1 of 2
                </span>
                <button className="p-xs text-on-surface-variant hover:bg-surface-container rounded">
                  <span className="material-symbols-outlined text-sm">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="w-80 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm flex flex-col overflow-hidden">
            <div className="px-md py-sm border-b border-outline-variant bg-surface-container-low flex items-center justify-between">
              <div className="flex items-center space-x-sm">
                <span className="material-symbols-outlined text-error text-sm">
                  warning
                </span>
                <span className="font-label-caps text-label-caps text-on-surface font-bold">
                  Flagged Cells
                </span>
              </div>
              <span className="bg-error-container text-on-error-container font-label-caps text-label-caps px-2 py-0.5 rounded-full">
                {flaggedCells.length} Issues
              </span>
            </div>
            <div className="flex-1 overflow-y-auto p-md space-y-md">
              {flaggedCells.map((cell) => (
                <div
                  key={cell.id}
                  className="bg-surface border border-error/30 rounded p-sm shadow-sm relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-error"></div>
                  <div className="flex justify-between items-start mb-xs pl-xs">
                    <span className="font-label-caps text-label-caps text-on-surface-variant">
                      Row {cell.row}, Col {cell.col}
                    </span>
                    <span className="text-[10px] text-error font-semibold bg-error-container px-1.5 rounded-sm">
                      Low Confidence
                    </span>
                  </div>
                  <div className="pl-xs mb-sm">
                    <p className="font-body-sm text-body-sm text-on-surface mb-xs">
                      Possible character misinterpretation.
                    </p>
                    <div className="flex items-center space-x-sm bg-surface-container-low p-xs rounded-sm font-code text-code">
                      <span className="text-error line-through decoration-error/50 opacity-70">
                        {cell.original}
                      </span>
                      <span className="material-symbols-outlined text-xs text-on-surface-variant">
                        arrow_forward
                      </span>
                      <span className="text-on-surface">{cell.suggested}</span>
                    </div>
                  </div>
                  <div className="flex space-x-xs pl-xs mt-sm">
                    <button
                      onClick={() => handleIgnore(cell.id)}
                      className="flex-1 bg-surface-container hover:bg-surface-container-highest text-on-surface font-label-caps text-label-caps py-1 rounded transition-colors border border-outline-variant"
                    >
                      Ignore
                    </button>
                    <button
                      onClick={() => handleApplyFix(cell.id)}
                      className="flex-1 bg-primary text-on-primary font-label-caps text-label-caps py-1 rounded transition-colors hover:bg-surface-tint"
                    >
                      Accept Fix
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <div className="mt-md pt-md border-t border-outline-variant flex justify-between items-center bg-surface-bright pb-xs px-md">
          <button className="flex items-center space-x-sm px-md py-sm border border-outline-variant rounded text-secondary hover:bg-surface-container transition-colors shadow-sm bg-surface-container-lowest font-body-md text-body-md">
            <span className="material-symbols-outlined text-sm">edit</span>
            <span>Edit Table</span>
          </button>
          <button className="flex items-center space-x-sm px-lg py-sm bg-primary text-on-primary rounded hover:bg-surface-tint transition-colors shadow-sm font-body-md text-body-md font-semibold">
            <span className="material-symbols-outlined text-sm">publish</span>
            <span>Commit to Sheet</span>
          </button>
        </div>
      </div>
    </div>
  );
}
