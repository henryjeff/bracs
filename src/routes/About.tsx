import { AnimatedMountView, Text, Button } from "../components/general";
import colors from "../constants/Colors";
import { motion } from "framer-motion";
import useHover from "../hooks/useHover";
import { Easing } from "../constants/Animation";
import ReduxImage from "../assets/images/redux.png";
import AwsImage from "../assets/images/aws.png";
import ReactImage from "../assets/images/react.png";
import FlaskImage from "../assets/images/flask.png";
import SqlImage from "../assets/images/sql.png";

interface MemberProps {
  name: string;
  role: string;
}

const Member: React.FC<MemberProps> = ({ name, role }) => {
  const { isHovering, onHover, onLeave } = useHover();

  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={false}
      animate={isHovering ? "hover" : "none"}
      variants={memberVariants}
      transition={{
        duration: 0.8,
        ease: Easing.expOut,
      }}
      style={styles.member}
    >
      <div
        style={{
          width: 8,
          backgroundColor: colors.gray1,
          flexShrink: 1,
          height: 48,
          marginRight: 12,
          borderRadius: 8,
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          flexGrow: 1,
        }}
      >
        <Text textWrap weight="medium" fontSize={24}>
          {name}
        </Text>
        <Text
          textWrap
          color={colors.gray1}
          fontSize={16}
          style={{ marginTop: 4 }}
        >
          {role}
        </Text>
      </div>
    </motion.div>
  );
};

const memberVariants = {
  hover: { translateY: -16 },
  none: { translateY: 0 },
};

const About: React.FC<{}> = () => {
  return (
    <AnimatedMountView styles={styles.page}>
      <div style={styles.header}>
        <Text
          // weight="medium"
          color={colors.gray1}
          fontSize={24}
        >
          Meet the Team Developing
        </Text>
        <Text mono weight="bold" fontSize={48}>
          [BrACS]
        </Text>
      </div>
      <div style={styles.members}>
        <AnimatedMountView delay={0.1} mountInitialOffset={32}>
          <Member name="Henry Heffernan" role="Frontend and Team Lead" />
        </AnimatedMountView>
        <AnimatedMountView delay={0.2} mountInitialOffset={32}>
          <Member name="Trey Breccetti" role="Backend Lead" />
        </AnimatedMountView>
        <AnimatedMountView delay={0.3} mountInitialOffset={32}>
          <Member name="Jon Wong" role="Dev Ops and AWS Lead" />
        </AnimatedMountView>
      </div>
      <AnimatedMountView delay={0.3} duration={0.8} styles={{ margin: 32 }}>
        <Text color={colors.gray1}>
          Like what we're doing? This project is open source, contribute on
          Github!
        </Text>
      </AnimatedMountView>
      <AnimatedMountView delay={0.4} duration={0.8}>
        <a href="https://github.com/JonathanWong592/bracs">
          <Button icon="github" text={"Contribute on Github"} />
        </a>
      </AnimatedMountView>
      {/* <AnimatedMountView delay={0.4} duration={0.8} styles={styles.header}>
        <Text color={colors.gray1} fontSize={24}>
          Meet the
        </Text>
        <Text mono weight="bold" fontSize={48}>
          [BrACS]
        </Text>
        <Text
          weight="bold"
          letterSpacing={3}
          color={colors.gray1}
          fontSize={42}
        >
          STACK
        </Text>
      </AnimatedMountView>
      <div style={styles.stackContainer}>
        <AnimatedMountView delay={0.6} duration={0.8}>
          <img style={styles.stackItem} src={ReactImage} alt="" />
          <img style={styles.stackItem} src={ReduxImage} alt="" />
          <img style={styles.stackItem} src={AwsImage} alt="" />
          <img style={styles.stackItem} src={FlaskImage} alt="" />
          <img style={styles.stackItem} src={SqlImage} alt="" />
        </AnimatedMountView>
      </div> */}
    </AnimatedMountView>
  );
};

const styles: StyleSheetCSS = {
  page: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "110vh",
    flexDirection: "column",
  },
  stackContainer: {
    display: "flex",
  },
  header: {
    marginTop: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 24,
  },
  picture: {
    borderRadius: 1000,
    height: "30vh",
    opacity: 0.9,
  },
  members: {
    display: "flex",
    justifyContent: "space-between",
  },
  stackItem: {
    height: 100,
    margin: 16,
  },
  member: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
    padding: 24,
    minWidth: 212,
    borderRadius: 16,
    backgroundColor: colors.navy1,
  },
};

export default About;
