/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateBracket = /* GraphQL */ `
  subscription OnCreateBracket {
    onCreateBracket {
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
export const onUpdateBracket = /* GraphQL */ `
  subscription OnUpdateBracket {
    onUpdateBracket {
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
export const onDeleteBracket = /* GraphQL */ `
  subscription OnDeleteBracket {
    onDeleteBracket {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      name
      image
      elo
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
      name
      image
      elo
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
      name
      image
      elo
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserOnTeam = /* GraphQL */ `
  subscription OnCreateUserOnTeam {
    onCreateUserOnTeam {
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
export const onUpdateUserOnTeam = /* GraphQL */ `
  subscription OnUpdateUserOnTeam {
    onUpdateUserOnTeam {
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
export const onDeleteUserOnTeam = /* GraphQL */ `
  subscription OnDeleteUserOnTeam {
    onDeleteUserOnTeam {
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
export const onCreateUserInBracket = /* GraphQL */ `
  subscription OnCreateUserInBracket {
    onCreateUserInBracket {
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
export const onUpdateUserInBracket = /* GraphQL */ `
  subscription OnUpdateUserInBracket {
    onUpdateUserInBracket {
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
export const onDeleteUserInBracket = /* GraphQL */ `
  subscription OnDeleteUserInBracket {
    onDeleteUserInBracket {
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
export const onCreateRole = /* GraphQL */ `
  subscription OnCreateRole {
    onCreateRole {
      id
      desc
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRole = /* GraphQL */ `
  subscription OnUpdateRole {
    onUpdateRole {
      id
      desc
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRole = /* GraphQL */ `
  subscription OnDeleteRole {
    onDeleteRole {
      id
      desc
      createdAt
      updatedAt
    }
  }
`;
