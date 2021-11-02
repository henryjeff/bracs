/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      phone
      password
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        password
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBracket = /* GraphQL */ `
  query GetBracket($id: ID!) {
    getBracket(id: $id) {
      id
      name
      head {
        id
        name
        date
        createdAt
        updatedAt
      }
      owner {
        id
        name
        email
        phone
        password
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBrackets = /* GraphQL */ `
  query ListBrackets(
    $filter: ModelBracketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrackets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      name
      date
      rTeam {
        id
        name
        image
        elo
        createdAt
        updatedAt
      }
      lTeam {
        id
        name
        image
        elo
        createdAt
        updatedAt
      }
      rGame {
        id
        name
        date
        createdAt
        updatedAt
      }
      lGame {
        id
        name
        date
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      image
      elo
      createdAt
      updatedAt
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        elo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserOnTeam = /* GraphQL */ `
  query GetUserOnTeam($id: ID!) {
    getUserOnTeam(id: $id) {
      id
      user {
        id
        name
        email
        phone
        password
        createdAt
        updatedAt
      }
      team {
        id
        name
        image
        elo
        createdAt
        updatedAt
      }
      role {
        id
        desc
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserOnTeams = /* GraphQL */ `
  query ListUserOnTeams(
    $filter: ModelUserOnTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserOnTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserInBracket = /* GraphQL */ `
  query GetUserInBracket($id: ID!) {
    getUserInBracket(id: $id) {
      id
      user {
        id
        name
        email
        phone
        password
        createdAt
        updatedAt
      }
      bracket {
        id
        name
        createdAt
        updatedAt
      }
      role {
        id
        desc
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserInBrackets = /* GraphQL */ `
  query ListUserInBrackets(
    $filter: ModelUserInBracketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInBrackets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRole = /* GraphQL */ `
  query GetRole($id: ID!) {
    getRole(id: $id) {
      id
      desc
      createdAt
      updatedAt
    }
  }
`;
export const listRoles = /* GraphQL */ `
  query ListRoles(
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        desc
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
