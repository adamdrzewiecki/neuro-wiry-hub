import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/plat-potyliczny")({
  component: () => <CategoryPage slug="plat-potyliczny" />,
});
