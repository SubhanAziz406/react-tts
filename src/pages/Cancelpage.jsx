import React from "react";
import { useNavigate } from "react-router-dom";

const CancelPage = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/Dpricing"); // Navigate back to the pricing page
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Subscription Cancelled</h1>
      <p>Your subscription process was cancelled. You can try again at any time.</p>
      <button
        onClick={handleReturn}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          backgroundColor: "#FF6666",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Return to Pricing
      </button>
    </div>
  );
};

export default CancelPage;
