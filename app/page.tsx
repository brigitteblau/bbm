import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex-1 bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-16">
        <header className="flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">BBM</div>
          <nav className="flex items-center gap-3">
            <Link
              href="/login"
              className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              Ingresar
            </Link>
   
          </nav>
        </header>

        <section className="flex flex-col gap-6">
          <h1 className="max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Landing BBM
          </h1>
  
  
        </section>

     <section className="grid gap-4 sm:grid-cols-3">
  {[
    {
      title: "Carga inteligente",
      desc: "Subí fotos y medidas del perro para generar una prótesis personalizada automáticamente.",
    },
    {
      title: "Modelos 3D",
      desc: "Sistema basado en plantillas open source adaptadas según tamaño, peso y lesión.",
    },
    {
      title: "Red solidaria",
      desc: "Conectamos veterinarios, makers y refugios para imprimir prótesis accesibles.",
    },
  ].map((item) => (
    <div
      key={item.title}
      className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/15 dark:bg-zinc-950"
    >
      <div className="text-sm font-semibold">{item.title}</div>

      <div className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {item.desc}
      </div>
    </div>
  ))}
</section>
      </div>
    </main>
  );
}
