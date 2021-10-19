import ReactFlow, { Elements } from "react-flow-renderer";
import { useCallback, useState, useRef, useEffect } from "react";
import useLayout from "../../hooks/useLayout";
import TeamNode from "./nodes/TeamNode";
import InProgressNode from "./nodes/InProgressNode";
import TbdNode from "./nodes/TbdNode";
import ByeNode from "./nodes/ByeNode";
import { convertSerializedTreeToElements } from "./Tree";
import { useBracketSelector } from "../../store/selectors";
export interface BracketProps {
  bracketId: string;
}

const Bracket: React.FC<BracketProps> = ({ bracketId }) => {
  const [rfInstance, setRfInstance] = useState();
  const [elements, setElements] = useState<Elements<any>>();

  const bracket = useBracketSelector(bracketId);

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
    }
  }, [dimensions, rfInstance]);

  useEffect(() => {
    if (bracket) {
      const e = convertSerializedTreeToElements(bracket.bracket);
      setElements(e);
    }
  }, [bracket]);

  useEffect(() => {}, [elements]);

  return (
    <div ref={ref} style={styles.container}>
      {elements && (
        <ReactFlow
          maxZoom={3}
          minZoom={0.1}
          preventScrolling={false}
          onLoad={onLoad}
          nodesDraggable={false}
          elements={elements}
          nodeTypes={BracketNodeTypes}
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

const BracketNodeTypes = {
  team: TeamNode,
  inProgress: InProgressNode,
  tbd: TbdNode,
  bye: ByeNode,
};

export default Bracket;
