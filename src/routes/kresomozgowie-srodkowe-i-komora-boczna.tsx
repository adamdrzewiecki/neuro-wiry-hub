import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/kresomozgowie-srodkowe-i-komora-boczna")({
  component: () => <CategoryPage slug="kresomozgowie-srodkowe-i-komora-boczna" />,
  head: () => ({
    meta: [
      { title: "Kresomózgowie środkowe i komora boczna — Neuro Świry" },
    ],
  }),
});
