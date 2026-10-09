import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1 className="Recipe">Recipe Page</h1>

      <Link to="/" className="Homep">Home</Link>

      <hr />

      <Outlet />
    </div>
  );
}

export default Layout;