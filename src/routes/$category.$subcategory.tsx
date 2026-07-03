import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Brain, Search } from "lucide-react";
import { getCategoryBySlug, getSubcategory } from "@/lib/categories";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

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

function pluralizeTags(n: number): string {
  if (n === 1) return "tag";
  const lastTwo = n % 100;
  if (lastTwo >= 12 && lastTwo <= 14) return "tagów";
  const last = n % 10;
  if (last >= 2 && last <= 4) return "tagi";
  return "tagów";
}

function SubcategoryPage() {
  const { category, subcategory } = Route.useLoaderData();
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [selectedCount, setSelectedCount] = useState("10");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  };

  const countLabel = selectedCount === "all" ? "Wszystkie" : selectedCount;

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
          <RadioGroup value={selectedCount} onValueChange={setSelectedCount} className="mt-4 space-y-3">
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

        <section className="mb-10 rounded-3xl border border-border/60 bg-card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-foreground">Tagi</h2>
          <div className="mt-4 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Szukaj tagów..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {selectedTags.size === 0
                ? "Nie wybrano tagów"
                : `Wybrano ${selectedTags.size} ${pluralizeTags(selectedTags.size)}`}
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "neuron",
                "dendryt",
                "akson",
                "synapsa",
                "receptor",
                "neuroprzekaźnik",
                "mielina",
                "istota szara",
                "istota biała",
                "kora mózgowa",
              ]
                .filter(
                  (tag) =>
                    selectedTags.has(tag) ||
                    tag.toLowerCase().includes(searchQuery.toLowerCase()),
                )
                .map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-sm transition-all ${
                      selectedTags.has(tag)
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-foreground">Podsumowanie</h2>
          <div className="mt-4 space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Wybrana kategoria</p>
              <p className="text-base text-foreground">{subcategory.title}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Liczba pytań</p>
              <p className="text-base text-foreground">{countLabel}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Wybrane tagi</p>
              <div className="mt-1 flex flex-wrap gap-2">
                {selectedTags.size === 0 ? (
                  <span className="text-sm text-muted-foreground">Brak wybranych tagów</span>
                ) : (
                  Array.from(selectedTags).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm text-primary-foreground"
                    >
                      {tag}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>
          <button
            type="button"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            Rozpocznij test
          </button>
        </section>
      </main>
    </div>
  );
}
