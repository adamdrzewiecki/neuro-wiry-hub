import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/nerwy-czaszkowe")({
  component: () => <CategoryPage slug="nerwy-czaszkowe" />,
  head: () => ({
    meta: [
      { title: "Nerwy czaszkowe — Neuro Świry" },
    ],
  }),
});
