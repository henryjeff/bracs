import { useSelector } from "react-redux";
// import _ from "lodash";

export function useBracketSelector(bracketId: string) {
  return useSelector((s: RootState) => s.bracket.brackets[bracketId]);
}
