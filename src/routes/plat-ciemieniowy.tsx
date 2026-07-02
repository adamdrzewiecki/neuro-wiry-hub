import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/plat-ciemieniowy")({
  component: () => <CategoryPage slug="plat-ciemieniowy" />,
});
