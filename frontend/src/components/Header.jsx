import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">UserApp</h1>

        <nav className="nav">
          {!token && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}

          {token && (
            <>
              <Link to="/profile">Profile</Link>
              <Link to="/users">Users</Link>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
