import { useSelector } from "react-redux";
import { AuthType } from "../type/type";

interface State {
  auth: AuthType;
}
const useGetUser = () => {
  const { user } = useSelector((state: State) => state.auth);
  return user;
};

export default useGetUser;
