import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/mozdzek")({
  component: () => <CategoryPage slug="mozdzek" />,
  head: () => ({
    meta: [
      { title: "Móżdżek — Neuro Świry" },
    ],
  }),
});
