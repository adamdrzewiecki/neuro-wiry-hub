import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/rdzen-kregowy")({
  component: () => <CategoryPage slug="rdzen-kregowy" />,
  head: () => ({
    meta: [
      { title: "Rdzeń kręgowy — Neuro Świry" },
    ],
  }),
});
