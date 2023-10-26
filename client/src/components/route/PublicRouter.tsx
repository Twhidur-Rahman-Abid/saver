import { Navigate } from "react-router-dom";
import useGetUser from "../../hooks/useGetUser";

const PublicRouter = ({ children }: { children: React.ReactNode }) => {
  const user = useGetUser();

  if (user?.name && user?.id) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default PublicRouter;
