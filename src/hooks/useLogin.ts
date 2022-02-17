import { useState } from "react";
import { useDispatch } from "react-redux";
import { authLogin } from "../store/actions/AuthActions";
import { getUser } from "../store/actions/UserActions";

export default function useLogin({
  identifier,
  password,
}: {
  identifier: string;
  password: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const dispatch = useDispatch();

  const login = async () => {
    setIsLoading(true);
    dispatch(authLogin(identifier, password))
      //@ts-ignore
      .then((res) => {
        setError(undefined);
        dispatch(getUser(res.userID))
          //@ts-ignore
          .then((userRes) => {
            console.log(userRes);
          })
          .catch((e: any) => {
            setError(e.data.error);
          });
      })
      .catch((e: any) => {
        setError(e.data.error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { error, login, isLoading };
}
