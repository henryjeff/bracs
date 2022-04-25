import { animate } from "popmotion";
import ReactFlow, {
  Elements,
  useZoomPanHelper,
  useStore,
} from "react-flow-renderer";
import { useCallback, useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import useLayout from "../../hooks/useLayout";
import TeamNode from "./nodes/TeamNode";
import InProgressNode from "./nodes/InProgressNode";
import TbdNode from "./nodes/TbdNode";
import ByeNode from "./nodes/ByeNode";
import { convertSerializedTreeToElements } from "./Tree";
import { useBracketSelector, useCurrUser } from "../../store/selectors";
import { updateBracket } from "../../store/actions/BracketActions";
import { Text } from "../general";
import colors from "../../constants/Colors";
import _ from "lodash";
export interface BracketProps {
  bracketId: string;
}

const Bracket: React.FC<BracketProps> = ({ bracketId }) => {
  const [rfInstance, setRfInstance] = useState<any>();
  const [elements, setElements] = useState<Elements<any>>();
  const [error, setError] = useState("");
  const [lastBracket, setLastBracket] = useState<SerializedBracket<Team>>();
  const user = useCurrUser();
  const bracket = useBracketSelector(bracketId);
  const dispatch = useDispatch();

  const onLoad = useCallback(
    (instance) => {
      setRfInstance(instance);
    },
    [rfInstance]
  );

  const ref = useRef(null);
  const dimensions = useLayout(ref);
  const { setCenter } = useZoomPanHelper();

  // const cum = (i: number) => {
  //   const { nodes } = store.getState();

  //   console.log("hello?/");

  //   if (nodes.length) {
  //     const node = nodes[nodes.length - 1];
  //     const x = node.__rf.position.x + node.__rf.width / 2;
  //     const y = node.__rf.position.y + node.__rf.height / 2;
  //     console.log(x, y);
  //     setCenter(x, y, 1);
  //     // handleTransform({ x: x, y: y, zoom: 1 });
  //   }
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     cum(0);
  //   }, 1000);
  // }, []);

  // const handleTransform = (transform: {
  //   x: number;
  //   y: number;
  //   zoom: number;
  // }) => {
  //   // const {
  //   //   position: [x, y],
  //   //   zoom,
  //   // } = rfInstance.toObject();

  //   animate({
  //     from: { x: 0, y: 0, zoom: 1 },
  //     to: transform,
  //     onUpdate: ({ x, y, zoom }) => setCenter(x, y, zoom),
  //   });
  // };

  useEffect(() => {
    if (rfInstance) {
      //@ts-ignore
      rfInstance.fitView({ padding: 0.2 });
    }
  }, [dimensions, rfInstance]);

  useEffect(() => {
    if (bracket) {
      if (bracket.bracket) {
        if (bracket.bracket.root && bracket.bracket.values) {
          // if (user) {
          //   dispatch(updateBracket(bracket.bracket, bracketId));
          // }

          const e = convertSerializedTreeToElements(bracket.bracket, bracketId);
          setElements(e);
          setLastBracket(bracket.bracket);
        } else {
          setError("Bracket in invalid format");
        }
      } else {
        setError("Bracket not found");
      }
    }
  }, [bracket, bracketId]);

  return (
    <div ref={ref} style={styles.container}>
      {elements && (
        <ReactFlow
          maxZoom={3}
          minZoom={0.1}
          preventScrolling={true}
          onLoad={onLoad}
          nodesDraggable={false}
          elements={elements}
          nodeTypes={BracketNodeTypes}
        />
      )}
      {error !== "" && (
        <div style={styles.errorContainer}>
          <Text weight="medium" fontSize={32}>
            Error
          </Text>
          <Text weight="medium" style={styles.errorText} color={colors.gray1}>
            {error}
          </Text>
        </div>
      )}
    </div>
  );
};

const styles: StyleSheetCSS = {
  container: {
    width: "100%",
    height: "100%",
  },
  errorContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  errorText: {
    marginTop: 10,
  },
};

const BracketNodeTypes = {
  team: TeamNode,
  inProgress: InProgressNode,
  tbd: TbdNode,
  bye: ByeNode,
};

export default Bracket;
