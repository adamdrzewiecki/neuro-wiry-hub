import { useCallback, useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Brain, Check, X } from "lucide-react";
import { z } from "zod";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { fetchManifest, fetchSection, type Question } from "@/lib/quiz-data";
import { buildPool } from "@/lib/quiz-pool";

const quizSearchSchema = z.object({
  sections: z.array(z.number().int()).min(1),
  count: z.union([z.literal(10), z.literal(20), z.literal(30), z.literal(50), z.literal("all")]),
});

export const Route = createFileRoute("/quiz")({
  validateSearch: (search) => quizSearchSchema.parse(search),
  component: QuizPage,
  head: () => ({ meta: [{ title: "Quiz — Neuro Świry" }] }),
});

type AnswerRecord = { questionId: string; selectedIndex: number; correct: boolean };

const LETTERS = ["A", "B", "C", "D"] as const;

function QuizPage() {
  const { sections, count } = Route.useSearch();
  const { data: manifest } = useQuery({ queryKey: ["manifest"], queryFn: fetchManifest, staleTime: Infinity });
  const files = manifest?.sections.filter((s) => sections.includes(s.id)).map((s) => s.file) ?? [];
  const { data: pool, isLoading, error } = useQuery({
    queryKey: ["pool", sections, count],
    queryFn: async () => buildPool(await Promise.all(files.map(fetchSection)), count),
    enabled: !!manifest,
    staleTime: Infinity,
  });
  const [override, setOverride] = useState<Question[] | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [finished, setFinished] = useState(false);

  const questions = override ?? pool ?? [];
  const current = questions[currentIdx];
  const isAnswered = selected !== null;
  const isLast = currentIdx === questions.length - 1;

  const handleSelect = useCallback(
    (idx: number) => {
      if (!current) return;
      if (isAnswered || finished) return;
      const correct = idx === current.correctIndex;
      setSelected(idx);
      setAnswers((prev) => [
        ...prev,
        { questionId: current.id, selectedIndex: idx, correct },
      ]);
    },
    [isAnswered, finished, current],
  );

  const handleNext = useCallback(() => {
    if (!isAnswered) return;
    if (isLast) {
      setFinished(true);
      return;
    }
    setCurrentIdx((i) => i + 1);
    setSelected(null);
  }, [isAnswered, isLast]);

  const restartFromWrong = () => {
    const wrongIds = new Set(answers.filter((a) => !a.correct).map((a) => a.questionId));
    const next = questions.filter((q) => wrongIds.has(q.id));
    if (next.length === 0) return;
    setOverride(next);
    setCurrentIdx(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
  };

  const restartAll = () => {
    setOverride(null);
    setCurrentIdx(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
  };

  // Keyboard: A/B/C/D + Enter
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (finished) return;
      const k = e.key.toLowerCase();
      if (["a", "b", "c", "d"].includes(k)) {
        const idx = ["a", "b", "c", "d"].indexOf(k);
        handleSelect(idx);
      } else if (e.key === "Enter" && isAnswered) {
        handleNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleSelect, handleNext, isAnswered, finished]);

  const correctCount = answers.filter((a) => a.correct).length;
  const wrongCount = answers.filter((a) => !a.correct).length;
  const total = questions.length;
  const percent = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const progressPct = ((currentIdx + (isAnswered ? 1 : 0)) / total) * 100;

  if (error) {
    return <QuizMessage text="Nie udało się wczytać pytań. Odśwież stronę." homeLink />;
  }
  if (isLoading || !pool) {
    return <QuizMessage text="Wczytywanie pytań…" />;
  }
  if (questions.length === 0) {
    return <QuizMessage text="Brak pytań dla wybranych działów." homeLink />;
  }

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

      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-10 sm:py-14">
        {finished ? (
          <ResultScreen
            correct={correctCount}
            wrong={wrongCount}
            total={total}
            percent={percent}
            onFixWrong={restartFromWrong}
            onRestartAll={restartAll}
          />
        ) : (
          <QuestionView
            question={current}
            index={currentIdx}
            total={total}
            selected={selected}
            progressPct={progressPct}
            onSelect={handleSelect}
            onNext={handleNext}
            isLast={isLast}
          />
        )}
      </main>
    </div>
  );
}

function QuizMessage({ text, homeLink }: { text: string; homeLink?: boolean }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-lg text-muted-foreground">{text}</p>
      {homeLink && (
        <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90">
          <ArrowLeft className="h-4 w-4" /> Wróć do wyboru działów
        </Link>
      )}
    </div>
  );
}

function QuestionView({
  question,
  index,
  total,
  selected,
  progressPct,
  onSelect,
  onNext,
  isLast,
}: {
  question: Question;
  index: number;
  total: number;
  selected: number | null;
  progressPct: number;
  onSelect: (i: number) => void;
  onNext: () => void;
  isLast: boolean;
}) {
  const isAnswered = selected !== null;
  const isCorrect = selected === question.correctIndex;

  return (
    <div key={question.id} className="animate-in fade-in duration-300">
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {question.section} › {question.topic}
      </p>

      <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Pytanie <span className="font-semibold text-foreground">{index + 1}</span> z {total}
        </span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <h1 className="mt-8 text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl">
        {question.question}
      </h1>

      <div className="mt-8 space-y-3">
        {question.options.map((answer, idx) => {
          const isSelected = selected === idx;
          const isCorrectAns = idx === question.correctIndex;
          let stateClasses =
            "border-border bg-card text-foreground hover:border-primary/60 hover:bg-primary/5";
          if (isAnswered) {
            if (isCorrectAns) {
              stateClasses =
                "border-emerald-500 bg-emerald-50 text-emerald-950 dark:bg-emerald-500/10 dark:text-emerald-100";
            } else if (isSelected) {
              stateClasses =
                "border-red-500 bg-red-50 text-red-950 dark:bg-red-500/10 dark:text-red-100";
            } else {
              stateClasses = "border-border bg-card text-muted-foreground opacity-70";
            }
          }
          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelect(idx)}
              disabled={isAnswered}
              className={`flex w-full items-center gap-4 rounded-2xl border-2 px-5 py-4 text-left text-base transition-all disabled:cursor-not-allowed ${stateClasses}`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                  isAnswered && isCorrectAns
                    ? "bg-emerald-500 text-white"
                    : isAnswered && isSelected
                      ? "bg-red-500 text-white"
                      : "bg-muted text-foreground"
                }`}
              >
                {LETTERS[idx]}
              </span>
              <span className="flex-1">{answer}</span>
              {isAnswered && isCorrectAns && <Check className="h-5 w-5 text-emerald-600" />}
              {isAnswered && isSelected && !isCorrectAns && (
                <X className="h-5 w-5 text-red-600" />
              )}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="mt-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div
            className={`rounded-2xl px-5 py-4 text-lg font-semibold ${
              isCorrect
                ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                : "bg-red-500/10 text-red-700 dark:text-red-300"
            }`}
          >
            {isCorrect ? "✅ DOBRZE" : "❌ ŹLE"}
          </div>

          <div className="mt-4 rounded-2xl border border-border/60 bg-card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Wyjaśnienie
            </h3>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              {question.explanation}
            </p>
          </div>

          <button
            type="button"
            onClick={onNext}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            {isLast ? "Zakończ test" : "Następne pytanie →"}
          </button>
        </div>
      )}
    </div>
  );
}

function ResultScreen({
  correct,
  wrong,
  total,
  percent,
  onFixWrong,
  onRestartAll,
}: {
  correct: number;
  wrong: number;
  total: number;
  percent: number;
  onFixWrong: () => void;
  onRestartAll: () => void;
}) {
  const allCorrect = wrong === 0;
  const circumference = 2 * Math.PI * 52;
  const dash = useMemo(() => (percent / 100) * circumference, [percent, circumference]);

  return (
    <div className="animate-in fade-in duration-300 text-center">
      {allCorrect ? (
        <>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Gratulacje!
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            🎉 Wszystkie pytania zostały rozwiązane poprawnie.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Test zakończony
          </h1>

          <div className="relative mx-auto mt-8 h-40 w-40">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="10"
              />
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={`${dash} ${circumference}`}
                className="transition-all duration-700"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-foreground">{percent}%</span>
            </div>
          </div>

          <p className="mt-6 text-4xl font-bold tracking-tight text-foreground">
            {correct} / {total}
          </p>
          <div className="mt-4 space-y-1 text-sm text-muted-foreground">
            <p>Poprawne odpowiedzi: <span className="font-semibold text-emerald-600">{correct}</span></p>
            <p>Błędne odpowiedzi: <span className="font-semibold text-red-600">{wrong}</span></p>
            <p>Skuteczność: <span className="font-semibold text-foreground">{percent}%</span></p>
          </div>
        </>
      )}

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" />
          Wróć do wyboru działów
        </Link>
        {allCorrect ? (
          <button
            type="button"
            onClick={onRestartAll}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            Rozwiąż test ponownie
          </button>
        ) : (
          <button
            type="button"
            onClick={onFixWrong}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            Popraw błędne ({wrong})
          </button>
        )}
      </div>
    </div>
  );
}
