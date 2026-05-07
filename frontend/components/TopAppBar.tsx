"use client";

import { usePathname } from "next/navigation";

const phaseLabels: Record<string, string> = {
  "/chat": "Conversation",
  "/data-preview": "Phase I: Extraction",
  "/logic-auditor": "Phase II: Calculations",
  "/charts": "Phase III: Visualization",
};

export default function TopAppBar() {
  const pathname = usePathname();
  const phaseLabel = phaseLabels[pathname] || "";

  return (
    <header className="h-14 min-h-[56px] bg-white border-b border-[#bfc9be] flex justify-between items-center px-4 z-10 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      {/* Left: Brand + Phase */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#005931] shadow-[0_0_6px_rgba(0,89,49,0.4)]" title="Connected" />
          <h1 className="text-lg font-semibold text-[#005931] tracking-tight">
            Codex for Excel
          </h1>
        </div>
        {phaseLabel && (
          <span className="hidden sm:inline-flex items-center text-[10px] font-bold tracking-widest uppercase text-[#3f4941] bg-[#e6e8ea] px-2.5 py-1 rounded-full">
            {phaseLabel}
          </span>
        )}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-1">
        {["history", "settings", "help_outline"].map((icon) => (
          <button
            key={icon}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#6f7a70] hover:bg-[#eceef0] hover:text-[#3f4941] transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{icon}</span>
          </button>
        ))}
        <div className="ml-2 w-8 h-8 rounded-full bg-[#005931] text-white flex items-center justify-center text-xs font-bold cursor-pointer hover:ring-2 hover:ring-[#005931]/30 transition-all">
          U
        </div>
      </div>
    </header>
  );
}
