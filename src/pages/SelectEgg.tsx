import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function SelectEgg() {
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
        <button
          className="btn btn-sm mb-3 fw-medium"
          style={{
            color: "#f97316",
            border: "1.5px solid #f97316",
            borderRadius: 8,
          }}
          onClick={() => navigate("/")}
        >
          Back
        </button>

        <h1 className="text-center mb-4" style={{ color: "#1a1a1a" }}>
          Select Egg State
        </h1>
        <div className="row g-4">
          <div className="col-6 d-flex justify-content-center">
            <Button src="./public/Soft.png" time={3}>
              Soft
            </Button>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Button src="./public/Medium.png" time={6}>
              Medium
            </Button>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Button src="./public/Hard.png" time={8}>
              Hard
            </Button>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Button src="./public/ExtraHard.png" time={10}>
              Extra Hard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SelectEgg;
