export interface ElementCellProps {
  chinese: string;
  korean: string;
  element: string;
}

const ELEMENT_COLOR_MAP: Record<
  string,
  { bgColor: string; textColor: string }
> = {
  火: { bgColor: "#C23030", textColor: "#FFFFFF" },
  水: { bgColor: "#2F2F2F", textColor: "#FFFFFF" },
  木: { bgColor: "#18868C", textColor: "#FFFFFF" },
  金: { bgColor: "#F9F9F9", textColor: "#000000" },
  土: { bgColor: "#A3A3A3", textColor: "#FFFFFF" },
};

export const ElementCell = ({ chinese, korean, element }: ElementCellProps) => {
  const key = element.slice(-1);
  const colors = ELEMENT_COLOR_MAP[key] || {
    bgColor: "#FDFDFB",
    textColor: "#000000",
  };
  const borderColor =
    colors.textColor === "#000000" ? "#000000" : colors.bgColor;

  return (
    <td className={`border-r border-[#979796] w-1/5 text-sm bg-[#FDFDFB]`}>
      <div
        className="flex flex-col gap-1 border rounded-2xl m-1 py-1"
        style={{
          backgroundColor: colors.bgColor,
          color: colors.textColor,
          borderColor,
        }}
      >
        <p className="text-[10px] leading-none">{korean}</p>
        <p className="text-2xl font-bold leading-none">{chinese}</p>
        <p className="text-xs leading-none">{element}</p>
      </div>
    </td>
  );
};
