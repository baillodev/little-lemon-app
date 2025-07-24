import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ConfirmedBooking() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="container centered">
        <h1>Reservation Confirmed 🎉</h1>
        <p>Thank you for booking with us. We look forward to seeing you!</p>
        <button onClick={() => navigate("/")}>
          Go home
          <ArrowRight size={16} style={{ marginLeft: 8 }} />
        </button>
      </div>
    </div>
  );
}
