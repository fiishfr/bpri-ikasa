type Props = {
  badge: string;
  title: string;
  description: string;
};

export default function SectionTitle({
  badge,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        {badge}
      </span>

      <h2 className="mt-6 text-4xl font-bold">
        {title}
      </h2>

      <p className="mt-5 text-gray-600 leading-8">
        {description}
      </p>
    </div>
  );
}