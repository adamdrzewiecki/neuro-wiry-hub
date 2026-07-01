import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/mozgowie-i-rdzen-nerwowy")({
  component: () => <CategoryPage slug="mozgowie-i-rdzen-nerwowy" />,
  head: () => ({
    meta: [
      { title: "Mózgowie i rdzeń nerwowy — Neuro Świry" },
    ],
  }),
});
