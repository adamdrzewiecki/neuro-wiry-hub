import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/uklad-nerwowy-autonomiczny")({
  component: () => <CategoryPage slug="uklad-nerwowy-autonomiczny" />,
  head: () => ({
    meta: [
      { title: "Układ nerwowy autonomiczny — Neuro Świry" },
    ],
  }),
});
