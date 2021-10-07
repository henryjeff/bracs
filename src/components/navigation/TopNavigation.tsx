import React from "react";
import { Link, useLocation } from "react-router-dom";
import colors from "../../constants/Colors";
import { Text } from "../general";
import BrACS from "../../assets/BrACS.svg";

interface NavigationOptionProps {
  to: string;
  text?: string;
}

const NavigationOption: React.FC<NavigationOptionProps> = ({
  to,
  text,
  children,
}) => {
  const location = useLocation();
  const isHere = `/${to}` === location.pathname;

  return (
    <div style={styles.navOptionContainer}>
      <Link to={to} style={styles.link}>
        {text && (
          <Text
            weight="medium"
            color={isHere ? colors.white : colors.gray2}
            fontSize={16}
          >
            {text}
          </Text>
        )}
        {children}
      </Link>
    </div>
  );
};

const TopNavigation: React.FC<{}> = () => {
  return (
    <div className="topNavigation" style={styles.container}>
      <div style={styles.sideNav}>
        <NavigationOption to="make">
          <img style={styles.logo} src={BrACS} alt={""} />
        </NavigationOption>
      </div>
      <div style={styles.centerNav}>
        <NavigationOption to="make" text="MAKE" />
        <NavigationOption to="view" text="VIEW" />
      </div>
      <div style={styles.sideNav}></div>
    </div>
  );
};

const styles: StyleSheetCSS = {
  container: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: colors.navy1,
    borderStyle: "solid",
    display: "flex",
  },
  link: {
    textDecoration: "none",
  },
  logo: { height: 36 },
  navOptionContainer: {
    // backgroundColor: "red",
    marginLeft: 12,
    marginRight: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.2,
  },
  sideNav: {
    flex: 1,
    // backgroundColor: "green",
    justifyContent: "center",
    display: "flex",
  },
  centerNav: {
    flex: 2,
    justifyContent: "center",
    // backgroundColor: "blue",
    display: "flex",
  },
};

export default TopNavigation;
