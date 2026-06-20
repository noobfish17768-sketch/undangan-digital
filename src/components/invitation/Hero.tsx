type HeroProps = {
  groomName: string;
  brideName: string;
  eventDate: Date;
};

export default function Hero({
  groomName,
  brideName,
  eventDate,
}: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-[#faf7f2] to-white">
      <p className="uppercase tracking-[0.3em] text-gray-500">
        <div className="text-6xl mb-8 text-[#d4b483]">
        ✦
        </div>
        The Wedding Of
      </p>

      <h1 className="text-5xl font-bold mt-6 text-[#8b6f47]">
        {groomName}
      </h1>

      <span className="text-2xl my-3 text-[#8b6f47]">
        &
      </span>

      <h1 className="text-5xl font-bold text-[#8b6f47]">
        {brideName}
      </h1>

      <p className="mt-8 text-gray-600">
        {eventDate.toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
    </section>
  );
}