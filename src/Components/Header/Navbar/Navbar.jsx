import { NavLink } from "react-router-dom";
import img from '../../../../public/Resources/Logo.png'
const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-6 px-5">
        <img src={img} alt="" />
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
              }
            >
              Home
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
              }
            >
              Donation
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
              }
            >
              Statistics
            </NavLink>
            
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
