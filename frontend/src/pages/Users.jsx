import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`/users?page=${page}&search=${search}`)
      .then(res => setUsers(res.data.rows));
  }, [page, search]);

  return (
    <div className="card">
      <h2>Users</h2>
      <input
        placeholder="Search user"
        onChange={(e) => setSearch(e.target.value)}
      />

      {users.map(u => (
        <p key={u.id}>{u.name} - {u.email}</p>
      ))}

      <div className="pagination">
        <button onClick={() => setPage(p => Math.max(p - 1, 1))}>Prev</button>
        <button onClick={() => setPage(p => p + 1)}>Next</button>
      </div>
    </div>
  );
}
