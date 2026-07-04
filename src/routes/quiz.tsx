import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Brain } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const Route = createFileRoute("/quiz")({
  component: QuizPlaceholderPage,
  head: () => ({
    meta: [
      { title: "Quiz — Neuro Świry" },
    ],
  }),
});

function QuizPlaceholderPage() {
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
        </div>
      </header>

      <Breadcrumbs />

      <main className="flex flex-1 items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Brain className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Quiz coming soon
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Funkcja quizu jest w trakcie przygotowania. Wróć wkrótce!
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            <ArrowLeft className="h-4 w-4" />
            Wróć do strony głównej
          </Link>
        </div>
      </main>
    </div>
  );
}
