import {
  AnimatedMountView,
  Button,
  Text,
  TextInput,
} from "../components/general";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import TeamPreview from "../components/view/TeamPreview";
import { useState, useCallback, createRef, useEffect } from "react";
import { generateRandomColor } from "../util/randomColor";
import useKeyPress from "../hooks/useKeyPress";

type TeamItem = {
  id: string;
  content: string;
  color: string;
};

const getItemStyle = (draggableStyle: any) => ({
  userSelect: "none",
  padding: 2,
  margin: `0 0 ${1}px 0`,
  ...draggableStyle,
});

const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const MakeBracketRoute: React.FC<{}> = () => {
  const [teams, setTeams] = useState<TeamItem[]>([]);
  const [newTeam, setNewTeam] = useState<string>("");
  const inputRef = createRef<HTMLElement>();
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  const enterPressed = useKeyPress("Enter");

  const addTeam = useCallback(() => {
    if (newTeam.length > 1) {
      teams.push({
        id: `${teams.length}`,
        content: newTeam,
        color: generateRandomColor(),
      });
      setNewTeam("");
      forceUpdate();
    }
  }, [newTeam, teams, forceUpdate]);

  useEffect(() => {
    inputRef.current?.focus();
  });

  useEffect(() => {
    if (enterPressed) addTeam();
  }, [enterPressed, addTeam]);

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const i = reorder(teams, result.source.index, result.destination.index);
    setTeams(i);
  };

  const onDelete = (index: number) => {
    const newItems = teams;
    newItems.splice(index, 1);
    setTeams(newItems);
    forceUpdate();
  };

  const onColorChange = (newColor: string, index: number) => {
    const newItems = teams;
    newItems[index] = { ...newItems[index], color: newColor };
    setTeams(newItems);
    forceUpdate();
  };

  return (
    <AnimatedMountView styles={{ width: "60%", marginTop: 32 }}>
      <div style={styles.topInput}>
        <TextInput
          _ref={inputRef as React.LegacyRef<HTMLInputElement> | undefined}
          icon="circleAdd"
          placeholderText="Enter a new team name"
          onChangeText={setNewTeam}
          value={newTeam}
        />
        <div style={styles.topInputButtons}>
          <Button
            text="Add"
            disabled={newTeam.length === 0}
            onClick={addTeam}
          />
          <div style={styles.spacer} />
          <Button text="Start" disabled={teams.length < 2} />
        </div>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="ok">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {teams.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(provided.draggableProps.style)}
                    >
                      <AnimatedMountView>
                        <TeamPreview
                          name={item.content}
                          seed={index + 1}
                          color={item.color}
                          onDelete={() => onDelete(index)}
                          onColorChange={(color) => onColorChange(color, index)}
                        />
                      </AnimatedMountView>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </AnimatedMountView>
  );
};

const styles: StyleSheetCSS = {
  topInput: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 32,
  },
  spacer: {
    width: 24,
  },
  topInputButtons: {
    display: "flex",
    marginLeft: 16,
    alignItems: "flex-end",
  },
};

export default MakeBracketRoute;
