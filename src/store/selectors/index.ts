import { useSelector } from "react-redux";
import _ from "lodash";

const isBracketEqual = (
  a: SerializedBracket<Team>,
  b: SerializedBracket<Team>
) => {
  console.log(JSON.stringify(a) === JSON.stringify(b));
  return JSON.stringify(a) === JSON.stringify(b);
};

export function useBracketSelector(bracketId: string) {
  return useSelector(
    (s: RootState) =>
      (s.bracket.brackets[bracketId] || { bracket: undefined }).bracket,
    isBracketEqual
  );
}

export function useBracketUpdated(bracketId: string) {
  return useSelector(
    (s: RootState) =>
      (s.bracket.brackets[bracketId] || { updated: undefined }).updated
  );
}

export function useUserBracketsSelector(userId: number) {
  return useSelector(
    (s: RootState) => s.bracket.userBrackets[userId] || [],
    _.isEqual
  );
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
