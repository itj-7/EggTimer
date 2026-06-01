import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

function Timer() {
  const location = useLocation();
  const duration = location.state.duration;
  const picture = location.state.pic;
  const alarmRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();
  const [time, setTime] = useState(duration);
  const isFinished = time === 0;

  useEffect(() => {
    if (time === 0) {
      if (time === 0) {
        alarmRef.current = new Audio("./public/Alarm.mp3");
        alarmRef.current.loop = true;
        alarmRef.current.play();
        return;
      }
    }
    if (time < 0) return;
    const t = setTimeout(() => setTime(time - 1000), 1000);
    return () => clearTimeout(t);
  }, [time]);

  const getFormattedTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const progress = Math.max(0, (time / duration) * 100);

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ background: "#fffbea" }}
    >
      <div
        className="p-4 p-md-5 rounded-4 text-center shadow-sm"
        style={{
          border: "2px solid #f97316",
          maxWidth: 400,
          width: "100%",
          background: "#fff",
        }}
      >
        <p
          className="text-uppercase fw-medium mb-1"
          style={{ fontSize: 12, letterSpacing: "0.1em", color: "#f97316" }}
        >
          {isFinished ? "Time's up!" : "Cooking your egg"}
        </p>
        <h1
          className="display-1 fw-semibold mb-1"
          style={{
            color: isFinished ? "#f97316" : "#1a1a1a",
            letterSpacing: -2,
            fontVariantNumeric: "tabular-nums",
            transition: "color 0.3s",
          }}
        >
          {getFormattedTime(time)}
        </h1>

        <p className="text-secondary mb-3" style={{ fontSize: 13 }}>
          {isFinished ? "your egg is ready" : "remaining"}
        </p>
        <div
          className="progress mb-4"
          style={{ height: 6, background: "#fde8d2" }}
        >
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${progress}%`,
              background: "#f97316",
              transition: "width 1s linear",
            }}
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>

        {isFinished ? (
          <>
            <img
              src={picture}
              alt="Egg is ready"
              className="rounded-circle mb-3"
              style={{ width: 140, height: 140, objectFit: "cover" }}
            />
            <p className="fw-medium mb-3" style={{ fontSize: 17 }}>
              Hurry! Your egg is waiting for you
            </p>
            <button
              className="btn w-100 fw-medium py-2 rounded-3"
              style={{
                background: "#f97316",
                color: "#fff",
                border: "none",
                fontSize: 15,
              }}
              onClick={() => {
                alarmRef.current?.pause();
                alarmRef.current = null;
                navigate("/");
              }}
            >
              Cook Again
            </button>
          </>
        ) : (
          <button
            className="btn w-100 fw-medium py-2 rounded-3"
            style={{
              border: "1.5px solid #f97316",
              color: "#f97316",
              background: "transparent",
              fontSize: 15,
            }}
            onClick={() => navigate("/select")}
          >
            Cancel timer
          </button>
        )}
      </div>
    </div>
  );
}

export default Timer;
