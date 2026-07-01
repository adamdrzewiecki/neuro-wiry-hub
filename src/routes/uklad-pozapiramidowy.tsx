import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/uklad-pozapiramidowy")({
  component: () => <CategoryPage slug="uklad-pozapiramidowy" />,
  head: () => ({
    meta: [
      { title: "Układ pozapiramidowy — Neuro Świry" },
    ],
  }),
});
