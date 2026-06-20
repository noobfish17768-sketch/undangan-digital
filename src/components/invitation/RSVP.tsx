export default function RSVP() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-md mx-auto">
        <h2 className="text-center text-3xl font-semibold mb-8">
          RSVP
        </h2>

        <form className="space-y-4">
          <input
            placeholder="Nama"
            className="w-full border rounded-xl p-3"
          />

          <select
            className="w-full border rounded-xl p-3"
          >
            <option>Hadir</option>
            <option>Tidak Hadir</option>
          </select>

          <button
            className="w-full bg-[#8b6f47] text-white rounded-xl p-3"
          >
            Kirim
          </button>
        </form>
      </div>
    </section>
  );
}