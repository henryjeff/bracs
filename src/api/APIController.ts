import * as APIt from "../API";
import * as APIf from "../graphql/queries";
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
graphQL(APIf.getUser, variables, resolve, reject);
    });
  }

  static getBracketHead(
    variables: {
      id: string;
    } = {} as APIt.GetBracketQueryVariables
  ): Promise<APIt.GetBracketQuery> {
    return new Promise((resolve, reject) => {
      graphQL(APIf.getBracket, variables, resolve, reject);
    });
  }


}
