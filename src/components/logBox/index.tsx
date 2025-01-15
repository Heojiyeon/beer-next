type LogBoxProps = {
  title: string;
  description: string;
  createdDate: string;
};

/**
 *
 * @param [title] 제목
 * @param [description] 설명
 * @param [createdDate] 생성 날짜
 * @returns 로그 박스 컴포넌트
 */
export default function LogBox(prop: LogBoxProps) {
  const { title, description, createdDate } = prop;

  return (
    <div className="w-full min-h-[80px] border border-card-defaultBorder hover:border-card-hoverBorder rounded-lg mb-2 hover:bg-card-hoverBackground">
      <div className="flex flex-col justify-center px-4 py-2">
        <p className="font-semibold text-title">{title}</p>
        <p className="text-description text-card-description">{description}</p>
        <p className="text-description text-card-description text-right">
          {createdDate}
        </p>
      </div>
    </div>
  );
}
