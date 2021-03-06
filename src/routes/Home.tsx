import { AnimatedMountView, Button, Text } from "../components/general";
import colors from "../constants/Colors";
import { useCurrUser } from "../store/selectors";

const HomeRoute: React.FC<{}> = () => {
  const user = useCurrUser();

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          <AnimatedMountView
            mountInitialOffset={-48}
            mountDirection="x"
            duration={1}
            delay={0.1}
          >
            <Text weight="bold" mono fontSize={64}>
              {"["}
            </Text>
          </AnimatedMountView>
          <AnimatedMountView
            mountInitialOffset={16}
            styles={styles.logo}
            duration={1}
            delay={0.1}
          >
            <Text weight="bold" mono fontSize={64}>
              BrACS
            </Text>
          </AnimatedMountView>
          <AnimatedMountView
            mountInitialOffset={48}
            mountDirection="x"
            duration={1}
            delay={0.1}
          >
            <Text weight="bold" mono fontSize={64}>
              {"]"}
            </Text>
          </AnimatedMountView>
        </div>
        <AnimatedMountView delay={0.3} duration={0.8}>
          <Text fontSize={24} color={colors.gray1} style={{ marginTop: 8 }}>
            Create simple, gorgeous brackets
          </Text>
        </AnimatedMountView>
      </div>
      <AnimatedMountView delay={0.4} styles={styles.footer} duration={0.8}>
        <Button linkTo="/make" margin text="Make a Bracket" />
        {user ? (
          <Button linkTo="/brackets" margin text="View Brackets" />
        ) : (
          <Button linkTo="/login" margin text="Sign In" />
        )}
      </AnimatedMountView>
    </div>
  );
};

const styles: StyleSheetCSS = {
  page: {
    display: "flex",
    marginTop: 128,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  logoContainer: {
    display: "flex",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
  logo: {
    // marginLeft: 12,
    // marginRight: 12,
  },
};

export default HomeRoute;
