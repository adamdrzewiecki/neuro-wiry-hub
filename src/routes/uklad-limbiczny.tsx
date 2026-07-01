import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/uklad-limbiczny")({
  component: () => <CategoryPage slug="uklad-limbiczny" />,
  head: () => ({
    meta: [
      { title: "Układ limbiczny — Neuro Świry" },
    ],
  }),
});
