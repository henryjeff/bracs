import { Button, Text, TextInput } from "../components/general";
import colors from "../constants/Colors";

const SignInRoute: React.FC<{}> = () => {
  return (
    <div style={{ width: 256, marginTop: 32 }}>
      <Text weight="medium" fontSize={24} style={styles.header}>
        Sign In
      </Text>
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
      <div style={styles.buttons}>
        <Button text="Login" />
        <div style={styles.orContainer}>{/* <Text>OR</Text> */}</div>
        <Button
          iconSize={18}
          icon="google"
          text="Continue with Google"
          buttonTextProps={{ color: colors.navy1 }}
          buttonStyles={{ backgroundColor: "white" }}
          containerStyles={styles.input}
        />
      </div>
    </div>
  );
};

const styles: StyleSheetCSS = {
  input: {
    marginBottom: 16,
  },
  buttons: {
    marginTop: 32,
  },
  header: {
    marginBottom: 32,
  },
  orContainer: {
    padding: 8,
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
};

export default SignInRoute;
