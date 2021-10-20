// import { AnimatedMountView, Text, Button } from "../components/general";
// import colors from "../constants/Colors";

import { useState } from "react";
import {
  AnimatedMountView,
  LoadingIndicator,
  Text,
  Button,
  TouchableDiv,
} from "../components/general";
import colors from "../constants/Colors";

const Secret: React.FC<{}> = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [loadingTime, setLoadingTime] = useState(5000);
  const [boughtClicks, setBoughtClicks] = useState(0);
  const [cost, setCost] = useState(5);

  const pressButton = () => {
    if (isDisabled) return;
    setIsDisabled(true);
    setClicks(clicks + 1);
    setTimeout(() => {
      setIsDisabled(false);
    }, loadingTime);
  };

  const decreaseLoadingTime = () => {
    if (clicks >= cost) {
      setClicks(clicks - cost);
      setLoadingTime(loadingTime - loadingTime / 2);
      setBoughtClicks(boughtClicks + 1);
      setCost(2 * cost);
    }
  };

  return (
    <div style={styles.page}>
      <TouchableDiv onPress={pressButton}>
        <div
          style={Object.assign(
            {},
            styles.button,
            isDisabled && styles.disabled
          )}
        >
          {isDisabled ? (
            <AnimatedMountView styles={styles.loadingContainer} key="loading">
              <LoadingIndicator size={36} />
              <Text weight="medium" style={styles.loadingText}>
                Loading...
              </Text>
            </AnimatedMountView>
          ) : (
            <AnimatedMountView key="button">
              <Text weight="bold" fontSize={36}>
                Button
              </Text>
            </AnimatedMountView>
          )}
        </div>
      </TouchableDiv>
      <div style={styles.stats}>
        <div style={styles.actualStats}>
          <div style={styles.row}>
            <Text weight="medium" fontSize={18}>
              {clicks}
            </Text>
            <Text color={colors.gray1}> clicks!</Text>
          </div>
          <div style={styles.row}>
            <Text weight="medium" fontSize={18}>
              {loadingTime / 1000}s
            </Text>
            <Text color={colors.gray1}> loading time</Text>
          </div>
        </div>
        <div style={styles.powerups}>
          <Button
            disabled={clicks < cost}
            containerStyles={{ marginBottom: 10 }}
            text="Decrease loading time"
            onClick={decreaseLoadingTime}
          />
          <Text fontSize={12} color={colors.gray1}>
            Cost: {cost} clicks
          </Text>
        </div>
      </div>
    </div>
  );
};

const styles: StyleSheetCSS = {
  page: {
    display: "flex",
    marginTop: 64,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  disabled: {
    backgroundColor: `${colors.red}88`,
  },
  button: {
    width: 256,
    height: 256,
    borderRadius: 256,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 10px 10px #00000055",
    backgroundColor: colors.red,
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  loadingText: {
    marginTop: 16,
  },
  actualStats: {
    marginTop: 12,
  },
  stats: {
    marginTop: 32,
  },
  row: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  powerups: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
  },
};

export default Secret;
