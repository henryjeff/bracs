import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthController } from "../api/AuthController";
import {
  AnimatedMountView,
  Button,
  Text,
  TextInput,
  TouchableDiv,
} from "../components/general";
import colors from "../constants/Colors";
import useSignUp from "../hooks/useSignUp";

const SignInRoute: React.FC<{}> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const { isLoading, error, signUp } = useSignUp({
    email,
    username,
    password,
    phone,
  });

  return (
    <AnimatedMountView styles={{ width: 320, marginTop: 64 }}>
      <Text weight="medium" fontSize={24} style={styles.header}>
        Sign Up
      </Text>
      <TextInput
        iconSize={12}
        icon="user"
        placeholderText="Name"
        onChangeText={setUsername}
        containerStyles={styles.input}
      />
      <TextInput
        iconSize={12}
        icon="mail"
        placeholderText="Email"
        onChangeText={setEmail}
        containerStyles={styles.input}
      />
      <TextInput
        iconSize={12}
        icon="phone"
        placeholderText="Phone Number"
        onChangeText={setPhone}
        containerStyles={styles.input}
      />
      <TextInput
        icon="key"
        inputType="password"
        placeholderText="Password"
        onChangeText={setPassword}
        showContentToggle
        containerStyles={styles.input}
      />
      <div style={styles.buttons}>
        <Button isLoading={isLoading} text="Sign Up" onClick={signUp} />
        {error && (
          <AnimatedMountView styles={styles.errors}>
            <Text color={colors.red} fontSize={14} style={styles.error}>
              {error}
            </Text>
          </AnimatedMountView>
        )}
        {/* <div style={styles.spacer} />
        <Button
          iconSize={18}
          icon="google"
          text="Continue with Google"
          buttonTextProps={{ color: colors.navy1 }}
          buttonStyles={{ backgroundColor: "white" }}
          containerStyles={styles.input}
        /> */}
      </div>
      <TouchableDiv style={styles.footer}>
        <Link to="login" style={styles.link}>
          <Text color={colors.gray1} fontSize={12}>
            Already have an Account? Click to Login
          </Text>
        </Link>
      </TouchableDiv>
    </AnimatedMountView>
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
  footer: {
    marginTop: 24,
    display: "flex",
    justifyContent: "center",
  },
  spacer: {
    height: 12,
  },
  link: {
    textDecoration: "none",
  },
  errors: {
    marginTop: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default SignInRoute;
