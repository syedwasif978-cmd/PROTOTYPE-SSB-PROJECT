"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const tabs = [
    { icon: "chat", label: "Chat", href: "/chat" },
    { icon: "table_chart", label: "Data Preview", href: "/data-preview" },
    { icon: "account_tree", label: "Logic Steps", href: "/logic-auditor" },
    { icon: "bar_chart", label: "Charts", href: "/charts" }
  ];

  return (
    <nav className="bg-surface-container-low border-r border-outline-variant docked h-screen left-0 w-20 flex flex-col items-center py-lg space-y-md h-full shrink-0 z-20">
      <div className="mb-xl flex flex-col items-center cursor-pointer">
        <span
          className="material-symbols-outlined text-primary text-[32px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          dataset
        </span>
      </div>

      <div className="flex-1 flex flex-col w-full px-xs space-y-sm">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link key={tab.href} href={tab.href}>
              <div
                className={`w-full aspect-square flex flex-col items-center justify-center rounded-lg transition-all duration-200 ease-in-out cursor-pointer group ${
                  isActive
                    ? "text-primary border-l-4 border-primary bg-surface-container-high"
                    : "text-on-surface-variant hover:bg-surface-container-highest"
                }`}
              >
                <span
                  className={`material-symbols-outlined mb-xs transition-colors ${
                    isActive ? "text-primary" : "group-hover:text-primary"
                  }`}
                >
                  {tab.icon}
                </span>
                <span
                  className={`font-label-caps text-label-caps text-center text-xs ${
                    isActive ? "text-primary" : "opacity-0 group-hover:opacity-100"
                  } transition-opacity`}
                >
                  {tab.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto pb-md px-xs w-full">
        <button
          className="w-full aspect-square rounded-full bg-primary-container text-on-primary-container flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
          title="New Analysis"
        >
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
    </nav>
  );
}
