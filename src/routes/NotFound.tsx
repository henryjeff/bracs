import { AnimatedMountView, Text, Button } from "../components/general";
import colors from "../constants/Colors";

const NotFound: React.FC<{}> = () => {
  return (
    <div style={styles.page}>
      <AnimatedMountView styles={styles.header}>
        <div style={styles.logoContainer}>
          <Text weight="bold" fontSize={64}>
            404
          </Text>
        </div>
        <Text fontSize={24} color={colors.gray1} style={{ marginTop: 8 }}>
          Not Found
        </Text>
      </AnimatedMountView>
      <AnimatedMountView delay={0.35} styles={styles.footer}>
        <Button linkTo="/" margin text="Take me home" />
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
    marginLeft: 12,
    marginRight: 12,
  },
};

export default NotFound;
