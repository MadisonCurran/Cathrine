import { useEffect, useState } from "react";
import "./countdown.css";

//ToDo change theBigDay variable to correct date!!

const theBigDay = new Date("2025-03-16T13:00:00").getTime();

function getTimeTill() {
  const timeLeft = theBigDay - new Date().getTime();
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minuets = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);
  return { days, hours, minuets, seconds };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeTill());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeTill());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="countdownBorder">
      <h2 className="countdownHeading">Countdown</h2>
      <div className="countdown">
        {Object.entries(timeLeft).map((timeLeft) => {
          const label = timeLeft[0];
          const time = timeLeft[1];
          return (
            <div className="countdownCard" key={label}>
              <span className="timeLeft">{time}</span>
              <span className="timeLabel">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
