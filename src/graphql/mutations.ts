/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createBracket = /* GraphQL */ `
  mutation CreateBracket(
    $input: CreateBracketInput!
    $condition: ModelBracketConditionInput
  ) {
    createBracket(input: $input, condition: $condition) {
      id
      name
      head {
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
export const updateBracket = /* GraphQL */ `
  mutation UpdateBracket(
    $input: UpdateBracketInput!
    $condition: ModelBracketConditionInput
  ) {
    updateBracket(input: $input, condition: $condition) {
      id
      name
      head {
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
export const deleteBracket = /* GraphQL */ `
  mutation DeleteBracket(
    $input: DeleteBracketInput!
    $condition: ModelBracketConditionInput
  ) {
    deleteBracket(input: $input, condition: $condition) {
      id
      name
      head {
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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
      lGame {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
      lGame {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
      lGame {
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
      createdAt
      updatedAt
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      name
      image
      elo
      createdAt
      updatedAt
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      name
      image
      elo
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      name
      image
      elo
      createdAt
      updatedAt
    }
  }
`;
export const createUserOnTeam = /* GraphQL */ `
  mutation CreateUserOnTeam(
    $input: CreateUserOnTeamInput!
    $condition: ModelUserOnTeamConditionInput
  ) {
    createUserOnTeam(input: $input, condition: $condition) {
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
export const updateUserOnTeam = /* GraphQL */ `
  mutation UpdateUserOnTeam(
    $input: UpdateUserOnTeamInput!
    $condition: ModelUserOnTeamConditionInput
  ) {
    updateUserOnTeam(input: $input, condition: $condition) {
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
export const deleteUserOnTeam = /* GraphQL */ `
  mutation DeleteUserOnTeam(
    $input: DeleteUserOnTeamInput!
    $condition: ModelUserOnTeamConditionInput
  ) {
    deleteUserOnTeam(input: $input, condition: $condition) {
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
export const createUserInBracket = /* GraphQL */ `
  mutation CreateUserInBracket(
    $input: CreateUserInBracketInput!
    $condition: ModelUserInBracketConditionInput
  ) {
    createUserInBracket(input: $input, condition: $condition) {
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
export const updateUserInBracket = /* GraphQL */ `
  mutation UpdateUserInBracket(
    $input: UpdateUserInBracketInput!
    $condition: ModelUserInBracketConditionInput
  ) {
    updateUserInBracket(input: $input, condition: $condition) {
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
export const deleteUserInBracket = /* GraphQL */ `
  mutation DeleteUserInBracket(
    $input: DeleteUserInBracketInput!
    $condition: ModelUserInBracketConditionInput
  ) {
    deleteUserInBracket(input: $input, condition: $condition) {
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
export const createRole = /* GraphQL */ `
  mutation CreateRole(
    $input: CreateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    createRole(input: $input, condition: $condition) {
      id
      desc
      createdAt
      updatedAt
    }
  }
`;
export const updateRole = /* GraphQL */ `
  mutation UpdateRole(
    $input: UpdateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    updateRole(input: $input, condition: $condition) {
      id
      desc
      createdAt
      updatedAt
    }
  }
`;
export const deleteRole = /* GraphQL */ `
  mutation DeleteRole(
    $input: DeleteRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    deleteRole(input: $input, condition: $condition) {
      id
      desc
      createdAt
      updatedAt
    }
  }
`;
