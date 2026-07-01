import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/jadra-podstawy")({
  component: () => <CategoryPage slug="jadra-podstawy" />,
  head: () => ({
    meta: [
      { title: "Jądra podstawy — Neuro Świry" },
    ],
  }),
});
