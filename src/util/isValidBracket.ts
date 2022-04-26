export const isValidBracket = (tree: SerializedBracket<Team>) => {
  if (!tree) return false;
  return tree.root && tree.values;
};
