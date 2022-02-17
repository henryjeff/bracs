declare interface StyleSheetCSS {
  [key: string]: React.CSSProperties;
}

interface SerializedBracket<T> {
  root: string;
  values: {
    [key: string]: SerializedBracketNode<T>;
  };
}

interface SerializedBracketNode<T> {
  id?: string;
  value?: T;
  leftId?: string;
  rightId?: string;
  parentId?: string;
  type?: BracketNodeType;
  position?: BracketPosition;
}

interface BracketPosition {
  x: number;
  y: number;
}

interface Match {
  id: string;
  teamLeft?: Team;
  teamRight?: Team;
  loser?: Team;
  winner?: Team;
  gameNext?: string;
}

declare interface BracketTree<T> {
  root: BracketTreeNode<T>;
  depth: number;
}

declare interface BracketTreeNode<T> {
  id?: string;
  value?: T;
  left?: BracketTreeNode<T>;
  right?: BracketTreeNode<T>;
  parent?: BracketTreeNode<T>;
}

type BracketNodeType = "team" | "bye" | "tbd" | "inProgress";
interface Team {
  name: string;
  elo?: number;
  color?: string;
  seed?: number;
}

interface BracketNodeElement {
  id: string;
  type: string;
  position: { x: number; y: number };
  data?: {
    team: Team;
  };
}

declare interface AuthTokenResponseDto {
  token: string;
  userID: number;
}

declare interface AuthTokenRefreshResponseDto {
  access: string;
}

declare interface UserCreateRequestDto {
  username: string;
  password: string;
}

declare interface UserResponseDto {
  email: string;
  id: number;
  phone: string;
  username: string;
}
