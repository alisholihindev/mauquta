import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "../index.css";
import { useEffect } from "react";
import moment from "moment/moment";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;


const Iqomah = () => {
  const [time, setTime] = useState(new Date());
  const stratTimes= Date.now(); // use UNIX timestamp in seconds
  const stratTime = stratTimes / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 300; // use UNIX timestamp in seconds
  const [endTimer, setEndTime] = useState(moment(stratTimes).add(5, 'm').toDate());

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  
  function refreshClock() {
    setTime(new Date());
    
    console.log(time);
    console.log(endTimer);
    
    if(moment(time).format('h:mm a') == moment(endTimer).format('h:mm a')){
      window.location.assign('/');
    }
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [time]);


  return (
    <div>
        <div className="flex h-screen">
          <div className="m-auto">
            <div className="text-white text-center text-9xl">IQOMAH</div>
            <div className="flex gap-3 text-center text-white mt-3 justify-center items-center">
              <CountdownCircleTimer
                {...timerProps}
                colors="#fff"
                duration={daySeconds}
                trailColor="#8CA1A5"
                size={180}
                initialRemainingTime={remainingTime % daySeconds}
                onComplete={(totalElapsedTime) => ({
                  shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
                })}
              >
                {({ elapsedTime, color }) => (
                  <span style={{ color }}>
                    {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
                  </span>
                )}
              </CountdownCircleTimer>
              <CountdownCircleTimer
                {...timerProps}
                colors="#fff"
                duration={hourSeconds}
                trailColor="#8CA1A5"
                size={180}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => ({
                  shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                })}
              >
                {({ elapsedTime, color }) => (
                  <span style={{ color }}>
                    {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
                  </span>
                )}
              </CountdownCircleTimer>
              <CountdownCircleTimer
                {...timerProps}
                colors="#fff"
                trailColor="#8CA1A5"
                duration={minuteSeconds}
                size={180}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => ({
                  shouldRepeat: remainingTime - totalElapsedTime > 0
                })}
              >
                {({ elapsedTime, color }) => (
                  <span style={{ color }}>
                    {renderTime("seconds", getTimeSeconds(elapsedTime))}
                  </span>
                )}
              </CountdownCircleTimer>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Iqomah