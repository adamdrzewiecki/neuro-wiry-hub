import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TestSettings } from "@/components/TestSettings";
import { Brain } from "lucide-react";
import { categories } from "@/lib/categories";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15">
              <Brain className="h-5 w-5 text-primary" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Neuro Świry
            </span>
          </div>
        </div>
      </header>

      <Breadcrumbs />

      <main className="flex-1">
        <section className="px-4 pb-6 pt-16 sm:px-6 sm:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-[var(--radius-2xl)] bg-primary/10">
              <Brain className="h-10 w-10 text-primary" />
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Neuro <span className="text-primary">Świry</span>
            </h1>

          </div>
        </section>

        <section className="px-4 pb-16 pt-8 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <Link
                  key={category.slug}
                  to={`/${category.slug}`}
                  className="group relative inline-flex items-center rounded-[var(--radius)] bg-primary px-4 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 25}ms both`,
                  }}
                >
                  <span className="font-display text-sm leading-none text-primary-foreground">
                    {category.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Ustawienia testu
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Test ze wszystkich kategorii
              </h2>
            </div>
            <TestSettings
              scopeLabel="Wszystkie kategorie"
              scopeHint="Pytania będą losowane ze wszystkich kategorii."
            />
          </div>
        </section>

      </main>

      <footer className="border-t border-border py-6 text-center">
        <p className="text-sm text-muted-foreground">
          Neuro Świry — nauka neuroanatomii z pasją
        </p>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
