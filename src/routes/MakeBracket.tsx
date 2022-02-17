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
import { useDispatch } from "react-redux";
import usePrevious from "../hooks/usePrevious";
import reorder from "../util/reorder";
import { convertListToTree, serializeTree } from "../components/bracket/Tree";
import { createBracket } from "../store/actions/BracketActions";
import useKeyPress from "../hooks/useKeyPress";
import colors from "../constants/Colors";
import { useHistory } from "react-router";

type TeamItem = {
  id: string;
  content: Team;
};

const convertTeamItemsToTeams = (items: TeamItem[]): Team[] => {
  const teams: Team[] = [];
  items.forEach((item) => {
    teams.push(item.content);
  });
  return teams;
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
  const [newRating, setNewRating] = useState<string>("");
  const [defaultRating, setDefaultRating] = useState<string>("");
  const lastDefaultRating = usePrevious(defaultRating);
  const dispatch = useDispatch();
  const navigation = useHistory();

  const inputRef = createRef<HTMLElement>();
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  const [useElo, setUseElo] = useState(false);
  const enterPressed = useKeyPress("Enter");

  const makeBracket = () => {
    if (useElo) {
      teams.sort((a, b) =>
        a.content.elo! < b.content.elo!
          ? -1
          : a.content.elo! > b.content.elo!
          ? 1
          : 0
      );
    }
    const tree = convertListToTree(convertTeamItemsToTeams(teams));
    dispatch(createBracket("0", serializeTree(tree)));
    navigation.push("/view/0");
  };

  const newTeamExists = useCallback(() => {
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].content.name === newTeam) return true;
    }
    return false;
  }, [teams, newTeam]);

  const addTeam = useCallback(() => {
    if (newTeam.length > 0 && !newTeamExists()) {
      teams.push({
        id: `${teams.length}`,
        content: {
          name: newTeam,
          color: generateRandomColor(),
          elo: Number(newRating) || undefined,
        },
      });
      setNewRating(defaultRating);
      setNewTeam("");
      forceUpdate();
    }
  }, [newTeam, teams, newRating, forceUpdate, defaultRating, newTeamExists]);

  useEffect(() => {
    inputRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setNewRating(defaultRating);
  }, [defaultRating]);

  useEffect(() => {
    if (enterPressed) addTeam();
  }, [enterPressed, addTeam]);

  useEffect(() => {
    if (!useElo) {
      const newItems: TeamItem[] = [];
      teams.forEach((team) => {
        let t = { ...team, content: { ...team.content, elo: undefined } };
        newItems.push(t);
      });
      setTeams(newItems);
      forceUpdate();
      setNewRating("");
      setDefaultRating("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useElo]);

  useEffect(() => {
    if (useElo) {
      const newItems: TeamItem[] = [];
      teams.forEach((team) => {
        let newElo: number | undefined =
          team.content.elo || Number(defaultRating);
        if (`${team.content.elo}` === lastDefaultRating) {
          newElo = Number(defaultRating);
          if (newElo === 0) newElo = undefined;
        }
        let t = {
          ...team,
          content: {
            ...team.content,
            elo: newElo,
          },
        };
        newItems.push(t);
      });
      setTeams(newItems);
      forceUpdate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultRating]);

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
    newItems[index] = {
      ...newItems[index],
      content: { ...newItems[index].content, color: newColor },
    };
    setTeams(newItems);
    forceUpdate();
  };

  return (
    <AnimatedMountView styles={styles.page}>
      <div style={styles.header}>
        <Text weight="medium" fontSize={24}>
          Create a New Bracket
        </Text>
      </div>
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
              inputType="number"
              placeholderText="Rating"
              onChangeText={setNewRating}
              value={newRating}
            />
          </AnimatedMountView>
        )}
        <div style={styles.topInputButtons}>
          <Button
            text="Add"
            disabled={
              useElo
                ? newTeam.length === 0 || newRating?.length === 0
                : newTeam.length === 0
            }
            onClick={addTeam}
          />
          <div style={styles.spacer} />
          <Button
            text="Create"
            onClick={makeBracket}
            disabled={teams.length < 2}
          />
        </div>
      </div>
      <div style={styles.bottomInput}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Toggle onToggleChange={(value) => setUseElo(value)} />
          <Text style={{ marginLeft: 12 }} color={colors.gray1}>
            Use ELO Rating
          </Text>
        </div>
        {useElo && (
          <AnimatedMountView
            styles={styles.defaultEloContainer}
            mountDirection="x"
            mountInitialOffset={-16}
          >
            <Text style={{ marginLeft: 24 }} color={colors.gray1}>
              Default ELO Rating:
            </Text>
            <TextInput
              thin
              icon="rating"
              inputType="number"
              containerStyles={{ width: 96, marginLeft: 12 }}
              placeholderText={"ex. 400"}
              onChangeText={setDefaultRating}
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
                          name={item.content.name}
                          seed={index + 1}
                          elo={item.content.elo}
                          color={item.content.color}
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
  page: {
    marginTop: 32,
    // display: "flex",
    width: "60%",
  },
  topInput: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 16,
  },
  spacer: {
    width: 24,
  },
  header: {
    marginBottom: 32,
  },
  defaultEloContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: -2,
    marginLeft: 8,
    alignItems: "center",
  },
  bottomInput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 32,
  },
  topInputButtons: {
    display: "flex",
    marginLeft: 16,
    alignItems: "flex-end",
  },
};

export default MakeBracketRoute;
