import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/playground")({
  component: PlaygroundPage,
});

function PlaygroundPage() {
  return <div>Hello /_layout/playground!</div>;
}
