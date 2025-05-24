import Table from "./Table";

interface SajuTableProps {
  name: string;
  birth: string;
}

export const SajuTable = ({ name, birth }: SajuTableProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Table title={`${name}님의 사주`} subtitle={birth}>
        <Table.Header />
        <tbody>
          <Table.Row title="十星" subtitle="십성">
            <Table.TextCell items={[{ chinese: "傷官", korean: "상관" }]} />
            <Table.TextCell items={[{ chinese: "比肩", korean: "비견" }]} />
            <Table.TextCell items={[{ chinese: "傷官", korean: "상관" }]} />
            <Table.TextCell items={[{ chinese: "傷官", korean: "상관" }]} />
          </Table.Row>

          <Table.Row title="天干" subtitle="천간">
            <Table.ElementCell chinese="壬" korean="임" element="陽水" />
            <Table.ElementCell chinese="丁" korean="정" element="陰火" />
            <Table.ElementCell chinese="癸" korean="계" element="陰水" />
            <Table.ElementCell chinese="癸" korean="계" element="陰水" />
          </Table.Row>

          <Table.Row title="地支" subtitle="지지">
            <Table.ElementCell chinese="寅" korean="인" element="陽木" />
            <Table.ElementCell chinese="巳" korean="사" element="陰火" />
            <Table.ElementCell chinese="亥" korean="해" element="陰水" />
            <Table.ElementCell chinese="酉" korean="유" element="陰金" />
          </Table.Row>

          <Table.Row title="十星" subtitle="십성">
            <Table.TextCell items={[{ chinese: "比肩", korean: "비견" }]} />
            <Table.TextCell items={[{ chinese: "劫財", korean: "겁재" }]} />
            <Table.TextCell items={[{ chinese: "食神", korean: "식신" }]} />
            <Table.TextCell items={[{ chinese: "偏財", korean: "편재" }]} />
          </Table.Row>

          <Table.Row title="十二運星" subtitle="십이운성">
            <Table.TextCell items={[{ chinese: "死", korean: "사" }]} />
            <Table.TextCell items={[{ chinese: "帝旺", korean: "제왕" }]} />
            <Table.TextCell items={[{ chinese: "胎", korean: "태" }]} />
            <Table.TextCell items={[{ chinese: "長生", korean: "장생" }]} />
          </Table.Row>

          <Table.Row title="十二神殺" subtitle="십이신살">
            <Table.TextCell items={[{ chinese: "劫殺", korean: "겁살" }]} />
            <Table.TextCell items={[{ chinese: "地殺", korean: "지살" }]} />
            <Table.TextCell items={[{ chinese: "驛馬殺", korean: "역마살" }]} />
            <Table.TextCell items={[{ chinese: "將星殺", korean: "장성살" }]} />
          </Table.Row>

          <Table.Row title="貴人" subtitle="귀인">
            <Table.TextCell items={[{ chinese: "", korean: "없음" }]} />
            <Table.TextCell items={[{ chinese: "", korean: "없음" }]} />
            <Table.TextCell items={[{ chinese: "天乙", korean: "천을귀인" }]} />
            <Table.TextCell
              items={[
                { chinese: "天乙", korean: "천을귀인" },
                { chinese: "太極", korean: "태극귀인" },
                { chinese: "文昌", korean: "문창귀인" },
              ]}
            />
          </Table.Row>
        </tbody>
      </Table>
    </div>
  );
};
