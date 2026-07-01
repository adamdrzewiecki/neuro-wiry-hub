import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/uklad-czuciowy")({
  component: () => <CategoryPage slug="uklad-czuciowy" />,
  head: () => ({
    meta: [
      { title: "Układ czuciowy — Neuro Świry" },
    ],
  }),
});
