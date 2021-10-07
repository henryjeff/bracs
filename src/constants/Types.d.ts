declare interface StyleSheetCSS {
  [key: string]: React.CSSProperties;
}

interface Bracket {
  root: string;
  matches: {
    [key: string]: Match;
  };
}

type NodeType = "team" | "buy" | "tbd" | "inProgress";

interface Match {
  id: string;
  teamLeft?: Team;
  teamRight?: Team;
  loser?: Team;
  winner?: Team;
  gameNext?: string;
}
interface Team {
  name: string;
  elo?: number;
  color?: string;
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
  access: string;
  refresh: string;
}

declare interface AuthTokenRefreshResponseDto {
  access: string;
}

declare interface UserCreateRequestDto {
  username: string;
  password: string;
}

declare interface UserResponseDto {
  id: number;
  username: string;
}
