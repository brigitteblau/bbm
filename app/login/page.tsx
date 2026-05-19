import Link from "next/link";
import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { LoginForm } from "./login-form";
import { ErrorAlert } from "./error-alert";

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = (await searchParams) ?? {};

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) redirect("/home");

  return (
    <main className="flex-1 bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16">
        <header className="flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            BBM
          </Link>
          <Link
            href="/"
            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Volver
          </Link>
        </header>

        {typeof sp.error === "string" ? <ErrorAlert /> : null}
        <LoginForm />
      </div>
    </main>
  );
}
