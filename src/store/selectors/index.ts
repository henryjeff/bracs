import { useSelector } from "react-redux";
import _ from "lodash";

export function useBracketSelector(bracketId: string) {
  return useSelector((s: RootState) => s.bracket.brackets[bracketId]);
}

export const useUserId = () => {
  return useSelector((s: RootState) => s.auth.userId, _.isEqual);
};

export const useCurrUser = () => {
  return useSelector((s: RootState) => s.user.users[s.auth.userId], _.isEqual);
};

export const useTokenData = () => {
  return useSelector((s: RootState) => s.auth.tokenData, _.isEqual);
};
