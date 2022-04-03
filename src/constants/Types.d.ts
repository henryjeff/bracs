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
  email: string;
  phone?: string;
  password: string;
}

declare interface UserCreateResponseDto {
  userID: number;
}

declare interface UserGetRequestDto {
  userID: number;
}

declare interface UserGetResponseDto {
  email: string;
  id: number;
  phone: string;
  username: string;
}

declare interface BracketCreateRequestDto {
  bracketData: JSON;
}

declare interface BracketCreateResponseDto {
  bracketID: number;
}

declare interface BracketGetListRequestDto {
  userID: number;
}

declare interface BracketGetListResponseDto {
  bracketIDs: number[];
}

declare interface BracketGetRequestDto {
  bracketID: number;
}

declare interface BracketGetResponseDto {
  bracketData: JSON;
  id: number;
  name: string;
  ownerID: number;
}

