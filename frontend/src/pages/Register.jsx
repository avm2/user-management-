import { useForm } from "react-hook-form";
import axios from "../api/axios";

export default function Register() {
  const { register, handleSubmit } = useForm();

  const submit = async (data) => {
    const fd = new FormData();
    Object.keys(data).forEach(k => fd.append(k, data[k]));
    await axios.post("/auth/register", fd);
    alert("Check email for verification");
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>Register</h2>
      <input {...register("name")} placeholder="Name" />
      <input {...register("email")} placeholder="Email" />
      <input type="password" {...register("password")} />
      <input type="file" {...register("image")} />
      <button>Register</button>
    </form>
  );
}
