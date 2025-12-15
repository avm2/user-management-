import { useForm } from "react-hook-form";
import axios from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submit = async (data) => {
    try {
      const res = await axios.post("/auth/login", data);
      localStorage.setItem("token", res.data.access);
      navigate("/profile");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>Login</h2>
      <input {...register("email")} placeholder="Email" />
      <input type="password" {...register("password")} placeholder="Password" />
      <button>Login</button>

      <p>
        <Link to="/forgot">Forgot Password?</Link>
      </p>
      <p>
        New user? <Link to="/register">Register</Link>
      </p>
    </form>
  );
}
