import ReactFlow from "react-flow-renderer";
import colors from "../../constants/Colors";
import TeamNode from "./nodes/TeamNode";
import InProgressNode from "./nodes/InProgressNode";
import TbdNode from "./nodes/TbdNode";

const inProgressEdge = {
  type: "smoothstep",
  style: { stroke: colors.white, strokeWidth: 3, opacity: 0.4 },
};

const completedEdge = {
  type: "smoothstep",
  style: { stroke: colors.navy1, strokeWidth: 3 },
};

const waitingEdge = {
  type: "smoothstep",
  style: { stroke: colors.navy1, strokeWidth: 3 },
};

const elements = [
  {
    id: "s1",
    type: "team",
    position: { x: 100, y: 100 },
    data: {
      text: "Sigma Alpha Epsilon",
      wins: 10,
      losses: 4,
      color: "#8F31E0",
    },
  },
  {
    id: "s2",
    type: "team",
    position: { x: 100, y: 200 },
    data: {
      text: "Pi Lamda Phi",
      wins: 4,
      losses: 10,
      color: "#31D3E0",
    },
  },
  {
    id: "s3",
    type: "team",
    position: { x: 100, y: 350 },
    data: {
      text: "Lamda Chi Alpha",
      wins: 5,
      losses: 10,
      color: "#2B9851",
    },
  },
  {
    id: "s4",
    type: "team",
    position: { x: 100, y: 450 },
    data: {
      text: "Sigma Chi",
      wins: 4,
      losses: 10,
      color: "#E03167",
    },
  },
  {
    id: "s5",
    type: "team",
    data: {
      text: "Sigma Alpha Epsilon",
      wins: 10,
      losses: 4,
      color: "#8F31E0",
    },
    position: { x: 450, y: 150 },
  },
  {
    id: "s6",
    type: "inProgress",
    position: { x: 450, y: 400 },
  },
  {
    id: "s7",
    type: "tbd",
    position: { x: 800, y: 275 },
  },
  {
    id: "e2",
    source: "s2",
    target: "s5",
    ...completedEdge,
  },
  {
    id: "e1",
    source: "s1",
    target: "s5",
    ...completedEdge,
    // animated: ture
    style: { stroke: "#8F31E0", strokeWidth: 3 },
  },
  {
    id: "e3",
    source: "s3",
    animated: true,
    target: "s6",
    ...inProgressEdge,
  },
  {
    id: "e4",
    source: "s4",
    animated: true,
    target: "s6",
    ...inProgressEdge,
  },
  {
    id: "e5",
    source: "s6",
    target: "s7",
    ...waitingEdge,
  },
  {
    id: "e6",
    source: "s5",
    target: "s7",
    ...waitingEdge,
  },
];

const Bracket: React.FC<{}> = () => {
  return <ReactFlow elements={elements} nodeTypes={nodeTypes} />;
};

const nodeTypes = {
  team: TeamNode,
  inProgress: InProgressNode,
  tbd: TbdNode,
};

export default Bracket;
