export interface RowTitleProps {
  title: string;
  subtitle: string;
}

export const RowTitle = ({ title, subtitle }: RowTitleProps) => {
  return (
    <th className="border-r-2 border-black text-base font-medium">
      <p className="leading-none mb-1">{title}</p>
      <p className="text-[10px] leading-none">({subtitle})</p>
    </th>
  );
};
