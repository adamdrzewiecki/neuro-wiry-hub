import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/ogolnew")({
  component: () => <CategoryPage slug="ogolnew" />,
  head: () => ({
    meta: [
      { title: "Ogólnew — Neuro Świry" },
    ],
  }),
});