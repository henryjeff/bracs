import { useDispatch } from "react-redux";
import { authLogout } from "../store/actions/AuthActions";

export default function useLogout() {
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(authLogout());
  };

  return { logout };
}
