import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/kresomozgowie-parzyste")({
  component: () => <CategoryPage slug="kresomozgowie-parzyste" />,
  head: () => ({
    meta: [
      { title: "Kresomózgowie parzyste — Neuro Świry" },
    ],
  }),
});
