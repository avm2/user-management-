import { useForm } from "react-hook-form";
import axios from "../api/axios";

export default function ForgotPassword() {
  const { register, handleSubmit } = useForm();

  const submit = async (data) => {
    await axios.post("/auth/forgot", data);
    alert("Reset link sent to email");
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>Forgot Password</h2>
      <input {...register("email")} placeholder="Email" />
      <button>Send Reset Link</button>
    </form>
  );
}
