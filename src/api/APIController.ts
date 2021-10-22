import { GetUserQueryVariables, GetUserQuery } from "../API";
import { getUser } from "../graphql/queries";
import {graphQL} from './'

export class APIController {
  /**
   * authorize
   */
  static getUser(
    variables: {
      id: string;
    } = {} as GetUserQueryVariables
  ): Promise<GetUserQuery> {
    return new Promise((resolve, reject) => {
      graphQL(getUser, variables, resolve, reject);
    });
  }
}
