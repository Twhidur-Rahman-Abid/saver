import { useEffect, useState } from "react";
import { userLoggedIn } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const useUserChecked = () => {
  const [checkedUser, setCheckedUser] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const user = localStorage.getItem("user");

    if (accessToken && user) {
      dispatch(
        userLoggedIn({
          accessToken: JSON.parse(accessToken),
          user: JSON.parse(user),
        })
      );
    }

    setCheckedUser(true);
  }, []);

  return checkedUser;
};

export default useUserChecked;
