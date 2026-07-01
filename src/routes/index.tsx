import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, ChevronRight } from "lucide-react";
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

      <main className="flex-1">
        <section className="px-4 pb-6 pt-16 sm:px-6 sm:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-[var(--radius-2xl)] bg-primary/10">
              <Brain className="h-10 w-10 text-primary" />
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Neuro{" "}
              <span className="text-primary">Świry</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              NeuroPsychole zawsze przyjmą z otwartymi aksonami.
            </p>
          </div>
        </section>

        <section className="px-4 pb-20 pt-8 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {categories.map((category, index) => (
                <Link
                  key={category.slug}
                  to={`/${category.slug}`}
                  className="group relative flex min-h-[120px] flex-col items-start justify-between overflow-hidden rounded-[var(--radius)] bg-card p-5 shadow-sm ring-1 ring-border/50 transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-lg hover:shadow-primary/8 hover:ring-primary/20"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 30}ms both`,
                  }}
                >
                  <span className="text-sm font-medium text-muted-foreground">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="mt-2 font-display text-base font-semibold leading-snug text-card-foreground transition-colors group-hover:text-primary sm:text-lg">
                    {category.title}
                  </span>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <ChevronRight className="h-5 w-5 text-primary" />
                  </div>
                </Link>
              ))}
            </div>
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
