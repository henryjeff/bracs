/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  phone?: string | null,
  password: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email: string,
  phone?: string | null,
  password: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  password?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateBracketInput = {
  id?: string | null,
  name: string,
};

export type ModelBracketConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBracketConditionInput | null > | null,
  or?: Array< ModelBracketConditionInput | null > | null,
  not?: ModelBracketConditionInput | null,
};

export type Bracket = {
  __typename: "Bracket",
  id: string,
  name: string,
  head?: Game | null,
  owner: User,
  createdAt: string,
  updatedAt: string,
};

export type Game = {
  __typename: "Game",
  id: string,
  name: string,
  date: number,
  rTeam?: Team | null,
  lTeam?: Team | null,
  rGame?: Game | null,
  lGame?: Game | null,
  createdAt: string,
  updatedAt: string,
};

export type Team = {
  __typename: "Team",
  id: string,
  name: string,
  image?: string | null,
  elo?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBracketInput = {
  id: string,
  name?: string | null,
};

export type DeleteBracketInput = {
  id: string,
};

export type CreateGameInput = {
  id?: string | null,
  name: string,
  date: number,
};

export type ModelGameConditionInput = {
  name?: ModelStringInput | null,
  date?: ModelIntInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateGameInput = {
  id: string,
  name?: string | null,
  date?: number | null,
};

export type DeleteGameInput = {
  id: string,
};

export type CreateTeamInput = {
  id?: string | null,
  name: string,
  image?: string | null,
  elo?: number | null,
};

export type ModelTeamConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  elo?: ModelIntInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
};

export type UpdateTeamInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  elo?: number | null,
};

export type DeleteTeamInput = {
  id: string,
};

export type CreateUserOnTeamInput = {
  id?: string | null,
  userOnTeamUserId?: string | null,
  userOnTeamTeamId?: string | null,
  userOnTeamRoleId?: string | null,
};

export type ModelUserOnTeamConditionInput = {
  and?: Array< ModelUserOnTeamConditionInput | null > | null,
  or?: Array< ModelUserOnTeamConditionInput | null > | null,
  not?: ModelUserOnTeamConditionInput | null,
};

export type UserOnTeam = {
  __typename: "UserOnTeam",
  id: string,
  user?: User | null,
  team?: Team | null,
  role?: Role | null,
  createdAt: string,
  updatedAt: string,
};

export type Role = {
  __typename: "Role",
  id: string,
  desc: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserOnTeamInput = {
  userOnTeamUserId?: string | null,
  userOnTeamTeamId?: string | null,
  userOnTeamRoleId?: string | null,
};

export type DeleteUserOnTeamInput = {
  id: string,
};

export type CreateUserInBracketInput = {
  id?: string | null,
  userInBracketUserId?: string | null,
  userInBracketBracketId?: string | null,
  userInBracketRoleId?: string | null,
};

export type ModelUserInBracketConditionInput = {
  and?: Array< ModelUserInBracketConditionInput | null > | null,
  or?: Array< ModelUserInBracketConditionInput | null > | null,
  not?: ModelUserInBracketConditionInput | null,
};

export type UserInBracket = {
  __typename: "UserInBracket",
  id: string,
  user?: User | null,
  bracket?: Bracket | null,
  role?: Role | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInBracketInput = {
  userInBracketUserId?: string | null,
  userInBracketBracketId?: string | null,
  userInBracketRoleId?: string | null,
};

export type DeleteUserInBracketInput = {
  id: string,
};

export type CreateRoleInput = {
  id?: string | null,
  desc: string,
};

export type ModelRoleConditionInput = {
  desc?: ModelStringInput | null,
  and?: Array< ModelRoleConditionInput | null > | null,
  or?: Array< ModelRoleConditionInput | null > | null,
  not?: ModelRoleConditionInput | null,
};

export type UpdateRoleInput = {
  id: string,
  desc?: string | null,
};

export type DeleteRoleInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelBracketFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelBracketFilterInput | null > | null,
  or?: Array< ModelBracketFilterInput | null > | null,
  not?: ModelBracketFilterInput | null,
};

export type ModelBracketConnection = {
  __typename: "ModelBracketConnection",
  items?:  Array<Bracket | null > | null,
  nextToken?: string | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  date?: ModelIntInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items?:  Array<Game | null > | null,
  nextToken?: string | null,
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  elo?: ModelIntInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
};

export type ModelTeamConnection = {
  __typename: "ModelTeamConnection",
  items?:  Array<Team | null > | null,
  nextToken?: string | null,
};

export type ModelUserOnTeamFilterInput = {
  and?: Array< ModelUserOnTeamFilterInput | null > | null,
  or?: Array< ModelUserOnTeamFilterInput | null > | null,
  not?: ModelUserOnTeamFilterInput | null,
};

export type ModelUserOnTeamConnection = {
  __typename: "ModelUserOnTeamConnection",
  items?:  Array<UserOnTeam | null > | null,
  nextToken?: string | null,
};

export type ModelUserInBracketFilterInput = {
  and?: Array< ModelUserInBracketFilterInput | null > | null,
  or?: Array< ModelUserInBracketFilterInput | null > | null,
  not?: ModelUserInBracketFilterInput | null,
};

export type ModelUserInBracketConnection = {
  __typename: "ModelUserInBracketConnection",
  items?:  Array<UserInBracket | null > | null,
  nextToken?: string | null,
};

export type ModelRoleFilterInput = {
  id?: ModelIDInput | null,
  desc?: ModelStringInput | null,
  and?: Array< ModelRoleFilterInput | null > | null,
  or?: Array< ModelRoleFilterInput | null > | null,
  not?: ModelRoleFilterInput | null,
};

export type ModelRoleConnection = {
  __typename: "ModelRoleConnection",
  items?:  Array<Role | null > | null,
  nextToken?: string | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    phone?: string | null,
    password: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    phone?: string | null,
    password: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    phone?: string | null,
    password: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBracketMutationVariables = {
  input: CreateBracketInput,
  condition?: ModelBracketConditionInput | null,
};

export type CreateBracketMutation = {
  createBracket?:  {
    __typename: "Bracket",
    id: string,
    name: string,
    head?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBracketMutationVariables = {
  input: UpdateBracketInput,
  condition?: ModelBracketConditionInput | null,
};

export type UpdateBracketMutation = {
  updateBracket?:  {
    __typename: "Bracket",
    id: string,
    name: string,
    head?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBracketMutationVariables = {
  input: DeleteBracketInput,
  condition?: ModelBracketConditionInput | null,
};

export type DeleteBracketMutation = {
  deleteBracket?:  {
    __typename: "Bracket",
    id: string,
    name: string,
    head?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    date: number,
    rTeam?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    lTeam?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rGame?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    lGame?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    date: number,
    rTeam?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    lTeam?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rGame?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    lGame?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    date: number,
    rTeam?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    lTeam?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rGame?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    lGame?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    image?: string | null,
    elo?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    image?: string | null,
    elo?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    image?: string | null,
    elo?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserOnTeamMutationVariables = {
  input: CreateUserOnTeamInput,
  condition?: ModelUserOnTeamConditionInput | null,
};

export type CreateUserOnTeamMutation = {
  createUserOnTeam?:  {
    __typename: "UserOnTeam",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    role?:  {
      __typename: "Role",
      id: string,
      desc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserOnTeamMutationVariables = {
  input: UpdateUserOnTeamInput,
  condition?: ModelUserOnTeamConditionInput | null,
};

export type UpdateUserOnTeamMutation = {
  updateUserOnTeam?:  {
    __typename: "UserOnTeam",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    role?:  {
      __typename: "Role",
      id: string,
      desc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserOnTeamMutationVariables = {
  input: DeleteUserOnTeamInput,
  condition?: ModelUserOnTeamConditionInput | null,
};

export type DeleteUserOnTeamMutation = {
  deleteUserOnTeam?:  {
    __typename: "UserOnTeam",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    role?:  {
      __typename: "Role",
      id: string,
      desc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserInBracketMutationVariables = {
  input: CreateUserInBracketInput,
  condition?: ModelUserInBracketConditionInput | null,
};

export type CreateUserInBracketMutation = {
  createUserInBracket?:  {
    __typename: "UserInBracket",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    bracket?:  {
      __typename: "Bracket",
      id: string,
      name: string,
      head?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      owner:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        phone?: string | null,
        password: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null,
    role?:  {
      __typename: "Role",
      id: string,
      desc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserInBracketMutationVariables = {
  input: UpdateUserInBracketInput,
  condition?: ModelUserInBracketConditionInput | null,
};

export type UpdateUserInBracketMutation = {
  updateUserInBracket?:  {
    __typename: "UserInBracket",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    bracket?:  {
      __typename: "Bracket",
      id: string,
      name: string,
      head?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      owner:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        phone?: string | null,
        password: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null,
    role?:  {
      __typename: "Role",
      id: string,
      desc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserInBracketMutationVariables = {
  input: DeleteUserInBracketInput,
  condition?: ModelUserInBracketConditionInput | null,
};

export type DeleteUserInBracketMutation = {
  deleteUserInBracket?:  {
    __typename: "UserInBracket",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    bracket?:  {
      __typename: "Bracket",
      id: string,
      name: string,
      head?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      owner:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        phone?: string | null,
        password: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null,
    role?:  {
      __typename: "Role",
      id: string,
      desc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRoleMutationVariables = {
  input: CreateRoleInput,
  condition?: ModelRoleConditionInput | null,
};

export type CreateRoleMutation = {
  createRole?:  {
    __typename: "Role",
    id: string,
    desc: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRoleMutationVariables = {
  input: UpdateRoleInput,
  condition?: ModelRoleConditionInput | null,
};

export type UpdateRoleMutation = {
  updateRole?:  {
    __typename: "Role",
    id: string,
    desc: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRoleMutationVariables = {
  input: DeleteRoleInput,
  condition?: ModelRoleConditionInput | null,
};

export type DeleteRoleMutation = {
  deleteRole?:  {
    __typename: "Role",
    id: string,
    desc: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    phone?: string | null,
    password: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetBracketQueryVariables = {
  id: string,
};

export type GetBracketQuery = {
  getBracket?:  {
    __typename: "Bracket",
    id: string,
    name: string,
    head?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBracketsQueryVariables = {
  filter?: ModelBracketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBracketsQuery = {
  listBrackets?:  {
    __typename: "ModelBracketConnection",
    items?:  Array< {
      __typename: "Bracket",
      id: string,
      name: string,
      head?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      owner:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        phone?: string | null,
        password: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    date: number,
    rTeam?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    lTeam?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rGame?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    lGame?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGameConnection",
    items?:  Array< {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    image?: string | null,
    elo?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams?:  {
    __typename: "ModelTeamConnection",
    items?:  Array< {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserOnTeamQueryVariables = {
  id: string,
};

export type GetUserOnTeamQuery = {
  getUserOnTeam?:  {
    __typename: "UserOnTeam",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    role?:  {
      __typename: "Role",
      id: string,
      desc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserOnTeamsQueryVariables = {
  filter?: ModelUserOnTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserOnTeamsQuery = {
  listUserOnTeams?:  {
    __typename: "ModelUserOnTeamConnection",
    items?:  Array< {
      __typename: "UserOnTeam",
      id: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        phone?: string | null,
        password: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      role?:  {
        __typename: "Role",
        id: string,
        desc: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserInBracketQueryVariables = {
  id: string,
};

export type GetUserInBracketQuery = {
  getUserInBracket?:  {
    __typename: "UserInBracket",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    bracket?:  {
      __typename: "Bracket",
      id: string,
      name: string,
      head?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      owner:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        phone?: string | null,
        password: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null,
    role?:  {
      __typename: "Role",
      id: string,
      desc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserInBracketsQueryVariables = {
  filter?: ModelUserInBracketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserInBracketsQuery = {
  listUserInBrackets?:  {
    __typename: "ModelUserInBracketConnection",
    items?:  Array< {
      __typename: "UserInBracket",
      id: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        phone?: string | null,
        password: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      bracket?:  {
        __typename: "Bracket",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      role?:  {
        __typename: "Role",
        id: string,
        desc: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRoleQueryVariables = {
  id: string,
};

export type GetRoleQuery = {
  getRole?:  {
    __typename: "Role",
    id: string,
    desc: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRolesQueryVariables = {
  filter?: ModelRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRolesQuery = {
  listRoles?:  {
    __typename: "ModelRoleConnection",
    items?:  Array< {
      __typename: "Role",
      id: string,
      desc: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    phone?: string | null,
    password: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    phone?: string | null,
    password: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    phone?: string | null,
    password: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBracketSubscription = {
  onCreateBracket?:  {
    __typename: "Bracket",
    id: string,
    name: string,
    head?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBracketSubscription = {
  onUpdateBracket?:  {
    __typename: "Bracket",
    id: string,
    name: string,
    head?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBracketSubscription = {
  onDeleteBracket?:  {
    __typename: "Bracket",
    id: string,
    name: string,
    head?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    date: number,
    rTeam?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    lTeam?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rGame?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    lGame?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    date: number,
    rTeam?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    lTeam?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rGame?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    lGame?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    date: number,
    rTeam?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    lTeam?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rGame?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    lGame?:  {
      __typename: "Game",
      id: string,
      name: string,
      date: number,
      rTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      lTeam?:  {
        __typename: "Team",
        id: string,
        name: string,
        image?: string | null,
        elo?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      lGame?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    image?: string | null,
    elo?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    image?: string | null,
    elo?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    image?: string | null,
    elo?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserOnTeamSubscription = {
  onCreateUserOnTeam?:  {
    __typename: "UserOnTeam",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    role?:  {
      __typename: "Role",
      id: string,
      desc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserOnTeamSubscription = {
  onUpdateUserOnTeam?:  {
    __typename: "UserOnTeam",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    role?:  {
      __typename: "Role",
      id: string,
      desc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserOnTeamSubscription = {
  onDeleteUserOnTeam?:  {
    __typename: "UserOnTeam",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      image?: string | null,
      elo?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    role?:  {
      __typename: "Role",
      id: string,
      desc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserInBracketSubscription = {
  onCreateUserInBracket?:  {
    __typename: "UserInBracket",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    bracket?:  {
      __typename: "Bracket",
      id: string,
      name: string,
      head?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      owner:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        phone?: string | null,
        password: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null,
    role?:  {
      __typename: "Role",
      id: string,
      desc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserInBracketSubscription = {
  onUpdateUserInBracket?:  {
    __typename: "UserInBracket",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    bracket?:  {
      __typename: "Bracket",
      id: string,
      name: string,
      head?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      owner:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        phone?: string | null,
        password: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null,
    role?:  {
      __typename: "Role",
      id: string,
      desc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserInBracketSubscription = {
  onDeleteUserInBracket?:  {
    __typename: "UserInBracket",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      phone?: string | null,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    bracket?:  {
      __typename: "Bracket",
      id: string,
      name: string,
      head?:  {
        __typename: "Game",
        id: string,
        name: string,
        date: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      owner:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        phone?: string | null,
        password: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null,
    role?:  {
      __typename: "Role",
      id: string,
      desc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRoleSubscription = {
  onCreateRole?:  {
    __typename: "Role",
    id: string,
    desc: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoleSubscription = {
  onUpdateRole?:  {
    __typename: "Role",
    id: string,
    desc: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoleSubscription = {
  onDeleteRole?:  {
    __typename: "Role",
    id: string,
    desc: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
