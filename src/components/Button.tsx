import { useNavigate } from "react-router-dom";

interface Props {
  children: string;
  src: string;
  time: number;
}
function Button({ children, src, time }: Props) {
  const navigate = useNavigate();
  return (
    <button
      className="btn"
      onClick={() =>
        navigate("/timer", { state: { duration: time * 60 * 1000, pic: src } })
      }
      style={{
        padding: "1rem",
        border: "1.5px solid #f97316",
        borderRadius: 12,
        color: "#1a1a1a",
      }}
    >
      <div className="mx-auto p-2" style={{ width: "10rem" }}>
        <img src={src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center" style={{ color: "#1a1a1a" }}>
            {children}
          </h5>
          <p
            className="card-text lead text-center"
            style={{ color: "#f97316" }}
          >
            {time} min
          </p>
        </div>
      </div>
    </button>
  );
}

export default Button;
