import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/")({
  component: ModelManagingPage,
});

function ModelManagingPage() {
  return (
    <div>
      <div className="h-[68px]"></div>
    </div>
  );
}
