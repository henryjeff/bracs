import { Button, TextInput } from "../components/general";
import { config } from "../aws-exports";
import { GraphQLClient, gql } from "graphql-request";
import { useEffect } from "react";

const query = gql`
  {
    getUser(id: "4196f8c4-a632-43c0-81a3-016ad72cd713") {
      name
      id
      email
      phone
      updatedAt
    }
  }
`;

async function yo() {
  const endpoint = config.graphqlEndpoint;
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "x-api-key": config.apiKey,
      //   authorization: "Bearer MY_TOKEN",
    },
  });

  const data = await graphQLClient.request(query);
  console.log(JSON.stringify(data, undefined, 2));
}

const SignInRoute: React.FC<{}> = () => {
  useEffect(() => {
    yo();
  });

  return (
    <div style={{ width: 256, marginTop: 32 }}>
      <TextInput
        iconSize={12}
        icon="user"
        placeholderText="Username or Email"
        onChangeText={() => {}}
        containerStyles={styles.input}
      />
      <TextInput
        icon="key"
        inputType="password"
        placeholderText="Password"
        onChangeText={() => {}}
        showContentToggle
        containerStyles={styles.input}
      />
      <Button text="Login" containerStyles={styles.button} />
    </div>
  );
};

const styles: StyleSheetCSS = {
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 32,
  },
};

export default SignInRoute;
