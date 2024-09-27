import { createRootRoute, Outlet } from "@tanstack/react-router";

import ModalProvider from "@/provider/modal-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

export const Route = createRootRoute({
  component: () => (
    <App>
      <Outlet />
    </App>
  ),
});

function App({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <div>
        {children}
        <ModalProvider />
      </div>
    </TooltipProvider>
  );
}
