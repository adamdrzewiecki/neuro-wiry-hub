import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/drogi-wstepujace-i-zstepujace")({
  component: () => <CategoryPage slug="drogi-wstepujace-i-zstepujace" />,
  head: () => ({
    meta: [
      { title: "Drogi wstępujące i zstępujące — Neuro Świry" },
    ],
  }),
});
