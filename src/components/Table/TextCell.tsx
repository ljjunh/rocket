import { STYLES } from "@/constants/styles";

export interface TextCellProps {
  items: Array<{ chinese: string; korean: string }>;
}

export const TextCell = ({ items }: TextCellProps) => {
  return (
    <td className={`${STYLES.borderThinGray} text-sm bg-[#FDFDFB]`}>
      <div className="flex flex-col gap-3 py-3">
        {items.map((item, i) => (
          <div key={i}>
            <div className="flex flex-col gap-1">
              <span className="text-base font-bold leading-none">
                {item.chinese}
              </span>
              <span className="text-xs leading-none">({item.korean})</span>
            </div>
          </div>
        ))}
      </div>
    </td>
  );
};
