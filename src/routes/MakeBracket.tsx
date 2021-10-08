import { AnimatedMountView, Button, TextInput } from "../components/general";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import TeamPreview from "../components/view/TeamPreview";
import { useState, useCallback } from "react";
import { generateRandomColor } from "../util/randomColor";

type Item = {
  id: string;
  content: string;
  color: string;
};

const getItemStyle = (draggableStyle: any) => ({
  userSelect: "none",
  padding: 2 * 2,
  margin: `0 0 ${2}px 0`,
  ...draggableStyle,
});

const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const MakeBracketRoute: React.FC<{}> = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newTeam, setNewTeam] = useState<string>("");
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  const addTeam = useCallback(() => {
    items.push({
      id: `${items.length}`,
      content: newTeam,
      color: generateRandomColor(),
    });
    setNewTeam("");
    forceUpdate();
  }, [newTeam, items, forceUpdate]);

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const i = reorder(items, result.source.index, result.destination.index);
    setItems(i);
  };

  const onColorChange = (newColor: string, index: number) => {
    const newItems = items;
    newItems[index] = { ...newItems[index], color: newColor };
    setItems(newItems);
    forceUpdate();
  };

  return (
    <AnimatedMountView styles={{ width: "40%", marginTop: 32 }}>
      <div style={styles.topInput}>
        <TextInput
          icon="circleAdd"
          placeholderText="Enter a new team name"
          onChangeText={setNewTeam}
          value={newTeam}
        />
        <div style={styles.topInputButtons}>
          <Button
            text="Add"
            outline
            disabled={newTeam.length === 0}
            onClick={addTeam}
          />
          <div style={styles.spacer} />
          <Button text="Start" outline disabled />
        </div>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="ok">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
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
  },
};

export default MakeBracketRoute;
