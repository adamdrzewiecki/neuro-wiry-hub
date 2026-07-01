import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/zmysly")({
  component: () => <CategoryPage slug="zmysly" />,
  head: () => ({
    meta: [
      { title: "Zmysły — Neuro Świry" },
    ],
  }),
});
