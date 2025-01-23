type ErrorInfoProps = {
  title: string;
  onClick: () => void;
};

export default function ErrorInfo({ title, onClick }: ErrorInfoProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-pageHead text-card-description">{title}</p>
      <button
        onClick={onClick}
        className="mt-4 px-4 py-2 bg-card-hoverBorder text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}
