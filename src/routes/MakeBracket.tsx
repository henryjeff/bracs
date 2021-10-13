import {
  AnimatedMountView,
  Button,
  TextInput,
  Toggle,
  Text,
} from "../components/general";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import TeamPreview from "../components/view/TeamPreview";
import { useState, useCallback, createRef, useEffect } from "react";
import { generateRandomColor } from "../util/randomColor";
import reorder from "../util/reorder";
import useKeyPress from "../hooks/useKeyPress";
import colors from "../constants/Colors";

type TeamItem = {
  id: string;
  content: string;
  color: string;
};

const getItemStyle = (draggableStyle: any) => ({
  userSelect: "none",
  padding: 2,
  margin: `0 0 1px 0`,
  ...draggableStyle,
});

const MakeBracketRoute: React.FC<{}> = () => {
  const [teams, setTeams] = useState<TeamItem[]>([]);
  const [newTeam, setNewTeam] = useState<string>("");
  const inputRef = createRef<HTMLElement>();
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  const [useElo, setUseElo] = useState(false);

  const enterPressed = useKeyPress("Enter");

  const addTeam = useCallback(() => {
    if (newTeam.length > 0) {
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
        {useElo && (
          <AnimatedMountView
            mountDirection="x"
            mountInitialOffset={-16}
            styles={{ marginLeft: 16 }}
          >
            <TextInput
              icon="rating"
              placeholderText="Rating"
              onChangeText={() => {}}
              // onChangeText={setNewTeam}
              // value={newTeam}
            />
          </AnimatedMountView>
        )}
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: 32,
          // backgroundColor: "red",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Toggle onToggleChange={(value) => setUseElo(value)} />
          <Text style={{ marginLeft: 12 }} color={colors.gray1}>
            Use ELO Rating for seeding
          </Text>
        </div>
        {useElo && (
          <AnimatedMountView
            styles={{
              display: "flex",
              flexDirection: "row",
              marginTop: -2,
              marginLeft: 8,
              alignItems: "center",
            }}
            mountDirection="x"
            mountInitialOffset={-16}
          >
            <Text style={{ marginLeft: 24 }} color={colors.gray1}>
              Default ELO Rating:
            </Text>
            <TextInput
              thin
              icon="rating"
              containerStyles={{ width: 96, marginLeft: 12 }}
              placeholderText={"Ex. 1290"}
            />
          </AnimatedMountView>
        )}
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
    marginBottom: 16,
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
