import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/drogi-rdzenia")({
  component: () => <CategoryPage slug="drogi-rdzenia" />,
  head: () => ({
    meta: [
      { title: "Drogi rdzenia — Neuro Świry" },
    ],
  }),
});
