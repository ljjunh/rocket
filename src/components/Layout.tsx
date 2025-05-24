import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <div className="max-w-md min-w-80 mx-auto">{children}</div>;
};
