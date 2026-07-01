import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/uklad-ruchowy")({
  component: () => <CategoryPage slug="uklad-ruchowy" />,
  head: () => ({
    meta: [
      { title: "Układ ruchowy — Neuro Świry" },
    ],
  }),
});
