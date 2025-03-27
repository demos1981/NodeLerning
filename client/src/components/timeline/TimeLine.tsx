import React, { useState, useEffect } from "react";
import { TimeLineType } from "types/timeLineTypes";

export const TimeLine: React.FC<TimeLineType> = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const declensionNum = (
    num: number,
    words: [string, string, string]
  ): string => {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  };

  const calculateTimeLeft = () => {
    const diff = Date.parse(deadline) - Date.parse(new Date().toString());

    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

    setTimeLeft({ days, hours, minutes, seconds });

    // if (diff <= 0) {
    //   clearInterval(intervalId);
    // }
  };
  useEffect(() => {
    const intervalId = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Ensure the initial calculation is done immediately

    return () => clearInterval(intervalId);
  }, [deadline]);

  return (
    <div className="timer mt-12">
      <div className="flex flex-row ">
        <div className="timer__item ml-6">
          <div>
            <span className="timer__value timer__days text-xl font-extrabold">
              {timeLeft.days.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="timer__label">
            {declensionNum(timeLeft.days, ["день", "дня", "днів"])}
          </span>
        </div>
        <div className="timer__item ml-6">
          <div>
            <span className="timer__value timer__hours text-xl font-extrabold">
              {timeLeft.hours.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="timer__label">
            {declensionNum(timeLeft.hours, ["година", "години", "годин"])}
          </span>
        </div>
        <div className="timer__item ml-6">
          <div>
            <span className="timer__value timer__minutes text-xl font-extrabold">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="timer__label">
            {declensionNum(timeLeft.minutes, ["хвилина", "хвилини", "хвилин"])}
          </span>
        </div>
        <div className="timer__item ml-6">
          <div>
            <span className="timer__value timer__seconds text-xl font-extrabold">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="timer__label">
            {declensionNum(timeLeft.seconds, ["секунда", "секунди", "секунд"])}
          </span>
        </div>
      </div>
    </div>
  );
};
