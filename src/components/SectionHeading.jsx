export default function SectionHeading({ heading }) {
  return (
    <h2 className="flex items-center justify-evenly text-6xl p-16">
      {heading}.<div className="w-3/4 border-b-2"></div>
    </h2>
  );
}
