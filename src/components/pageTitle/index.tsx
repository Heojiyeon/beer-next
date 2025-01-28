type PageTitleProps = {
  title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <p className="text-title text-card-description mb-6 md:text-pageHead w-full flex md:justify-start justify-center">
      {title}
    </p>
  );
}
