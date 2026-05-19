"use client";

import { useMemo, useState } from "react";

import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export function LoginForm() {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleGoogle() {
    setBusy(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback?next=/home`,
        },
      });
      if (error) {
        alert(error.message);
        return;
      }
      if (data?.url) window.location.href = data.url;
    } finally {
      setBusy(false);
    }
  }

  async function handleEmail(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setBusy(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback?next=/home`,
        },
      });
      if (error) {
        alert(error.message);
        return;
      }
      alert("Listo: revisá tu email para continuar.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/15 dark:bg-zinc-950">
      <div className="text-lg font-semibold tracking-tight">Ingresar</div>
      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        Usá Google o pedí un link mágico por email.
      </p>

      <div className="mt-6 flex flex-col gap-3">
        <button
          type="button"
          onClick={handleGoogle}
          disabled={busy}
          className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Continuar con Google
        </button>

        <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="h-px flex-1 bg-zinc-200 dark:bg-white/15" />
          o
          <div className="h-px flex-1 bg-zinc-200 dark:bg-white/15" />
        </div>

        <form onSubmit={handleEmail} className="flex flex-col gap-3">
          <label className="text-xs font-medium text-zinc-700 dark:text-zinc-200">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="vos@ejemplo.com"
            className="h-11 rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-zinc-300 dark:border-white/15 dark:bg-zinc-950 dark:focus:ring-white/20"
            autoComplete="email"
          />
          <button
            type="submit"
            disabled={busy || !email}
            className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 disabled:opacity-50 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            Enviarme link
          </button>
        </form>
      </div>
    </div>
  );
}
