import { Team, GroupName } from './team.interface';

export interface Standing {
  team: Team;
  group: GroupName;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}
