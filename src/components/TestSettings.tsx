import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface TestSettingsProps {
  scopeLabel: string;
  scopeHint?: string;
}

function pluralizeTags(n: number): string {
  if (n === 1) return "tag";
  const lastTwo = n % 100;
  if (lastTwo >= 12 && lastTwo <= 14) return "tagów";
  const last = n % 10;
  if (last >= 2 && last <= 4) return "tagi";
  return "tagów";
}

const AVAILABLE_TAGS = [
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
];

const COUNT_OPTIONS = [
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "30", label: "30" },
  { value: "50", label: "50" },
  { value: "all", label: "Wszystkie" },
];

export function TestSettings({ scopeLabel, scopeHint }: TestSettingsProps) {
  const navigate = useNavigate();
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [selectedCount, setSelectedCount] = useState("10");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const countLabel = selectedCount === "all" ? "Wszystkie" : selectedCount;

  return (
    <div className="mx-auto w-full max-w-2xl">
      <section className="mb-10 rounded-3xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-foreground">Liczba pytań</h2>
        {scopeHint && (
          <p className="mt-1 text-sm text-muted-foreground">{scopeHint}</p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {COUNT_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setSelectedCount(opt.value)}
              className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all ${
                selectedCount === opt.value
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
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
            {AVAILABLE_TAGS.filter(
              (tag) =>
                selectedTags.has(tag) ||
                tag.toLowerCase().includes(searchQuery.toLowerCase()),
            ).map((tag) => (
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
            <p className="text-base text-foreground">{scopeLabel}</p>
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
          onClick={() => navigate({ to: "/quiz" })}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90"
        >
          Rozpocznij test
        </button>
      </section>
    </div>
  );
}
