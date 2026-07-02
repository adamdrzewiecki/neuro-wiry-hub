import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/plat-skroniowy")({
  component: () => <CategoryPage slug="plat-skroniowy" />,
});
