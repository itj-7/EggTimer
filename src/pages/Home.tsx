import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#fffbea" }}
    >
      <div
        className="p-4 rounded-4"
        style={{
          border: "2px solid #f97316",
          maxWidth: "500px",
          width: "100%",
          background: "#fff",
        }}
      >
        <h1 className="text-center mb-4" style={{ color: "#1a1a1a" }}>
          Welcome to Egg Timer
        </h1>
        <button
          className="btn d-grid gap-2 col-6 mx-auto fw-medium"
          style={{ background: "#f97316", color: "#fff", border: "none" }}
          onClick={() => navigate("/select")}
        >
          Start Cooking
        </button>
      </div>
    </div>
  );
}

export default Home;
