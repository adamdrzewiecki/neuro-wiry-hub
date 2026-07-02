import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/wyspa")({
  component: () => <CategoryPage slug="wyspa" />,
});
