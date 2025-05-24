import Image from "next/image";

interface WebtoonProps {
  name: string;
}

export const Webtoon = ({ name }: WebtoonProps) => {
  const bubbleTexts = [
    {
      lines: [
        "이제 본격적으로",
        `${name}님의 사주팔자를`,
        "분석해볼 차례네요.",
      ],
      position: { top: "47%", left: "11%", width: "48%" },
    },
    {
      lines: [`제가 ${name}님의 사주를`, "보기 쉽게 표로 정리했어요"],
      position: { top: "73%", left: "11%", width: "56%" },
    },
  ];

  return (
    <div className="relative">
      <Image
        src="/images/main.png"
        alt="운세박사"
        width={488}
        height={0}
        className="w-full h-auto"
        priority
      />
      {bubbleTexts.map((bubble, index) => (
        <div
          key={index}
          className="absolute flex flex-col items-center justify-center"
          style={{
            top: bubble.position.top,
            left: bubble.position.left,
            width: bubble.position.width,
          }}
        >
          {bubble.lines.map((line, lineIndex) => (
            <p key={lineIndex} className="text-sm xs:text-lg 2xs:text-base">
              {line}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};
