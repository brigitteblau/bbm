import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { SignOutButton } from "./signout-button";

export default async function HomePage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  return (
    <main className="flex-1 bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16">
        <header className="flex items-center justify-between">
          <div className="text-sm font-semibold tracking-tight">BBM</div>
          <SignOutButton />
        </header>

        <section className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/15 dark:bg-zinc-950">
          <div className="text-lg font-semibold tracking-tight">Home</div>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Sesión activa como{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-50">
              {user.email ?? "usuario"}
            </span>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
