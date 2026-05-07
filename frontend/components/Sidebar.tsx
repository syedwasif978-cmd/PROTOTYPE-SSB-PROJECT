"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { icon: "chat", label: "Chat", href: "/chat" },
  { icon: "table_chart", label: "Data", href: "/data-preview" },
  { icon: "account_tree", label: "Logic", href: "/logic-auditor" },
  { icon: "bar_chart", label: "Charts", href: "/charts" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-[72px] min-w-[72px] h-full bg-[#f2f4f6] border-r border-[#bfc9be] flex flex-col items-center py-4 gap-1 z-20">
      {/* Logo */}
      <Link href="/chat" className="mb-6 flex items-center justify-center w-10 h-10 rounded-xl bg-[#005931] text-white shadow-md hover:shadow-lg hover:scale-105 transition-all">
        <span className="material-symbols-outlined" style={{ fontSize: 22, fontVariationSettings: "'FILL' 1" }}>
          dataset
        </span>
      </Link>

      {/* Nav Tabs */}
      <div className="flex-1 flex flex-col gap-1 w-full px-2">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link key={tab.href} href={tab.href}>
              <div
                className={`flex flex-col items-center justify-center py-2.5 rounded-xl cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "bg-[#005931]/10 text-[#005931] shadow-sm"
                    : "text-[#6f7a70] hover:bg-[#e6e8ea] hover:text-[#3f4941]"
                }`}
              >
                <span
                  className="material-symbols-outlined mb-0.5"
                  style={{
                    fontSize: 22,
                    fontVariationSettings: isActive ? "'FILL' 1, 'wght' 500" : "'FILL' 0, 'wght' 400",
                  }}
                >
                  {tab.icon}
                </span>
                <span className={`text-[10px] font-semibold tracking-wide ${isActive ? "text-[#005931]" : ""}`}>
                  {tab.label}
                </span>
                {isActive && (
                  <div className="absolute left-0 w-[3px] h-6 bg-[#005931] rounded-r-full" />
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom Action */}
      <div className="mt-auto px-2 w-full">
        <button
          className="w-full flex items-center justify-center py-2.5 rounded-xl bg-[#217346] text-white hover:bg-[#005931] transition-colors shadow-sm hover:shadow-md"
          title="New Analysis"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>add</span>
        </button>
      </div>
    </nav>
  );
}
