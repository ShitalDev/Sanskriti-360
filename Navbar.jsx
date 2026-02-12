import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#1b5e20", color: "white" }}>
      <Link to="/" style={{ marginRight: "20px", color: "white" }}>
        Home
      </Link>
      <Link to="/state/mp" style={{ marginRight: "20px", color: "white" }}>
        Madhya Pradesh
      </Link>
      <Link to="/dashboard" style={{ color: "white" }}>
        CAI Dashboard
      </Link>
    </nav>
  );
}

export default Navbar;
