"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Bypass auth — just redirect
    setTimeout(() => {
      router.push("/chat");
    }, 400);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-md">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-on-primary mb-md shadow-lg">
            <span
              className="material-symbols-outlined text-[32px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              dataset
            </span>
          </div>
          <h1 className="font-h1 text-h1 text-primary mb-xs">
            Codex for Excel
          </h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Sign in to your workspace
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-lg p-lg">
          <form onSubmit={handleLogin} className="flex flex-col gap-md">
            {/* Email */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-caps text-label-caps text-on-surface-variant">
                EMAIL
              </label>
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@example.com"
                className="font-body-md text-body-md text-on-surface bg-surface border border-outline-variant rounded-lg px-md py-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full transition-all"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-caps text-label-caps text-on-surface-variant">
                PASSWORD
              </label>
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="font-body-md text-body-md text-on-surface bg-surface border border-outline-variant rounded-lg px-md py-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full transition-all"
              />
            </div>

            {/* Submit */}
            <button
              id="login-submit"
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-on-primary font-body-md font-semibold py-sm rounded-lg shadow-sm hover:bg-surface-tint transition-all flex items-center justify-center gap-sm mt-sm disabled:opacity-70"
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">
                    progress_activity
                  </span>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">
                    login
                  </span>
                  <span>Sign In</span>
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-md my-md">
            <div className="flex-1 h-px bg-outline-variant"></div>
            <span className="font-label-caps text-label-caps text-on-surface-variant">
              PROTOTYPE
            </span>
            <div className="flex-1 h-px bg-outline-variant"></div>
          </div>

          {/* Info notice */}
          <p className="text-center font-body-sm text-body-sm text-on-surface-variant">
            Click <strong className="text-on-surface">Sign In</strong> to enter
            the prototype. No credentials required.
          </p>
        </div>

        {/* Footer */}
        <p className="text-center font-label-caps text-label-caps text-on-surface-variant mt-lg opacity-60">
          Codex for Excel • Prototype v1.0
        </p>
      </div>
    </div>
  );
}
