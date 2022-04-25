import { LoadingIndicator, Text } from "../components/general";
import { useEffect, useState } from "react";
import { getUserBrackets } from "../store/actions/BracketActions";
import { useDispatch } from "react-redux";
import { useUserBracketsSelector, useCurrUser } from "../store/selectors";
import colors from "../constants/Colors";
import useHover from "../hooks/useHover";
import { motion } from "framer-motion";
import { Easing } from "../constants/Animation";
import { Link } from "react-router-dom";

const BracketItem: React.FC<{ bracket: string }> = ({ bracket }) => {
  const { isHovering, onHover, onLeave } = useHover();
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={false}
      animate={isHovering ? "hover" : "none"}
      variants={hoverVariants}
      transition={{
        duration: 0.8,
        ease: Easing.expOut,
      }}
      style={styles.bracketItem}
    >
      <Link style={styles.link} to={`view/${bracket}`}>
        <Text weight="medium" fontSize={18}>
          Bracket
        </Text>
        <Text fontSize={18}>#{bracket}</Text>
      </Link>
    </motion.div>
  );
};

const BracketRoute: React.FC<{}> = () => {
  const user = useCurrUser();
  const dispatch = useDispatch();
  const brackets = useUserBracketsSelector(user.id);
  const [bracketIds, setBracketIds] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("recent");

  useEffect(() => {
    if (brackets) {
      if (brackets.length > 0) {
        const new_b = Array.from(brackets);
        new_b.reverse();
        setBracketIds(new_b);
      }
    }
  }, [brackets]);

  useEffect(() => {
    if (brackets) {
      if (sortBy === "recent") {
        const new_b = Array.from(brackets);
        new_b.reverse();
        setBracketIds(new_b);
      }
      if (sortBy === "oldest") {
        setBracketIds(brackets);
      }
    }
  }, [brackets, sortBy]);

  useEffect(() => {
    // check if logged in before getting bracket
    if (user) {
      dispatch(getUserBrackets(user.id));
    }
  }, [user, dispatch]);

  return (
    <div style={styles.page}>
      <Text weight="medium" fontSize={24}>
        Your Brackets
      </Text>
      {brackets ? (
        <div style={styles.bracketList}>
          <div style={styles.listHeader}>
            <Text color={colors.gray1} weight="medium">
              Sort By
            </Text>
            <div style={styles.sortContainer}>
              <div onMouseDown={() => setSortBy("recent")}>
                <Text style={{ opacity: sortBy === "recent" ? 1 : 0.5 }}>
                  Recent
                </Text>
              </div>
              <div onMouseDown={() => setSortBy("oldest")}>
                <Text style={{ opacity: sortBy === "oldest" ? 1 : 0.5 }}>
                  Oldest
                </Text>
              </div>
            </div>
          </div>
          {bracketIds.map((id) => {
            return <BracketItem key={id} bracket={`${id}`} />;
          })}
        </div>
      ) : (
        <div style={styles.loadingContainer}>
          <LoadingIndicator size={32} />
        </div>
      )}
    </div>
  );
};

const hoverVariants = {
  hover: { translateY: -4, opacity: 1 },
  none: { translateY: 0, opacity: 0.7 },
};

const styles: StyleSheetCSS = {
  bracket: {
    width: "100%",
  },
  listHeader: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    padding: 8,
    boxSizing: "border-box",
  },
  sortContainer: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    width: 100,
    justifyContent: "space-between",
  },
  page: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 32,
  },
  bracketList: {
    width: "100%",
    maxWidth: 500,
    marginTop: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    boxSizing: "border-box",
  },
  loadingContainer: {
    marginTop: 32,
  },
  bracketItem: {
    width: "100%",
    backgroundColor: colors.navy1,
    display: "flex",

    borderRadius: 12,
    marginBottom: 12,
    boxSizing: "border-box",
    cursor: "pointer",
  },
  link: {
    display: "flex",
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
    alignItems: "center",
    textDecoration: "none",
  },
};

export default BracketRoute;
