import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/komory-mozgu")({
  component: () => <CategoryPage slug="komory-mozgu" />,
  head: () => ({
    meta: [
      { title: "Komory mózgu — Neuro Świry" },
    ],
  }),
});
