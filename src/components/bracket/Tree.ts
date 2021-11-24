import { Elements, FlowElement } from "react-flow-renderer";
import colors from "../../constants/Colors";
import { playGame } from "../../util/eloUtil";

const LEFT = 0;
const RIGHT = 1;

export const convertListToTree = (teams: Team[]): BracketTree<Team> => {
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
          name: teams[i].name,
          color: teams[i].color,
          elo: teams[i].elo,
          seed: i + 1,
        }
      : undefined;
  // Initialize the tree of teams

  // Construct a tree with a depth of depth
  const tree: BracketTree<Team> = constructTree(depth);
  // Generate a table of seed placements
  const placements = generateSeedPlacement(depth);
  // For each placement navigate to and replace value with a team
  placements.forEach((directions, index) => {
    navigateAndReplace(tree, _teams[index], directions);
  });
  // Play bye games
  playByeGames(tree);

  return tree;
};

const generateSeedPlacement = (depth: number): number[][] => {
  //base case
  if (depth === 1) {
    let a = [[0], [1]];
    return a;
  } else {
    //recurse to get previous depth seeding directions list
    let minusDepthList = generateSeedPlacement(depth - 1);

    //create new list with copies of previous depth
    let newList: number[][] = [];
    minusDepthList.forEach((elem) => {
      newList.push([...elem]);
    });

    //combine new copied list with reversed old list
    newList = newList.concat([...minusDepthList.reverse()]);

    //add 0's to the first half of sub lists and 1's to second half
    for (let i = 0; i < newList.length; i++) {
      if (i < newList.length / 2) {
        newList[i].push(0);
      } else {
        newList[i].push(1);
      }
    }

    return newList;
  }
};

export function constructTree<T>(depth: number): BracketTree<T> {
  let tree: BracketTree<T> = { root: {}, depth };
  createTree<T>(tree.root, depth);
  const itr = bfs(tree.root);
  let n = itr.next();
  let id = 0;
  while (n.value) {
    n.value.id = `${id}`;
    n = itr.next();
    id += 1;
  }
  return tree;
}

function createTree<T>(node: BracketTreeNode<T>, depth: number) {
  if (depth === 0) {
    const node: BracketTreeNode<T> = {};
    return node;
  } else {
    const left: BracketTreeNode<T> = {};
    const right: BracketTreeNode<T> = {};
    node.left = left;
    if (node.left) node.left.parent = node;

    node.right = right;
    if (node.right) node.right.parent = node;
    createTree<T>(left, depth - 1);
    createTree<T>(right, depth - 1);
    return node;
  }
}

export function navigateAndReplace<T>(
  tree: BracketTree<T>,
  value: T | undefined,
  directions: number[]
): BracketTree<T> {
  let node = tree.root;
  while (directions[0] > -1) {
    const direction = directions.shift();
    if (direction === LEFT && node && node.left) {
      node = node.left;
    } else if (direction === RIGHT && node && node.right) {
      node = node.right;
    }
  }
  if (node) node.value = value;
  return tree;
}

export function getNodes<T>(tree: BracketTree<T>): BracketTreeNode<T>[] {
  const itr = bfs(tree.root);
  let i = itr.next();
  const nodes = [];
  while (i.value) {
    nodes.push(i.value);
    i = itr.next();
  }
  return nodes;
}

export function playByeGames<T>(tree: BracketTree<T>): BracketTree<T> {
  getNodes<T>(tree).forEach((node) => {
    let numChildren = 0;
    let newVal = undefined;

    if (node.left?.value) {
      newVal = node.left.value;
      numChildren += 1;
    }
    if (node.right?.value) {
      newVal = node.right.value;
      numChildren += 1;
    }

    if (numChildren === 1 && newVal) {
      node.value = newVal;
    }
  });
  return tree;
}

export function printTree<T>(tree: BracketTree<T>) {
  getNodes<T>(tree).forEach((node) => {
    console.log(node.id, node.value);
  });
}

export function getType<T>(
  tree: BracketTree<T>,
  id: string
): BracketNodeType | undefined {
  const nodes = getNodes<T>(tree);
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node.id === id) {
      const descendants = [];
      if (node.left?.value) descendants.push(node.left);
      if (node.right?.value) descendants.push(node.right);
      const numChildren = descendants.length;

      const parentDescendants = [];
      if (node.parent?.left?.value) parentDescendants.push(node.parent.left);
      if (node.parent?.right?.value) parentDescendants.push(node.parent.right);

      let facingTeam = undefined;
      parentDescendants.forEach((child) => {
        if (child.value && child.value !== node.value) {
          facingTeam = child.value;
        }
      });

      if (node.value) {
        return "team";
      } else if (numChildren === 2) {
        return "inProgress";
      } else if (facingTeam) {
        return "bye";
      } else {
        return "tbd";
      }
    }
  }
}

export function getPosition<T>(
  tree: BracketTree<T>,
  id: string
): { x: number; y: number } {
  const nodes = getNodes(tree);

  // Total number of nodes rounded to the nearest 2^n
  let total = 2 ** (tree.depth + 1);

  // Find Index of node
  let index = 0;
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].id === id) {
      index = i;
      break;
    }
  }

  // If the node is a leaf, return a position
  if (index + 1 >= Math.ceil(total / 2)) {
    const adjustedIndex = index - Math.ceil(total / 2) + 1;
    return { x: 0, y: 96 * adjustedIndex + 72 };
  } else {
    // If not recursively find child positions to average and indent
    const node = nodes[index];
    const left = getPosition(tree, node.left!.id!);
    const right = getPosition(tree, node.right!.id!);
    return { x: left.x + 396, y: (left.y + right.y) / 2 };
  }
}

function* bfs<T>(root: BracketTreeNode<T>) {
  const queue: BracketTreeNode<T>[] = [];
  if (!root) return;
  queue.push(root);

  while (queue.length !== 0) {
    const node = queue.shift();
    yield node;
    node && node.left && queue.push(node.left);
    node && node.right && queue.push(node.right);
  }
}

export function convertSerializedTreeToElements(tree: SerializedBracket<Team>) {
  const elements: Elements<any> = [];

  for (const id in Object.keys(tree.values)) {
    const node = tree.values[id];
    if (!node) continue;
    const team = node.value;
    const type = node.type;
    const element = {
      id: node.id,
      type: type,
      position: node.position,
      ...(type === "team"
        ? {
            data: {
              team,
              bracketData: {
                bracketId: "0",
                nodeId: node.id,
              },
              intractable: node.parentId
                ? tree.values[node.parentId].type === "inProgress"
                : false,
            },
          }
        : {}),
    };
    const parent = tree.values[node.parentId!];

    if (parent) {
      const edge = {
        id: `${node.id}-${parent.id}`,
        source: node.id,
        target: parent.id,
        type: "smoothstep",
        animated: parent.type === "inProgress",
        style: {
          stroke:
            node.value?.name === parent.value?.name && node.value?.color
              ? node.value.color
              : colors.navy1,
          strokeWidth: 4,
        },
        isHidden:
          // Hidden if the parent node is a team and the team name is not the
          // current nodes team
          parent.type === "team" && node.value?.name !== parent.value?.name,
      };
      elements.push(edge as FlowElement);
    }
    elements.push(element as FlowElement);
  }
  return elements;
}

export function serializeTree(
  tree: BracketTree<Team>
): SerializedBracket<Team> {
  const values: {
    [key: string]: SerializedBracketNode<Team>;
  } = {};
  getNodes(tree).forEach((node) => {
    if (node.id) {
      const serializedNode: SerializedBracketNode<Team> = {
        id: node.id,
        value: node.value,
        leftId: node.left?.id,
        rightId: node.right?.id,
        parentId: node.parent?.id,
        type: getType(tree, node.id) || undefined,
        position: getPosition(tree, node.id),
      };
      values[node.id] = serializedNode;
    }
  });
  const bracket: SerializedBracket<Team> = { root: tree.root.id!, values };
  return bracket;
}

export function declareMatchWinner(
  teamId: string,
  bracket: SerializedBracket<Team>
) {
  const values = bracket.values;
  const team = values[teamId];
  if (!team || !team.parentId) return;
  
  const parent = values[team.parentId];
  const sisterTeam = values[parent.leftId === teamId ? parent.rightId! : parent.leftId!]
  if(team.value && team.value?.elo && sisterTeam.value?.elo) {
    const newElo = playGame(team.value.elo, sisterTeam.value.elo, true)
    team.value.elo = newElo[0]
    sisterTeam.value.elo = newElo[1]

  }
  values[team.parentId] = {
    ...parent,
    value: team.value,
    type: "team",
  };
  if (parent.parentId) {
    const pParent = values[parent.parentId];
    if (!pParent.leftId || !pParent.rightId) return;
    const left = values[pParent.leftId];
    const right = values[pParent.rightId];
    if (left.type === "team" && right.type === "team") {
      values[parent.parentId] = {
        ...pParent,
        type: "inProgress",
      };
    }
  }
  // console.log(bracket);
  return bracket;
}
