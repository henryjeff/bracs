import React from "react";
import { Link, useLocation } from "react-router-dom";
import colors from "../../constants/Colors";
import { Button, Text } from "../general";
import BrACS from "../../assets/BrACS.svg";
import { motion } from "framer-motion";
import { Easing } from "../../constants/Animation";
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
          <div>
            <Text
              weight="medium"
              color={isHere ? colors.white : colors.gray2}
              fontSize={16}
            >
              {text}
            </Text>
            <motion.div
              initial={false}
              style={styles.navIndicator}
              animate={isHere ? "here" : "hide"}
              variants={indicatorVariants}
              transition={{
                duration: 0.3,
                ease: Easing.expOut,
              }}
            />
          </div>
        )}
        {children}
      </Link>
    </div>
  );
};

const indicatorVariants = {
  here: { scaleX: 1, opacity: 1 },
  hide: { scaleX: 0, opacity: 0.5 },
};

const TopNavigation: React.FC<{}> = () => {
  return (
    <div className="topNavigation" style={styles.container}>
      <div style={styles.sideNav}>
        <NavigationOption to="/">
          <img style={styles.logo} src={BrACS} alt={""} />
        </NavigationOption>
      </div>
      <div style={styles.centerNav}>
        <NavigationOption to="" text="Home" />
        <NavigationOption to="make" text="Make" />
        <NavigationOption to="view" text="View" />
      </div>
      <div style={styles.sideNav}>
        <NavigationOption to="login">
          <Button text="Login" outline />
        </NavigationOption>
      </div>
    </div>
  );
};

const styles: StyleSheetCSS = {
  container: {
    width: "100%",
    borderWidth: 0,
    borderBottomWidth: 2,
    borderColor: colors.navy1,
    backgroundColor: colors.navy2,
    borderStyle: "solid",
    display: "flex",
  },
  link: {
    padding: 32,
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
    justifyContent: "center",
    display: "flex",
  },
  centerNav: {
    flex: 2,
    justifyContent: "center",
    display: "flex",
  },
  navIndicator: {
    marginTop: 4,
    marginBottom: -8,
    width: "100%",
    height: 3,
    backgroundColor: colors.white,
  },
};

export default TopNavigation;
