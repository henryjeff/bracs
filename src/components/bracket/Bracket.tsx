import ReactFlow, { Elements } from "react-flow-renderer";
import { useCallback, useState, useRef, useEffect } from "react";
import useLayout from "../../hooks/useLayout";
import TeamNode from "./nodes/TeamNode";
import InProgressNode from "./nodes/InProgressNode";
import TbdNode from "./nodes/TbdNode";
import ByeNode from "./nodes/ByeNode";
import { Tree } from "./Tree";
// import { convertTreeToElements } from "./BracketDS";

export interface BracketProps {
  tree: Tree<Team>;
  forceUpdate?: number;
}

const Bracket: React.FC<BracketProps> = ({ tree, forceUpdate }) => {
  const [rfInstance, setRfInstance] = useState();
  const [elements, setElements] = useState<Elements<any>>();

  const onLoad = useCallback((instance) => {
    instance.fitView();
    setRfInstance(instance);
  }, []);

  const ref = useRef(null);
  const dimensions = useLayout(ref);

  useEffect(() => {
    if (rfInstance) {
      //@ts-ignore
      rfInstance.fitView();
      setElements([]);
    }
  }, [dimensions, rfInstance]);

  // useEffect(() => {
  //   setElements(convertTreeToElements(tree));
  // }, [forceUpdate, setElements]);

  return (
    <div ref={ref} style={styles.container}>
      {elements && (
        <ReactFlow
          onLoad={onLoad}
          // nodesDraggable={false}
          elements={[]}
          nodeTypes={nodeTypes}
        />
      )}
    </div>
  );
};

const styles: StyleSheetCSS = {
  container: {
    width: "100%",
    height: "100%",
    cursor: "grab",
  },
};

const nodeTypes = {
  team: TeamNode,
  inProgress: InProgressNode,
  tbd: TbdNode,
  buy: ByeNode,
};

export default Bracket;
