import { GroupName, Team } from './team.interface';
import { Standing } from './standing.interface';

export interface Group {
  id: number;
  name: GroupName;
  teams: Team[];
  standings?: Standing[];
}
