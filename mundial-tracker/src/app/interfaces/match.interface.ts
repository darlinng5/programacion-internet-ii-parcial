import { Team, GroupName } from './team.interface';

export type MatchStage = 'group' | 'round-of-32' | 'round-of-16' | 'quarter-final' | 'semi-final' | 'third-place' | 'final';
export type MatchStatus = 'scheduled' | 'live' | 'finished' | 'postponed';

export interface Match {
  id: number;
  date: string;
  time: string;
  venue: string;
  city: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number | null;
  awayScore: number | null;
  group: GroupName | null;
  stage: MatchStage;
  status: MatchStatus;
}

export interface CreateMatchDto {
  date: string;
  time: string;
  venue: string;
  city: string;
  homeTeamId: number;
  awayTeamId: number;
  homeScore: number | null;
  awayScore: number | null;
  group: GroupName | null;
  stage: MatchStage;
  status: MatchStatus;
}

export interface UpdateMatchDto extends Partial<CreateMatchDto> {}
