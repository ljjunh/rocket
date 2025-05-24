import { STYLES } from "@/constants/styles";
import Image from "next/image";
import { PropsWithChildren } from "react";
import { ElementCell } from "./ElementCell";
import { Header } from "./Header";
import { Row } from "./Row";
import { TextCell } from "./TextCell";

export interface TableProps {
  title: string;
  subtitle: string;
}

const Table = ({
  title,
  subtitle,
  children,
}: PropsWithChildren<TableProps>) => {
  return (
    <div className="relative bg-[#F5F3EC] border-[3px] border-[#1B2F49] m-3 mt-[-18px] z-50">
      <div className="relative flex justify-center">
        <Image
          src="/images/leftDecoration.png"
          alt="left-decoration"
          width={32}
          height={32}
          className="absolute w-[20%] h-auto left-2 top-[34%]"
        />
        <Image
          src="/images/rightDecoration.png"
          alt="right-decoration"
          width={32}
          height={32}
          className="absolute w-[20%] h-auto right-2 top-[14%]"
        />
        <div className="flex flex-col items-center mt-10 mb-6 gap-1">
          <p className="text-lg">{title}</p>
          <p className="text-xl font-bold">{subtitle}</p>
        </div>
      </div>

      <div className={`${STYLES.doubleBorderLine} top-2 w-full`} />
      <div className={`${STYLES.doubleBorderLine} bottom-2 w-full`} />
      <div className={`${STYLES.doubleBorderLine} top-0 left-2 h-full`} />
      <div className={`${STYLES.doubleBorderLine} top-0 right-2 h-full`} />

      <div className="w-full px-4 mobileM:px-5">
        <table
          className={`${STYLES.borderThickBlack} w-full table-fixed mb-10 border-b-2 text-center text-xl`}
        >
          {children}
        </table>
      </div>
    </div>
  );
};

// 컴포넌트 합성
Table.Header = Header;
Table.Row = Row;
Table.ElementCell = ElementCell;
Table.TextCell = TextCell;

export default Table;
