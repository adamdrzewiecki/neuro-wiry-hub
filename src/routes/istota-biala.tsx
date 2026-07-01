import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/istota-biala")({
  component: () => <CategoryPage slug="istota-biala" />,
  head: () => ({
    meta: [
      { title: "Istota biała — Neuro Świry" },
    ],
  }),
});
