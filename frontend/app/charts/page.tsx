"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopAppBar from "@/components/TopAppBar";

export default function ChartsPage() {
  const [selectedChart, setSelectedChart] = useState("bar");
  const [chartTitle, setChartTitle] = useState("Sales by Region");
  const [dataLabels, setDataLabels] = useState(true);

  const chartTypes = [
    { id: "bar", icon: "bar_chart", label: "Bar" },
    { id: "line", icon: "show_chart", label: "Line" },
    { id: "pie", icon: "pie_chart", label: "Pie" },
    { id: "scatter", icon: "scatter_plot", label: "Scatter" }
  ];

  return (
    <div className="flex h-screen bg-surface-dim">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopAppBar />

        <main className="flex-1 flex overflow-hidden p-md gap-md bg-surface-bright">
          <div className="flex-1 flex flex-col gap-md min-w-0">
            <div className="flex-1 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm flex flex-col overflow-hidden relative">
              <div className="px-md py-sm border-b border-outline-variant bg-surface flex justify-between items-center">
                <h2 className="font-h2 text-h2 text-on-surface">Preview</h2>
                <span className="font-label-caps text-label-caps text-primary px-sm py-xs bg-primary-container/20 rounded">
                  LIVE DATA LINKED
                </span>
              </div>
              <div className="flex-1 p-lg bg-surface-container-lowest flex items-center justify-center relative">
                <div className="w-full h-full max-w-4xl relative rounded-lg border border-outline border-dashed p-sm flex items-center justify-center bg-surface-container-low">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="absolute inset-0 w-full h-full object-cover rounded shadow-sm opacity-90 mix-blend-multiply"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOlO5gSDG5gac1HL5exNyqO4fhYTSX9I03gsCl9eyT0wEjMpClRrMIF6H1Z_ck2TTkQoGo9-W3hL03KkfG7FQ-cXP8btpOyiU-hwK4jsumycp9Ia7kGlHfvtD9VAtyb9Tf4tEUNzQYDbjPkhW2ZnGogeZ4V0W3YCulM8u24-pjteTwkiOzyTU4B74NjVrXdkihfjJr40jECuJDIfn6kYDbRYPHgvhYeyKBmEIFUyLx9-CecXvgTOrnjdoNCTRSUA-hMRwK-QzYmqKi"
                    alt="Chart preview"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>

            <div className="bg-tertiary-fixed/30 border border-tertiary-fixed-dim rounded-xl p-md flex items-start gap-md shadow-sm shrink-0">
              <div className="p-sm bg-tertiary-fixed rounded-lg text-tertiary flex items-center justify-center">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  lightbulb
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-body-md text-body-md text-on-surface font-semibold">
                  Smart Recommendations
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">
                  Based on your data&apos;s time-series nature, a{" "}
                  <strong className="text-on-surface">Line Chart</strong> might
                  show regional sales trends more clearly over the fiscal
                  quarters.
                </p>
              </div>
              <button className="bg-surface-container-lowest text-primary border border-outline-variant font-body-sm px-md py-sm rounded-lg hover:bg-surface hover:text-primary-container transition-colors shadow-sm whitespace-nowrap font-medium">
                Apply Suggestion
              </button>
            </div>
          </div>

          <aside className="w-80 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm flex flex-col shrink-0 overflow-y-auto">
            <div className="p-md border-b border-outline-variant sticky top-0 bg-surface-container-lowest z-10">
              <h2 className="font-h2 text-h2 text-on-surface">Chart Settings</h2>
            </div>
            <div className="p-md flex flex-col gap-lg flex-1">
              <div className="flex flex-col gap-sm">
                <label className="font-label-caps text-label-caps text-on-surface-variant">
                  CHART TYPE
                </label>
                <div className="grid grid-cols-4 gap-sm">
                  {chartTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedChart(type.id)}
                      className={`rounded-lg p-sm flex flex-col items-center justify-center gap-xs transition-colors ${
                        selectedChart === type.id
                          ? "bg-primary-container/10 border border-primary text-primary"
                          : "bg-surface border border-outline-variant text-on-surface-variant hover:bg-surface-container"
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">
                        {type.icon}
                      </span>
                      <span className="font-label-caps text-xs">
                        {type.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-sm">
                <label className="font-label-caps text-label-caps text-on-surface-variant">
                  CHART TITLE
                </label>
                <input
                  className="font-body-md text-body-md text-on-surface bg-surface border border-outline-variant rounded-lg px-md py-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full shadow-inner"
                  type="text"
                  value={chartTitle}
                  onChange={(e) => setChartTitle(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-sm">
                <label className="font-label-caps text-label-caps text-on-surface-variant">
                  COLOR THEME
                </label>
                <div className="flex gap-md">
                  <button
                    aria-label="Excel Green"
                    className="group relative w-10 h-10 rounded-full focus:outline-none"
                  >
                    <div className="absolute inset-0 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-surface-container-lowest"></div>
                    <div className="absolute inset-0 rounded-full bg-primary border border-primary/20"></div>
                  </button>
                  <button
                    aria-label="Company Blue"
                    className="group relative w-10 h-10 rounded-full focus:outline-none hover:scale-105 transition-transform"
                  >
                    <div className="absolute inset-0 rounded-full bg-secondary border border-outline-variant"></div>
                  </button>
                  <button
                    aria-label="Slate"
                    className="group relative w-10 h-10 rounded-full focus:outline-none hover:scale-105 transition-transform"
                  >
                    <div className="absolute inset-0 rounded-full bg-surface-variant border border-outline"></div>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mt-sm pt-md border-t border-outline-variant">
                <span className="font-body-sm text-body-sm text-on-surface">
                  Show Data Labels
                </span>
                <button
                  onClick={() => setDataLabels(!dataLabels)}
                  className={`w-8 h-4 rounded-full relative transition-colors cursor-pointer ${
                    dataLabels ? "bg-primary" : "bg-surface-variant"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 w-3 h-3 bg-on-primary rounded-full shadow-sm transition-transform ${
                      dataLabels ? "right-0.5" : "left-0.5"
                    }`}
                  ></span>
                </button>
              </div>
            </div>

            <div className="p-md border-t border-outline-variant bg-surface mt-auto sticky bottom-0">
              <button className="w-full bg-primary text-on-primary font-body-md font-semibold py-md rounded-lg shadow-sm hover:opacity-90 hover:shadow transition-all flex items-center justify-center gap-sm">
                <span className="material-symbols-outlined text-sm">
                  add_chart
                </span>
                Insert Chart
              </button>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
