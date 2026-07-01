import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/pien-mozgu")({
  component: () => <CategoryPage slug="pien-mozgu" />,
  head: () => ({
    meta: [
      { title: "Pień mózgu — Neuro Świry" },
    ],
  }),
});
