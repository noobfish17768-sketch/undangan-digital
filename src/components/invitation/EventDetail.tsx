type Props = {
  venue: string;
  eventTime: string;
  mapsUrl?: string | null;
};

export default function EventDetail({
  venue,
  eventTime,
  mapsUrl,
}: Props) {
  return (
    <section className="px-6 py-12">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow p-8">

        <h2 className="text-2xl font-semibold text-center mb-6">
          Detail Acara
        </h2>

        <div className="text-center">
          <p className="font-medium">Waktu</p>
          <p className="text-gray-600">{eventTime}</p>
        </div>

        <div className="mt-6 text-center">
          <p className="font-medium">Lokasi</p>
          <p className="text-gray-600">{venue}</p>
        </div>

        {mapsUrl && (
          <div className="text-center mt-8">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                bg-[#8b6f47]
                text-white
                px-6
                py-3
                rounded-xl
              "
            >
              Buka Google Maps
            </a>
          </div>
        )}

      </div>
    </section>
  );
}