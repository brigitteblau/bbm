"use client";

import { useMemo, useState } from "react";

import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export function SignOutButton() {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [busy, setBusy] = useState(false);

  return (
    <button
      disabled={busy}
      onClick={async () => {
        setBusy(true);
        try {
          await supabase.auth.signOut();
          window.location.href = "/";
        } finally {
          setBusy(false);
        }
      }}
      className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-900 hover:bg-zinc-50 disabled:opacity-50 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
    >
      Cerrar sesión
    </button>
  );
}

