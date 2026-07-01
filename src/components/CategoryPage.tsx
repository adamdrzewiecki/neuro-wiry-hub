import { Link } from "@tanstack/react-router";
import { ArrowLeft, Brain } from "lucide-react";
import { getCategoryBySlug } from "@/lib/categories";

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

  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full border-b border-border bg-card/60 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-70">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold tracking-tight text-foreground">Neuro Świry</span>
          </Link>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16">
        <div className="max-w-2xl text-center">
          <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10">
            <Brain className="h-10 w-10 text-primary" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {category.title}
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            Treści dla tej kategorii pojawią się wkrótce. Przygotowujemy dla Ciebie
            starannie opracowane materiały i quizy z neuroanatomii.
          </p>

          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              <ArrowLeft className="h-5 w-5" />
              Wróć do strony głównej
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
