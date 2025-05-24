import { STYLES } from "@/constants/styles";

export const Header = () => {
  return (
    <thead className="border-b-2 border-black h-12">
      <tr>
        <th className={`${STYLES.borderThickBlack} w-[20%]`}></th>
        <th className={STYLES.borderThinGray}>時</th>
        <th className={STYLES.borderThinGray}>日</th>
        <th className={STYLES.borderThinGray}>月</th>
        <th className="w-[20%]">年</th>
      </tr>
    </thead>
  );
};
