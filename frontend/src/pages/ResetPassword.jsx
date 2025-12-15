import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const submit = async (data) => {
    await axios.post(`/auth/reset/${token}`, data);
    alert("Password reset successful");
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>Reset Password</h2>
      <input {...register("email")} placeholder="Email" />
      <input type="password" {...register("password")} placeholder="New Password" />
      <button>Reset Password</button>
    </form>
  );
}
