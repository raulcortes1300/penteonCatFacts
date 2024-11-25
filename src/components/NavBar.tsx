import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link className="text-white hover:underline" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-white hover:underline" to="/infinite-scrolling">
            Infinite scrolling
          </Link>
        </li>
      </ul>
    </nav>
  );
};
