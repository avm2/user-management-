import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/users/me").then((res) => setUser(res.data));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="card">
      <h2>My Profile</h2>
      <img
        src={`http://localhost:5000/${user.profileImage}`}
        className="profile-img"
        alt="profile"
      />

      <p>
        <b>Name:</b> {user.name}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Role:</b> {user.role}
      </p>
    </div>
  );
}
