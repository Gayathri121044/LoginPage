import "./styles.css";
import { useNavigate, useLocation } from "react-router-dom";
export default function Success() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div>
      <h1> Sucessfully Logged in</h1>
      <h2> Welcome </h2>
      <button type="button" onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
}
