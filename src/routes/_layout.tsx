import { createFileRoute, Outlet } from "@tanstack/react-router";

import Sidebar from "@/components/sidebar";

export const Route = createFileRoute("/_layout")({
  component: Layout,
});

function Layout() {
  return (
    <div className="h-lvh">
      <div className="flex justify-center">
        <div>
          <Sidebar />
        </div>
        <div className="w-[1120px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
