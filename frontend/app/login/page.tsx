"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push("/chat"), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f9fb] via-[#eceef0] to-[#d5e3fc]/30 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#005931]/5 blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#0b61a1]/5 blur-[100px]" />
      </div>

      <div className="relative w-full max-w-[420px]">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#005931] text-white mb-5 shadow-lg shadow-[#005931]/20">
            <span className="material-symbols-outlined" style={{ fontSize: 32, fontVariationSettings: "'FILL' 1" }}>
              dataset
            </span>
          </div>
          <h1 className="text-2xl font-bold text-[#005931] tracking-tight">
            Codex for Excel
          </h1>
          <p className="text-[13px] text-[#6f7a70] mt-1">
            AI-powered data extraction &amp; analysis
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-[#bfc9be] rounded-2xl shadow-xl shadow-black/5 p-7">
          <h2 className="text-[16px] font-semibold text-[#191c1e] mb-5">Sign in to your workspace</h2>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="text-[10px] font-bold tracking-widest uppercase text-[#6f7a70] mb-1.5 block">
                Email
              </label>
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@example.com"
                className="w-full text-[14px] text-[#191c1e] bg-[#f7f9fb] border border-[#bfc9be] rounded-xl px-4 py-3 focus:outline-none focus:border-[#005931] focus:ring-2 focus:ring-[#005931]/10 transition-all placeholder:text-[#bfc9be]"
              />
            </div>

            <div>
              <label className="text-[10px] font-bold tracking-widest uppercase text-[#6f7a70] mb-1.5 block">
                Password
              </label>
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full text-[14px] text-[#191c1e] bg-[#f7f9fb] border border-[#bfc9be] rounded-xl px-4 py-3 focus:outline-none focus:border-[#005931] focus:ring-2 focus:ring-[#005931]/10 transition-all placeholder:text-[#bfc9be]"
              />
            </div>

            <button
              id="login-submit"
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 mt-1 rounded-xl bg-[#005931] text-white font-semibold text-[14px] hover:bg-[#176c40] transition-all shadow-md shadow-[#005931]/20 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined animate-spin-slow" style={{ fontSize: 18 }}>progress_activity</span>
                  Signing in...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>login</span>
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-[#e6e8ea]" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#bfc9be]">Prototype</span>
            <div className="flex-1 h-px bg-[#e6e8ea]" />
          </div>

          {/* Info */}
          <div className="bg-[#f7f9fb] rounded-xl p-3 border border-[#e6e8ea]">
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#0b61a1] mt-0.5" style={{ fontSize: 18, fontVariationSettings: "'FILL' 1" }}>info</span>
              <p className="text-[12px] text-[#6f7a70] leading-relaxed">
                This is a prototype demo. Click <strong className="text-[#191c1e]">Sign In</strong> to enter — no credentials required.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-[10px] font-bold tracking-widest uppercase text-[#bfc9be] mt-6">
          Codex for Excel &bull; Prototype v1.0
        </p>
      </div>
    </div>
  );
}
