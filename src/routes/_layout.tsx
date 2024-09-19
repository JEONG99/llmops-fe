import { createFileRoute, Outlet } from "@tanstack/react-router";

import Sidebar from "@/components/sidebar";

export const Route = createFileRoute("/_layout")({
  component: Layout,
});

function Layout() {
  return (
    <div className="flex h-lvh">
      <Sidebar />
      <Outlet />
    </div>
  );
}
