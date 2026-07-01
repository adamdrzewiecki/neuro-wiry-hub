import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/komora-iv")({
  component: () => <CategoryPage slug="komora-iv" />,
  head: () => ({
    meta: [
      { title: "Komora IV — Neuro Świry" },
    ],
  }),
});
