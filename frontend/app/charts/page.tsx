"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopAppBar from "@/components/TopAppBar";

const chartTypes = [
  { id: "bar", icon: "bar_chart", label: "Bar" },
  { id: "line", icon: "show_chart", label: "Line" },
  { id: "pie", icon: "pie_chart", label: "Pie" },
  { id: "scatter", icon: "scatter_plot", label: "Scatter" },
];

const colorThemes = [
  { id: "green", color: "#005931", label: "Excel Green" },
  { id: "blue", color: "#0b61a1", label: "Company Blue" },
  { id: "slate", color: "#58667b", label: "Slate" },
];

export default function ChartsPage() {
  const [selectedChart, setSelectedChart] = useState("bar");
  const [chartTitle, setChartTitle] = useState("Sales by Region");
  const [selectedColor, setSelectedColor] = useState("green");
  const [dataLabels, setDataLabels] = useState(true);
  const [legendPosition, setLegendPosition] = useState("bottom");

  return (
    <div className="flex h-screen bg-[#d8dadc]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopAppBar />

        <main className="flex-1 flex overflow-hidden p-4 gap-4 bg-[#f7f9fb]">
          {/* Left: Chart Preview + Recommendations */}
          <div className="flex-1 flex flex-col gap-4 min-w-0">
            {/* Chart Preview */}
            <div className="flex-1 bg-white border border-[#bfc9be] rounded-xl shadow-sm flex flex-col overflow-hidden">
              <div className="px-4 py-3 border-b border-[#e6e8ea] flex justify-between items-center">
                <h2 className="text-[16px] font-semibold text-[#191c1e]">Preview</h2>
                <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-[#005931] bg-[#005931]/10 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#005931] animate-pulse" />
                  Live Data Linked
                </span>
              </div>
              <div className="flex-1 p-6 flex items-center justify-center bg-[#f7f9fb]">
                {/* Demo Chart Visualization */}
                <div className="w-full max-w-lg">
                  <h3 className="text-center text-[14px] font-semibold text-[#191c1e] mb-6">{chartTitle}</h3>
                  <div className="flex items-end justify-center gap-4 h-48">
                    {[
                      { label: "North", value: 85, amount: "$42.5K" },
                      { label: "South", value: 62, amount: "$31.0K" },
                      { label: "East", value: 95, amount: "$47.5K" },
                      { label: "West", value: 78, amount: "$39.0K" },
                    ].map((bar) => (
                      <div key={bar.label} className="flex flex-col items-center gap-1.5 flex-1">
                        {dataLabels && (
                          <span className="text-[10px] font-bold text-[#3f4941]">{bar.amount}</span>
                        )}
                        <div
                          className="w-full rounded-t-lg transition-all duration-500 shadow-sm"
                          style={{
                            height: `${bar.value * 1.6}px`,
                            backgroundColor: colorThemes.find((c) => c.id === selectedColor)?.color || "#005931",
                            opacity: 0.85,
                          }}
                        />
                        <span className="text-[11px] font-medium text-[#6f7a70]">{bar.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-center">
                    <span className="text-[11px] text-[#6f7a70]">Region</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Recommendation */}
            <div className="bg-[#d5e3fc]/30 border border-[#b9c7df] rounded-xl p-4 flex items-start gap-3 shadow-sm">
              <div className="w-10 h-10 min-w-[40px] rounded-xl bg-[#d5e3fc] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#404e62]" style={{ fontSize: 20, fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
              </div>
              <div className="flex-1">
                <h3 className="text-[13px] font-semibold text-[#191c1e]">Smart Recommendation</h3>
                <p className="text-[12px] text-[#6f7a70] mt-0.5 leading-relaxed">
                  Based on your data&apos;s time-series nature, a <strong className="text-[#191c1e]">Line Chart</strong> might show regional sales trends more clearly over fiscal quarters.
                </p>
              </div>
              <button className="text-[12px] font-semibold text-[#005931] bg-white border border-[#bfc9be] px-3 py-2 rounded-lg hover:bg-[#eceef0] transition-colors shadow-sm whitespace-nowrap">
                Apply
              </button>
            </div>
          </div>

          {/* Right: Chart Settings */}
          <aside className="w-[280px] min-w-[280px] bg-white border border-[#bfc9be] rounded-xl shadow-sm flex flex-col overflow-hidden">
            <div className="px-4 py-3 border-b border-[#e6e8ea]">
              <h2 className="text-[16px] font-semibold text-[#191c1e]">Chart Settings</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-5">
              {/* Chart Type */}
              <div>
                <label className="text-[10px] font-bold tracking-widest uppercase text-[#6f7a70] mb-2 block">Chart Type</label>
                <div className="grid grid-cols-4 gap-2">
                  {chartTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedChart(type.id)}
                      className={`flex flex-col items-center gap-1 py-2.5 rounded-xl border transition-all ${
                        selectedChart === type.id
                          ? "bg-[#005931]/10 border-[#005931] text-[#005931] shadow-sm"
                          : "bg-[#f7f9fb] border-[#e6e8ea] text-[#6f7a70] hover:bg-[#eceef0] hover:text-[#3f4941]"
                      }`}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 20, fontVariationSettings: selectedChart === type.id ? "'FILL' 1" : "'FILL' 0" }}>
                        {type.icon}
                      </span>
                      <span className="text-[9px] font-bold tracking-wide uppercase">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart Title */}
              <div>
                <label className="text-[10px] font-bold tracking-widest uppercase text-[#6f7a70] mb-2 block">Chart Title</label>
                <input
                  type="text"
                  value={chartTitle}
                  onChange={(e) => setChartTitle(e.target.value)}
                  className="w-full text-[13px] text-[#191c1e] bg-[#f7f9fb] border border-[#bfc9be] rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#005931] focus:ring-2 focus:ring-[#005931]/10 transition-all"
                />
              </div>

              {/* Color Theme */}
              <div>
                <label className="text-[10px] font-bold tracking-widest uppercase text-[#6f7a70] mb-2 block">Color Theme</label>
                <div className="flex gap-3">
                  {colorThemes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => setSelectedColor(theme.id)}
                      aria-label={theme.label}
                      className="relative w-10 h-10 rounded-full focus:outline-none hover:scale-110 transition-transform"
                    >
                      {selectedColor === theme.id && (
                        <div className="absolute inset-[-4px] rounded-full border-2" style={{ borderColor: theme.color }} />
                      )}
                      <div className="absolute inset-0 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: theme.color }} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Legend Position */}
              <div>
                <label className="text-[10px] font-bold tracking-widest uppercase text-[#6f7a70] mb-2 block">Legend Position</label>
                <div className="flex gap-2">
                  {["bottom", "right", "none"].map((pos) => (
                    <button
                      key={pos}
                      onClick={() => setLegendPosition(pos)}
                      className={`flex-1 text-[11px] font-semibold py-2 rounded-lg border capitalize transition-all ${
                        legendPosition === pos
                          ? "bg-[#005931]/10 border-[#005931] text-[#005931]"
                          : "bg-[#f7f9fb] border-[#e6e8ea] text-[#6f7a70] hover:bg-[#eceef0]"
                      }`}
                    >
                      {pos}
                    </button>
                  ))}
                </div>
              </div>

              {/* Data Labels Toggle */}
              <div className="flex items-center justify-between pt-3 border-t border-[#e6e8ea]">
                <span className="text-[13px] text-[#191c1e]">Show Data Labels</span>
                <button
                  onClick={() => setDataLabels(!dataLabels)}
                  className={`w-10 h-5 rounded-full relative transition-colors ${dataLabels ? "bg-[#005931]" : "bg-[#bfc9be]"}`}
                >
                  <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${dataLabels ? "right-0.5" : "left-0.5"}`} />
                </button>
              </div>
            </div>

            {/* Insert Button */}
            <div className="p-4 border-t border-[#e6e8ea]">
              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#005931] text-white font-semibold text-[13px] hover:bg-[#176c40] transition-colors shadow-md hover:shadow-lg">
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>add_chart</span>
                Insert Chart
              </button>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
