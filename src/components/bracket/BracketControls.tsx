// import ReactFlow, { Elements } from "react-flow-renderer";
// import { useCallback, useState, useRef, useEffect } from "react";
// import useLayout from "../../hooks/useLayout";
// import TeamNode from "./nodes/TeamNode";
// import InProgressNode from "./nodes/InProgressNode";
// import TbdNode from "./nodes/TbdNode";
// import ByeNode from "./nodes/ByeNode";
// import { convertSerializedTreeToElements } from "./Tree";

import { brotliDecompress } from "zlib";
import colors from "../../constants/Colors";
import { Button, Icon, Text } from "../general";

// import { useBracketSelector } from "../../store/selectors";
export interface BracketProps {
  bracketId: string;
}

const BracketControls: React.FC<BracketProps> = ({ bracketId }) => {
  //   const [rfInstance, setRfInstance] = useState();
  //   const [elements, setElements] = useState<Elements<any>>();

  //   const bracket = useBracketSelector(bracketId);

  //   const onLoad = useCallback((instance) => {
  //     instance.fitView();
  //     setRfInstance(instance);
  //   }, []);

  //   const ref = useRef(null);
  //   const dimensions = useLayout(ref);

  //   useEffect(() => {
  //     if (rfInstance) {
  //       //@ts-ignore
  //       rfInstance.fitView();
  //     }
  //   }, [dimensions, rfInstance]);

  //   useEffect(() => {
  //     if (bracket) {
  //       const e = convertSerializedTreeToElements(bracket.bracket);
  //       setElements(e);
  //     }
  //   }, [bracket]);

  //   useEffect(() => {}, [elements]);

  return (
    <div className="bracket-controls" style={styles.container}>
      <div style={styles.infoContainer}>
        <Text weight="medium" fontSize={24}>
          Information
        </Text>
        <div style={styles.bracketInfo}>
          <div style={styles.bracketInfoRow}>
            <Text>Name</Text>
            <Text color={colors.gray1}>Untitled Bracket</Text>
          </div>
          <div style={styles.bracketInfoRow}>
            <Text>Contestants</Text>
            <div style={styles.infoIconContainer}>
              <Text color={colors.gray1}>4</Text>
              <Icon icon="user" size={12} style={styles.icon} />
            </div>
          </div>
          <div style={styles.bracketInfoRow}>
            <Text>Progress</Text>
            <Text color={colors.gray1}> 2/5 Games Played</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: StyleSheetCSS = {
  container: {
    borderColor: colors.navy1,
    borderStyle: "solid",
    borderWidth: 0,
    borderRightWidth: 2,
  },
  infoContainer: {
    backgroundColor: colors.navy1,
    padding: 16,
    borderRadius: 8,
  },
  infoIconContainer: {
    display: "flex",
    alignItems: "center",
  },
  bracketInfo: {
    paddingTop: 16,
    paddingBottom: 16,
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    marginLeft: 6,
  },
  bracketInfoRow: {
    display: "flex",
    paddingTop: 4,
    paddingBottom: 4,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
};

export default BracketControls;
