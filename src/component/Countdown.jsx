import { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-04-20T12:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <h2 className="countdown-title">Тойға дейін:</h2>
      <div className="countdown">
        <div>
          {String(timeLeft.days).padStart(2, "0")}
          <span>күн</span>
        </div>
        <span>:</span>
        <div>
          {String(timeLeft.hours).padStart(2, "0")}
          <span>сағат</span>
        </div>
        <span>:</span>
        <div>
          {String(timeLeft.minutes).padStart(2, "0")}
          <span>минут</span>
        </div>
        <span>:</span>
        <div>
          {String(timeLeft.seconds).padStart(2, "0")}
          <span>секунд</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
