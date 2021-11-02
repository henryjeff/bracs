import * as APIt from "../API";
import * as APIg from "../graphql/queries";
import * as APIm from "../graphql/mutations";
import {graphQL} from './'

export class APIController {
  /**
   * authorize
   */
  static getUser(
    variables: {
      id: string;
    } = {} as APIt.GetUserQueryVariables
  ): Promise<APIt.GetUserQuery> {
    return new Promise((resolve, reject) => {
      graphQL(APIg.getUser, variables, resolve, reject);
    });
  }

  static getBracketHead(
    variables: {
      id: string;
    } = {} as APIt.GetBracketQueryVariables
  ): Promise<APIt.GetBracketQuery> {
    return new Promise((resolve, reject) => {
      graphQL(APIg.getBracket, variables, resolve, reject);
    });
  }

  static getGame(
    variables: {
      id: string;
    } = {} as APIt.GetGameQueryVariables
  ): Promise<APIt.GetGameQuery> {
    return new Promise((resolve, reject) => {
      graphQL(APIg.getGame, variables, resolve, reject);
    });
  }

  static createBracketHead(
    variables: {
      id?: string | null,
      name: string;
    } = {} as APIt.CreateBracketInput
  ): Promise<APIt.CreateBracketMutation> {
    return new Promise((resolve, reject) => {
      graphQL(APIm.createBracket, variables, resolve, reject);
    });
  }

  static createGame(
    variables: {
      id?: string | null,
      name: string;
    } = {} as APIt.CreateGameInput
  ): Promise<APIt.CreateGameMutation> {
    return new Promise((resolve, reject) => {
      graphQL(APIm.createGame, variables, resolve, reject);
    });
  }


}