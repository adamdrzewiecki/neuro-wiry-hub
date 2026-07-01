import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/drogi-czucia")({
  component: () => <CategoryPage slug="drogi-czucia" />,
  head: () => ({
    meta: [
      { title: "Drogi czucia — Neuro Świry" },
    ],
  }),
});
