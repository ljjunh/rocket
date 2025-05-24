import { PropsWithChildren } from "react";
import { RowTitle } from "./RowTitle";

export interface RowProps {
  title: string;
  subtitle: string;
}

export const Row = ({
  children,
  title,
  subtitle,
}: PropsWithChildren<RowProps>) => {
  return (
    <tr className={"border-b-2 border-black h-12"}>
      <RowTitle title={title} subtitle={subtitle} />
      {children}
    </tr>
  );
};
