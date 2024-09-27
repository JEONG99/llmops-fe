import { createFileRoute, Outlet } from "@tanstack/react-router";

import Sidebar from "@/components/common/sidebar";

export const Route = createFileRoute("/_layout")({
  component: Layout,
});

function Layout() {
  return (
    <div className="h-lvh">
      <div className="flex justify-center h-full">
        <div className="relative w-[284px]">
          <Sidebar />
        </div>
        <div className="w-[1156px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
