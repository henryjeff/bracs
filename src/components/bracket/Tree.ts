import { convertListToElements } from "./BracketDS";

const LEFT = 0;
const RIGHT = 1;

export class TreeNode<T> {
  _id: string | undefined;
  _value: T | undefined;
  descendants: TreeNode<T>[];
  parent: TreeNode<T> | undefined;

  constructor(value: T | undefined) {
    this._id = undefined;
    this._value = value;
    this.descendants = [];
    this.parent = undefined;
  }

  get id() {
    return this._id;
  }

  set id(id: string | undefined) {
    this._id = id;
  }

  get value() {
    return this._value;
  }

  set value(value: T | undefined) {
    this._value = value;
  }

  get left() {
    return this.descendants[LEFT];
  }

  set left(node) {
    this.descendants[LEFT] = node;
    if (node) {
      node.parent = this;
    }
  }

  get right() {
    return this.descendants[RIGHT];
  }

  set right(node) {
    this.descendants[RIGHT] = node;
    if (node) {
      node.parent = this;
    }
  }

  toString() {
    return `(value: ${this._value} \t\nL: ${this.left || "-"} \t\nR: ${
      this.right || "-"
    })`;
  }
}

export class Tree<T> {
  root: TreeNode<T> | undefined;
  depth: number;

  constructor() {
    this.root = undefined;
    this.depth = 0;
  }

  constructTree(depth: number) {
    this.root = new TreeNode<T>(undefined);
    this.depth = depth;
    this.createTree(this.root, depth);
    const itr = this.bfs();
    let n = itr.next();
    let id = 0;
    while (n.value) {
      n.value.id = `${id}`;
      n = itr.next();
      id += 1;
    }
  }

  createTree(node: TreeNode<T>, depth: number) {
    if (depth === 0) {
      return new TreeNode<T>(undefined);
    } else {
      const left = new TreeNode<T>(undefined);
      const right = new TreeNode<T>(undefined);
      node.left = left;
      node.right = right;
      this.createTree(left, depth - 1);
      this.createTree(right, depth - 1);
      return node;
    }
  }

  navigateAndReplace(value: T | undefined, directions: number[]) {
    let node = this.root;
    while (directions[0] > -1) {
      const direction = directions.shift();
      if (direction === LEFT && node) {
        node = node.left;
      } else if (direction === RIGHT && node) {
        node = node.right;
      }
    }
    if (node) node.value = value;
  }

  getType(id: string): NodeType | undefined {
    const nodes = this.getNodes();
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node.id === id) {
        let numChildren = 0;
        node.descendants.forEach((child) => {
          if (child.value) {
            numChildren += 1;
          }
        });

        let facingTeam = undefined;
        node.parent?.descendants.forEach((child) => {
          if (child.value && child.value !== node.value) {
            facingTeam = child.value;
          }
        });

        if (node.value) {
          return "team";
        } else if (numChildren === 2) {
          return "inProgress";
        } else if (facingTeam) {
          return "buy";
        } else {
          return "tbd";
        }
      }
    }
  }

  getPosition(id: string): { x: number; y: number } {
    const nodes = this.getNodes();

    // Total number of nodes rounded to the nearest 2^n
    let total = 2 ** (this.depth + 1);

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
      return { x: 0, y: 100 * adjustedIndex + 108 };
    } else {
      // If not recursively find child positions to average and indent
      const node = nodes[index];
      const left = this.getPosition(node.left.id!);
      const right = this.getPosition(node.right.id!);
      return { x: left.x + 396, y: (left.y + right.y) / 2 };
    }
  }

  playBuyGames() {
    this.getNodes().forEach((node) => {
      let numChildren = 0;
      let newVal = undefined;
      node.descendants.forEach((n) => {
        if (n.value) {
          newVal = n.value;
          numChildren += 1;
        }
      });
      if (numChildren === 1 && newVal) {
        node.value = newVal;
      }
    });
  }

  getNodes(): TreeNode<T>[] {
    const itr = this.bfs();
    let i = itr.next();
    const nodes = [];
    while (i.value) {
      nodes.push(i.value);
      i = itr.next();
    }
    return nodes;
  }

  printAllNodes() {
    const itr = this.bfs();
    let node = itr.next();
    while (node.value) {
      console.log(node.value._value);
      node = itr.next();
    }
  }

  *bfs() {
    const queue: TreeNode<T>[] = [];
    if (!this.root) return;
    queue.push(this.root);

    while (queue.length !== 0) {
      const node = queue.shift();
      yield node;
      node &&
        node.descendants.forEach((child: TreeNode<T>) => queue.push(child));
    }
  }
}
