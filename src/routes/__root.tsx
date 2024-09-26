import ModalProvider from "@/provider/modal-provider";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <App>
      <Outlet />
    </App>
  ),
});

function App({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <ModalProvider />
    </div>
  );
}
