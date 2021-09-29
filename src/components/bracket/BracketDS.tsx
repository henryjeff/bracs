// export interface Bracket {
//   [key: number]: Match;
// }

// interface Match {
//   id: number;
//   spotA: Team | undefined;
//   spotB: Team | undefined;
//   loser: Team | undefined;
//   winner: Team | undefined;
//   nextId: number | undefined;
// }

// interface Team {
//   name: string;
// }

// export const convertListToBracket = (list: string[]) => {
//   const teams: Team[] = convertListToTeams(list);
//   let bracket: Bracket = {};
//   let initialTeams = teams;
//   let matchId = 1;
//   while (initialTeams.length > 0) {
//     let teamA = teams.shift();
//     let teamB = teams.pop();

//     let match: Match = {
//       id: matchId,
//       spotA: teamA,
//       spotB: teamB,
//       loser: undefined,
//       winner: undefined,
//       nextId: undefined,
//     };
//     bracket[matchId] = match;
//     matchId += 1;
//   }
//   generateEmptyBracket(bracket, matchId);
//   // console.log(bracket);
// };

// const generateEmptyBracket = (bracket: Bracket, matchId: number) => {
//   const seen: number[] = [];
//   for (const id in bracket) {
//     const matchA = bracket[id].id;
//     const matchB = (bracket[Number(id) + 1] || { id: undefined }).id;

//     if (seen.includes(matchA) || seen.includes(matchB)) continue;
//     seen.push(matchA);
//     seen.push(matchB);

//     bracket[matchA].nextId = matchId;
//     bracket[matchB].nextId = matchId;

//     let match: Match = {
//       id: matchId,
//       spotA: undefined,
//       spotB: undefined,
//       loser: undefined,
//       winner: undefined,
//       nextId: undefined,
//     };

//     bracket[matchId] = match;
//     matchId += 1;
//   }

//   console.log(bracket);
// };

// const convertListToTeams = (list: string[]): Team[] => {
//   return list.map((teamName) => {
//     return {
//       name: teamName,
//     };
//   });
// };

export default {};
