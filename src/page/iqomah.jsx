import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useParams } from "react-router-dom";

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
  const {timer} = useParams();
  const [time, setTime] = useState(new Date());
  const stratTimes= Date.now(); // use UNIX timestamp in seconds
  const stratTime = stratTimes / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + Number(timer); // use UNIX timestamp in seconds
  const [endTimer, setEndTime] = useState(moment(stratTimes).add(Number(timer)/60, 'm').toDate());

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  
  function refreshClock() {
    setTime(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    console.log(moment(time).format('HH:mm:ss'));
    console.log(moment(endTimer).format('HH:mm:ss'));
    // console.log(remainingTime);
    
    if(moment(time).format('HH:mm:ss') == moment(endTimer).format('HH:mm:ss')){
      window.location.assign('/');
    }
  },[time]);


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
                  shouldRepeat: remainingTime - totalElapsedTime > -1
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