import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/kresomozgowie")({
  component: () => <CategoryPage slug="kresomozgowie" />,
  head: () => ({
    meta: [
      { title: "Kresomózgowie — Neuro Świry" },
    ],
  }),
});
