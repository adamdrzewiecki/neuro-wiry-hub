import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Brain } from "lucide-react";
import { getCategoryBySlug, getSubcategory } from "@/lib/categories";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const Route = createFileRoute("/$category/$subcategory")({
  component: SubcategoryPage,
  loader: ({ params }) => {
    const category = getCategoryBySlug(params.category);
    const subcategory = getSubcategory(params.category, params.subcategory);
    if (!category || !subcategory) throw notFound();
    return { category, subcategory };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.subcategory.title} — Ustawienia testu — Neuro Świry`
          : "Neuro Świry",
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-foreground">Nie znaleziono podkategorii</h1>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
      >
        <ArrowLeft className="h-4 w-4" />
        Wróć do strony głównej
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="p-8 text-center text-destructive">{error.message}</div>
  ),
});

function SubcategoryPage() {
  const { category, subcategory } = Route.useLoaderData();

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
            to="/$category"
            params={{ category: category.slug }}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {category.title}
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-12 sm:py-16">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Ustawienia testu
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {subcategory.title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {category.title}
          </p>
        </div>

        <section className="mb-10 rounded-3xl border border-border/60 bg-card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-foreground">Liczba pytań</h2>
          <RadioGroup defaultValue="10" className="mt-4 space-y-3">
            {[
              { value: "10", label: "10" },
              { value: "30", label: "30" },
              { value: "all", label: "Wszystkie" },
            ].map((opt) => (
              <div key={opt.value} className="flex items-center gap-3">
                <RadioGroupItem value={opt.value} id={`count-${opt.value}`} />
                <Label htmlFor={`count-${opt.value}`} className="cursor-pointer text-base">
                  {opt.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </section>

        <section className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-foreground">Tagi</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Tagi pojawią się wkrótce.
          </p>
        </section>
      </main>
    </div>
  );
}
