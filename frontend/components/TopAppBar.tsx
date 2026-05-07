"use client";

export default function TopAppBar() {
  return (
    <header className="bg-surface border-b border-outline-variant shadow-sm flex justify-between items-center px-md py-xs w-full shrink-0 z-10 min-h-14">
      <div className="flex items-center gap-sm">
        <h1 className="font-h1 text-h1 text-primary">Codex for Excel</h1>
      </div>
      <div className="flex items-center gap-sm text-on-surface-variant">
        <button className="p-sm rounded-full hover:bg-surface-container transition-colors cursor-pointer active:opacity-80">
          <span className="material-symbols-outlined">account_tree</span>
        </button>
        <button className="p-sm rounded-full hover:bg-surface-container transition-colors cursor-pointer active:opacity-80">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <button className="p-sm rounded-full hover:bg-surface-container transition-colors cursor-pointer active:opacity-80">
          <span className="material-symbols-outlined">info</span>
        </button>
        <div
          className="ml-sm w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden cursor-pointer"
          title="User Avatar"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="User Avatar"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ4CeMi6yX1lpvCMTm2KxTychFBIO4HpPieoHOik59qPZIPm6fU9f3D_oRBMuYylxDLidZviEXDlG2vydwCyEjyPzXKrVpcBtkOUIjU5vC5YFUkwM3OdRMpmWpSL6OKi47qUBCrRVpxgoacH_HyPJKeXjxRv12eWIyerARJpmkPk2WYBazDBuRiQMhgGJtk5UV6LXMIRtewuVo9PxHxKJpg53WMnOnJIkSomhR78XhmwvnRwoWMdUENXpHN4qJgkVKarcEsJ-Az0Sv"
          />
        </div>
      </div>
    </header>
  );
}
