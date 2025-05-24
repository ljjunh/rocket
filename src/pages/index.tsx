import { Layout } from "@/components/Layout";
import { SajuTable } from "@/components/SajuTable";
import { Webtoon } from "@/components/Webtoon";

export default function Home() {
  const name = "김로켓";
  const birth = "1980년 8월 27일 08:10";

  return (
    <Layout>
      <div className="flex flex-col">
        <Webtoon name={name} />
        <SajuTable name={name} birth={birth} />
      </div>
    </Layout>
  );
}
