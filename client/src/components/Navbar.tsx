import { Link } from "react-router-dom";
import Button from "./button/Button";
import useGetUser from "../hooks/useGetUser";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../features/auth/authSlice";

const Navbar = () => {
  const { name } = useGetUser() || {};

  const dispacth = useDispatch();

  const handleClick = () => {
    dispacth(userLoggedOut());
    localStorage.clear();
  };

  return (
    <nav className="flex justify-between py-3">
      <Link to="/">
        {name ? (
          <h1 className="text-lg md:text-2xl font-bold ">
            {name.toUpperCase()}
          </h1>
        ) : (
          <h1 className="text-2xl font-bold ">
            <span className="text-lightPeriwinkle">L</span>
            <span className="text-lightLilac">o</span>
            <span className="text-mintTulip">G</span>
            <span className="text-cornYellow">o</span>
          </h1>
        )}
      </Link>

      <Button
        buttontext="Logout"
        classes="rounded-md bg-lightPeriwinkle px-6 py-2"
        handleClick={handleClick}
      />
    </nav>
  );
};

export default Navbar;
