import useGetUser from "../../hooks/useGetUser";

import { Navigate } from "react-router-dom";
import Navbar from "../Navbar";

const PrivetRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useGetUser();

  if (user?.name && user?.id) {
    return (
      <div>
        <Navbar />
        {children}
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivetRoute;
