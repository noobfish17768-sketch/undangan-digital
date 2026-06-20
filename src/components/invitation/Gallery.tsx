type Props = {
  images: string[];
};

export default function Gallery({
  images,
}: Props) {
  return (
    <section className="px-6 py-16">
      <h2 className="text-center text-3xl font-semibold mb-8">
        Galeri
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="rounded-xl object-cover aspect-square"
          />
        ))}
      </div>
    </section>
  );
}