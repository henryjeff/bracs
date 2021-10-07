import { FlowElement, Elements } from "react-flow-renderer";
import { Tree } from "./Tree";
import colors from "../../constants/Colors";

// export const bracket: Bracket = {
//   root: "0",
//   matches: {
//     "0": {
//       id: "0",
//       teamLeft: Team1,
//     },
//     "1": {
//       id: "1",
//       gameNext: "0",
//       teamLeft: Team1,
//       teamRight: Team2,
//       winner: Team1,
//       loser: Team2,
//     },
//     "2": {
//       id: "2",
//       gameNext: "0",
//       teamLeft: Team3,
//       teamRight: Team4,
//     },
//   },
// };

export const convertTreeToElements = (tree: Tree<Team>) => {
  const elements: Elements<any> = [];
  // For each node in the tree, generate corresponding elements
  tree.getNodes().forEach((node) => {
    // Initial node data
    const team = node.value;
    const type = tree.getType(node.id!);

    // Create element
    const element = {
      id: node.id,
      type: type,
      position: tree.getPosition(node.id!),
      ...(type === "team" ? { data: { team } } : {}),
    };
    const parent = node.parent;

    if (parent) {
      const edge = {
        id: `${node.id}-${parent.id}`,
        source: node.id,
        target: parent.id,
        type: "smoothstep",
        animated: tree.getType(parent.id!) === "inProgress",
        style: {
          stroke:
            node.value?.name === parent.value?.name && node.value?.color
              ? node.value.color
              : colors.navy1,
          strokeWidth: 4,
        },
        isHidden:
          tree.getType(parent.id!) === "team" &&
          node.value?.name !== parent.value?.name,
      };
      elements.push(edge as FlowElement);
    }
    elements.push(element as FlowElement);
  });

  return elements;
};

const generateRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const convertListToElements = (teams: string[]): Elements<any> => {
  // Total number of teams
  const size = teams.length;
  // Depth is the total depth of the tree
  const depth = Math.ceil(Math.log2(size));
  // _size is the total number of teams rounded to the nearest 2^n
  const _size = 2 ** depth;
  // _teams is a list of _size length filled with teams and empty spots are undefined
  const _teams: (Team | undefined)[] = [];
  for (let i = 0; i < _size; i++)
    _teams[i] = teams[i]
      ? {
          name: teams[i],
          color: generateRandomColor(),
          elo: Math.round(Math.random() * 3000),
        }
      : undefined;
  // Initialize the tree of teams
  const tree: Tree<Team> = new Tree<Team>();
  // Construct a tree with a depth of depth
  tree.constructTree(depth);
  // Generate a table of seed placements
  const placements = generateSeedPlacement(depth);
  // For each placement navigate to and replace value with a team
  placements.forEach((directions, index) => {
    tree.navigateAndReplace(_teams[index], directions);
  });
  // Play buy games
  tree.playBuyGames();

  const elements = convertTreeToElements(tree);
  return elements;
};

const generateSeedPlacement = (depth: number) => {
  const rows = 2 ** depth;
  const table = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = depth - 1; j >= 0; j--) {
      row.push(Math.floor((i / Math.round(2 ** j)) % 2));
    }
    row = row.reverse();
    table.push(row);
  }
  for (let i = 0; i < rows / 2; i++) {
    if (i % 2 === 0) continue;
    const ai = i * 2;
    const bi = i * 2 + 1;
    const a: number[] = table[ai];
    const b: number[] = table[bi];
    table[bi] = a;
    table[ai] = b;
  }
  return table;
};
