import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/drogi-zmyslow")({
  component: () => <CategoryPage slug="drogi-zmyslow" />,
  head: () => ({
    meta: [
      { title: "Drogi zmysłów — Neuro Świry" },
    ],
  }),
});
