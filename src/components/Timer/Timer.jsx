import { useEffect, useState } from "react";
import "./Timer.css";
import PropTypes from "prop-types";

function Timer({ name, value }) {
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setSeconds(value || 0);
  }, [value]);

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [running, seconds]);

  function secondsToString(seconds) {
    const MINUTE_SECONDS = 60;
    const HOUR_SECONDS = 60 * MINUTE_SECONDS;
    const DAY_SECONDS = 24 * HOUR_SECONDS;

    const days = Math.floor(seconds / DAY_SECONDS);
    const hours = Math.floor((seconds % DAY_SECONDS) / HOUR_SECONDS);
    const minutes = Math.floor((seconds % HOUR_SECONDS) / MINUTE_SECONDS);
    const secs = seconds % MINUTE_SECONDS;

    if (days > 0) {
      return `${days}d ${hours}h ${minutes}m ${secs}s`;
    } else if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  }

  function runClick() {
    setRunning(!running);
  }

  function resetClick() {
    setRunning(false);
    setSeconds(value || 0);
  }

  return (
    <div className="timer-container">
      <h3 className="timer-title">{name || "Timer"}</h3>
      <p>
        <input
          className="timer-display"
          type="text"
          placeholder="3d 23h 40m 50s"
          value={secondsToString(seconds)}
          readOnly={true}
        />
      </p>
      <div className="timer-buttons">
        <button className="btn btn-danger bi bi-arrow-counterclockwise" onClick={resetClick}>
          &nbsp;Reset
        </button>
        <button
          className={"btn " + (running ? "btn-warning bi bi-pause" : "btn-success bi bi-play")}
          onClick={runClick}
        >
          {running ? " Stop" : " Run"}
        </button>
      </div>
    </div>
  );
}

Timer.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
};

export default Timer;
