import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authCreateUser } from "../store/actions/AuthActions";
import { validateEmail } from "../util/email";
import useLogin from "./useLogin";

export default function useSignUp({
  username,
  email,
  phone,
  password,
}: UserCreateRequestDto) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const login = useLogin({ identifier: email, password });
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(login.isLoading);
  }, [login.isLoading]);

  useEffect(() => {
    setError(login.error);
  }, [login.error]);

  const verifySignUp = async () => {
    if (username.length < 3) {
      setError("Username must be at least 3 characters long");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    if (phone && phone !== "" && phone.length < 10) {
      setError("Phone must be at least 10 characters long");
      return false;
    }
    if (!validateEmail(email)) {
      setError("Email must be valid");
      return false;
    }
    return true;
  };

  const signUp = async () => {
    const isValid = await verifySignUp();
    if (isValid) {
      setIsLoading(true);
      dispatch(authCreateUser({ username, email, phone, password }))
        //@ts-ignore
        .then((res) => {
          setError(undefined);
          login.login();
        })
        .catch((e: any) => {
          setError(e.data.error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return { error, signUp, isLoading };
}
