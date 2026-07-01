import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/ogolne")({
  component: () => <CategoryPage slug="ogolne" />,
  head: () => ({
    meta: [
      { title: "Ogólne — Neuro Świry" },
    ],
  }),
});
