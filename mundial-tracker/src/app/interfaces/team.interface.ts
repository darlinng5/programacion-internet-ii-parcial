export type GroupName = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L';

export interface Team {
  id: number;
  name: string;
  code: string;
  group: GroupName;
  confederation: string;
}

export interface CreateTeamDto {
  name: string;
  code: string;
  group: GroupName;
  confederation: string;
}

export interface UpdateTeamDto extends Partial<CreateTeamDto> {}
