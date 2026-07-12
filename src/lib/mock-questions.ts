export interface QuizQuestion {
  id: string;
  category: string;
  question: string;
  answers: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
}

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt lorem quis risus malesuada.";

function makeExplanation(correct: "A" | "B" | "C" | "D"): string {
  const others = (["A", "B", "C", "D"] as const).filter((l) => l !== correct);
  return `${lorem} Prawidłową odpowiedzią była odpowiedź ${correct}, ponieważ lorem ipsum dolor sit amet, consectetur adipiscing elit. Odpowiedź ${others[0]} jest nieprawidłowa, ponieważ lorem ipsum dolor sit amet. Odpowiedź ${others[1]} również jest błędna z uwagi na lorem ipsum dolor sit amet. Odpowiedź ${others[2]} nie jest poprawna, ponieważ lorem ipsum dolor sit amet. Dzięki temu użytkownik otrzymuje pełne wyjaśnienie wszystkich odpowiedzi w jednym spójnym opisie.`;
}

const letters = ["A", "B", "C", "D"] as const;

export const MOCK_QUESTIONS: QuizQuestion[] = Array.from({ length: 10 }, (_, i) => {
  const correctIndex = (i % 4) as 0 | 1 | 2 | 3;
  return {
    id: `q-${i + 1}`,
    category: "Układ limbiczny > Hipokamp > Funkcje",
    question: `Lorem ipsum dolor sit amet, consectetur adipiscing elit ${i + 1}? Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?`,
    answers: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor",
      "Incididunt ut labore",
    ],
    correctIndex,
    explanation: makeExplanation(letters[correctIndex]),
  };
});
