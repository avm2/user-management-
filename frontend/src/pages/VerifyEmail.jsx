import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

export default function VerifyEmail() {
  const { token } = useParams();

  useEffect(() => {
    axios.get(`/auth/verify/${token}`)
      .then(() => alert("Email verified. You can login now"))
      .catch(() => alert("Invalid or expired link"));
  }, [token]);

  return (
    <div className="center-box">
      <h2>Verifying email...</h2>
    </div>
  );
}
