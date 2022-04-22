import React from "react";
import { Link, useLocation } from "react-router-dom";
import colors from "../../constants/Colors";
import {
  AnimatedMountView,
  Button,
  Icon,
  Text,
  TouchableDiv,
} from "../general";
import { motion } from "framer-motion";
import { Easing } from "../../constants/Animation";
import useHover from "../../hooks/useHover";
import { useCurrUser, useTokenData } from "../../store/selectors";
import useLogout from "../../hooks/useLogout";
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
  const isHere = to === location.pathname;

  return (
    <div style={styles.navOptionContainer}>
      <Link to={to} style={styles.link}>
        {text && (
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
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
                duration: 0.4,
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

const logoVariants = (value: number) => {
  return {
    hover: { translateX: value, scale: 1.2, opacity: 0.7 },
    none: { translateX: 0, opacity: 1 },
  };
};

const textVariants = {
  hover: { scale: 0.9, opacity: 0.7 },
  none: { scale: 1 },
};

const Logo: React.FC<{}> = () => {
  const { isHovering, onHover, onLeave } = useHover();
  const transition = {
    duration: 0.8,
    ease: Easing.expOut,
  };

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={styles.logoContainer}
    >
      <motion.div
        initial={false}
        // style={styles.bracket}
        animate={isHovering ? "hover" : "none"}
        variants={logoVariants(-4)}
        transition={transition}
      >
        <Text weight="bold" mono fontSize={24}>
          [
        </Text>
      </motion.div>
      <motion.div
        initial={false}
        // style={styles.bracket}
        animate={isHovering ? "hover" : "none"}
        variants={textVariants}
        transition={transition}
      >
        <Text weight="bold" mono fontSize={24}>
          BrACS
        </Text>
      </motion.div>
      <motion.div
        initial={false}
        // style={styles.bracket}
        animate={isHovering ? "hover" : "none"}
        variants={logoVariants(4)}
        transition={transition}
      >
        <Text weight="bold" mono fontSize={24}>
          ]
        </Text>
      </motion.div>
    </div>
  );
};

const TopNavigation: React.FC<{}> = () => {
  const tokenData = useTokenData();
  const user = useCurrUser();
  const { logout } = useLogout();

  return (
    <div className="topNavigation" style={styles.container}>
      <div style={styles.sideNav}>
        <NavigationOption to="/">
          <Logo />
        </NavigationOption>
      </div>
      <div style={styles.centerNav}>
        <NavigationOption to="/" text="Home" />
        <NavigationOption to="/make" text="Make" />
        <NavigationOption to="/about" text="About" />
        {tokenData?.accessToken && user ? (
          <NavigationOption to="/brackets" text="Brackets" />
        ) : null}
      </div>
      <div style={styles.sideNav}>
        {tokenData?.accessToken && user ? (
          <AnimatedMountView mountDirection={"x"} styles={styles.row}>
            <Icon icon="user" size={16} style={styles.userIcon} />
            <Text weight="medium" fontSize={16}>
              {user.username}
            </Text>
            <TouchableDiv style={styles.logout} onPress={logout}>
              <Icon size={18} icon="logout" />
            </TouchableDiv>
          </AnimatedMountView>
        ) : (
          <NavigationOption to="/login">
            <Button text="Login" />
          </NavigationOption>
        )}
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
  logoContainer: {
    display: "flex",
  },
  link: {
    padding: 32,
    textDecoration: "none",
  },
  logo: { height: 36 },
  navOptionContainer: {
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
    // background: "red",
  },
  centerNav: {
    flex: 2,
    justifyContent: "center",
    display: "flex",
  },
  navIndicator: {
    marginTop: 8,
    marginBottom: -8,
    width: 64,
    justifyContent: "center",
    height: 3,
    backgroundColor: colors.white,
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: "column",
  },
  logout: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  userIcon: {
    marginRight: 8,
  },
};

export default TopNavigation;
