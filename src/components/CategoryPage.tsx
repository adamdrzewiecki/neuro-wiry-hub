import { Link } from "@tanstack/react-router";
import { ArrowLeft, Brain } from "lucide-react";
import { getCategoryBySlug } from "@/lib/categories";
import { TestSettings } from "@/components/TestSettings";
import { Breadcrumbs } from "@/components/Breadcrumbs";

interface CategoryPageProps {
  slug: string;
}

export function CategoryPage({ slug }: CategoryPageProps) {
  const category = getCategoryBySlug(slug);

  if (!category) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-foreground">Nie znaleziono kategorii</h1>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
        >
          <ArrowLeft className="h-4 w-4" />
          Wróć do strony głównej
        </Link>
      </div>
    );
  }

  const hasSubs = category.subcategories.length > 0;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-70">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15">
              <Brain className="h-5 w-5 text-primary" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">Neuro Świry</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Wróć
          </Link>
        </div>
      </header>

      <Breadcrumbs />

      <main className="flex-1 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {category.title}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              {hasSubs
                ? "Wybierz podkategorię lub uruchom test z całej kategorii poniżej."
                : "Uruchom test z pytań z tej kategorii poniżej."}
            </p>
          </div>

          {hasSubs && (
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {category.subcategories.map((sub, index) => (
                <Link
                  key={sub.slug}
                  to="/$category/$subcategory"
                  params={{ category: category.slug, subcategory: sub.slug }}
                  className="group relative inline-flex items-center rounded-[var(--radius)] bg-primary px-4 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 40}ms both`,
                  }}
                >
                  <span className="font-display text-sm leading-none text-primary-foreground">
                    {sub.title}
                  </span>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-16">
            <div className="mx-auto mb-8 max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Ustawienia testu
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Test z całej kategorii
              </h2>
            </div>
            <TestSettings
              scopeLabel={category.title}
              scopeHint="Pytania będą losowane z całej kategorii."
            />
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-6 text-center">
        <p className="text-sm text-muted-foreground">Neuro Świry — nauka neuroanatomii z pasją</p>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
