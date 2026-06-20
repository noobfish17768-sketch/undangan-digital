type Props = {
  groomName: string;
  brideName: string;
  groomParent?: string | null;
  brideParent?: string | null;
};

export default function Couple({
  groomName,
  brideName,
  groomParent,
  brideParent,
}: Props) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-12 text-[#8b6f47]">
          Mempelai
        </h2>

        <div className="space-y-12">

          <div>
            <h3 className="text-4xl font-bold">
              {groomName}
            </h3>

            <p className="mt-4 text-gray-600">
              Putra dari
            </p>

            <p className="text-gray-800">
              {groomParent}
            </p>
          </div>

          <div className="text-4xl text-[#8b6f47]">
            ♥
          </div>

          <div>
            <h3 className="text-4xl font-bold">
              {brideName}
            </h3>

            <p className="mt-4 text-gray-600">
              Putri dari
            </p>

            <p className="text-gray-800">
              {brideParent}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}