import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/miedzymozgowie")({
  component: () => <CategoryPage slug="miedzymozgowie" />,
  head: () => ({
    meta: [
      { title: "Międzymózgowie — Neuro Świry" },
    ],
  }),
});
