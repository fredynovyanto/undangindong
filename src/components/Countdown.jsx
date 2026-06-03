import { useEffect, useState } from "react";

function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const Item = ({ value, label }) => (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        min-w-[70px]
      "
    >
      <span className="text-3xl font-bold">
        {String(value).padStart(2, "0")}
      </span>

      <span className="text-xs uppercase tracking-widest">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center gap-4">
      <Item value={timeLeft.days} label="Hari" />
      <Item value={timeLeft.hours} label="Jam" />
      <Item value={timeLeft.minutes} label="Menit" />
      <Item value={timeLeft.seconds} label="Detik" />
    </div>
  );
}

export default Countdown;
