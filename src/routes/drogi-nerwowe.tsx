import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/drogi-nerwowe")({
  component: () => <CategoryPage slug="drogi-nerwowe" />,
  head: () => ({
    meta: [
      { title: "Drogi nerwowe — Neuro Świry" },
    ],
  }),
});
