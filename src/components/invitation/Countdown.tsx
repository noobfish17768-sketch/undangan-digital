"use client";

import { useEffect, useState } from "react";

type Props = {
  targetDate: string;
};

export default function Countdown({
  targetDate,
}: Props) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const diff =
        new Date(targetDate).getTime() -
        new Date().getTime();

      setDays(
        Math.max(
          0,
          Math.floor(
            diff / (1000 * 60 * 60 * 24)
          )
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="py-16 text-center">
      <h2 className="text-lg text-gray-500 mb-3">
        Menuju Hari Bahagia
      </h2>

      <div className="text-5xl font-bold text-[#8b6f47]">
        {days}
      </div>

      <p className="mt-2 text-gray-600">
        Hari Lagi
      </p>
    </section>
  );
}