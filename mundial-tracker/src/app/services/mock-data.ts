import { Team } from '../interfaces/team.interface';
import { Group } from '../interfaces/group.interface';
import { Match } from '../interfaces/match.interface';
import { Standing } from '../interfaces/standing.interface';

// ─────────────────────────────────────────────
// EQUIPOS — Mundial 2026 (48 equipos, 12 grupos)
// ─────────────────────────────────────────────
export const MOCK_TEAMS: Team[] = [
  // Grupo A
  { id: 1,  name: 'México',         code: 'MEX', group: 'A', confederation: 'CONCACAF' },
  { id: 2,  name: 'Ecuador',        code: 'ECU', group: 'A', confederation: 'CONMEBOL' },
  { id: 3,  name: 'Nigeria',        code: 'NGA', group: 'A', confederation: 'CAF' },
  { id: 4,  name: 'Azerbaiyán',     code: 'AZE', group: 'A', confederation: 'UEFA' },
  // Grupo B
  { id: 5,  name: 'Francia',        code: 'FRA', group: 'B', confederation: 'UEFA' },
  { id: 6,  name: 'Argentina',      code: 'ARG', group: 'B', confederation: 'CONMEBOL' },
  { id: 7,  name: 'Marruecos',      code: 'MAR', group: 'B', confederation: 'CAF' },
  { id: 8,  name: 'Arabia Saudita', code: 'KSA', group: 'B', confederation: 'AFC' },
  // Grupo C
  { id: 9,  name: 'Brasil',         code: 'BRA', group: 'C', confederation: 'CONMEBOL' },
  { id: 10, name: 'Alemania',       code: 'GER', group: 'C', confederation: 'UEFA' },
  { id: 11, name: 'Japón',          code: 'JPN', group: 'C', confederation: 'AFC' },
  { id: 12, name: 'Suiza',          code: 'SUI', group: 'C', confederation: 'UEFA' },
  // Grupo D
  { id: 13, name: 'España',         code: 'ESP', group: 'D', confederation: 'UEFA' },
  { id: 14, name: 'Colombia',       code: 'COL', group: 'D', confederation: 'CONMEBOL' },
  { id: 15, name: 'Senegal',        code: 'SEN', group: 'D', confederation: 'CAF' },
  { id: 16, name: 'Corea del Sur',  code: 'KOR', group: 'D', confederation: 'AFC' },
  // Grupo E
  { id: 17, name: 'Inglaterra',     code: 'ENG', group: 'E', confederation: 'UEFA' },
  { id: 18, name: 'Portugal',       code: 'POR', group: 'E', confederation: 'UEFA' },
  { id: 19, name: 'Uruguay',        code: 'URU', group: 'E', confederation: 'CONMEBOL' },
  { id: 20, name: 'Ghana',          code: 'GHA', group: 'E', confederation: 'CAF' },
  // Grupo F
  { id: 21, name: 'Estados Unidos', code: 'USA', group: 'F', confederation: 'CONCACAF' },
  { id: 22, name: 'Países Bajos',   code: 'NED', group: 'F', confederation: 'UEFA' },
  { id: 23, name: 'Australia',      code: 'AUS', group: 'F', confederation: 'AFC' },
  { id: 24, name: 'Costa Rica',     code: 'CRC', group: 'F', confederation: 'CONCACAF' },
  // Grupo G
  { id: 25, name: 'Italia',         code: 'ITA', group: 'G', confederation: 'UEFA' },
  { id: 26, name: 'Chile',          code: 'CHI', group: 'G', confederation: 'CONMEBOL' },
  { id: 27, name: 'Irán',           code: 'IRN', group: 'G', confederation: 'AFC' },
  { id: 28, name: 'Escocia',        code: 'SCO', group: 'G', confederation: 'UEFA' },
  // Grupo H
  { id: 29, name: 'Bélgica',        code: 'BEL', group: 'H', confederation: 'UEFA' },
  { id: 30, name: 'Perú',           code: 'PER', group: 'H', confederation: 'CONMEBOL' },
  { id: 31, name: 'Camerún',        code: 'CMR', group: 'H', confederation: 'CAF' },
  { id: 32, name: 'Polonia',        code: 'POL', group: 'H', confederation: 'UEFA' },
  // Grupo I
  { id: 33, name: 'Croacia',        code: 'CRO', group: 'I', confederation: 'UEFA' },
  { id: 34, name: 'Bolivia',        code: 'BOL', group: 'I', confederation: 'CONMEBOL' },
  { id: 35, name: 'Egipto',         code: 'EGY', group: 'I', confederation: 'CAF' },
  { id: 36, name: 'Grecia',         code: 'GRE', group: 'I', confederation: 'UEFA' },
  // Grupo J
  { id: 37, name: 'Dinamarca',      code: 'DEN', group: 'J', confederation: 'UEFA' },
  { id: 38, name: 'Venezuela',      code: 'VEN', group: 'J', confederation: 'CONMEBOL' },
  { id: 39, name: 'Argelia',        code: 'ALG', group: 'J', confederation: 'CAF' },
  { id: 40, name: 'Indonesia',      code: 'IDN', group: 'J', confederation: 'AFC' },
  // Grupo K
  { id: 41, name: 'Austria',        code: 'AUT', group: 'K', confederation: 'UEFA' },
  { id: 42, name: 'Paraguay',       code: 'PAR', group: 'K', confederation: 'CONMEBOL' },
  { id: 43, name: 'Turquía',        code: 'TUR', group: 'K', confederation: 'UEFA' },
  { id: 44, name: 'Nueva Zelanda',  code: 'NZL', group: 'K', confederation: 'OFC' },
  // Grupo L
  { id: 45, name: 'Canadá',         code: 'CAN', group: 'L', confederation: 'CONCACAF' },
  { id: 46, name: 'Honduras',       code: 'HON', group: 'L', confederation: 'CONCACAF' },
  { id: 47, name: 'Qatar',          code: 'QAT', group: 'L', confederation: 'AFC' },
  { id: 48, name: 'Eslovenia',      code: 'SVN', group: 'L', confederation: 'UEFA' },
];

// ─────────────────────────────────────────────
// GRUPOS
// ─────────────────────────────────────────────
const groupNames: Array<{ id: number; name: 'A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'|'I'|'J'|'K'|'L' }> = [
  { id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' },
  { id: 4, name: 'D' }, { id: 5, name: 'E' }, { id: 6, name: 'F' },
  { id: 7, name: 'G' }, { id: 8, name: 'H' }, { id: 9, name: 'I' },
  { id: 10, name: 'J' }, { id: 11, name: 'K' }, { id: 12, name: 'L' },
];

export const MOCK_GROUPS: Group[] = groupNames.map(g => ({
  id: g.id,
  name: g.name,
  teams: MOCK_TEAMS.filter(t => t.group === g.name),
}));

// ─────────────────────────────────────────────
// PARTIDOS — fase de grupos (muestra)
// ─────────────────────────────────────────────
const t = (id: number): Team => MOCK_TEAMS.find(team => team.id === id)!;

export const MOCK_MATCHES: Match[] = [
  // Grupo A
  { id: 1,  date: '2026-06-11', time: '18:00', venue: 'Estadio Azteca',  city: 'Ciudad de México', homeTeam: t(1),  awayTeam: t(2),  homeScore: 2, awayScore: 1, group: 'A', stage: 'group', status: 'finished' },
  { id: 2,  date: '2026-06-11', time: '21:00', venue: 'Estadio Azteca',  city: 'Ciudad de México', homeTeam: t(3),  awayTeam: t(4),  homeScore: 1, awayScore: 0, group: 'A', stage: 'group', status: 'finished' },
  { id: 3,  date: '2026-06-15', time: '18:00', venue: 'Estadio Azteca',  city: 'Ciudad de México', homeTeam: t(1),  awayTeam: t(3),  homeScore: 1, awayScore: 1, group: 'A', stage: 'group', status: 'finished' },
  { id: 4,  date: '2026-06-15', time: '21:00', venue: 'Estadio Azteca',  city: 'Ciudad de México', homeTeam: t(2),  awayTeam: t(4),  homeScore: 3, awayScore: 0, group: 'A', stage: 'group', status: 'finished' },
  { id: 5,  date: '2026-06-19', time: '21:00', venue: 'Estadio Azteca',  city: 'Ciudad de México', homeTeam: t(1),  awayTeam: t(4),  homeScore: null, awayScore: null, group: 'A', stage: 'group', status: 'scheduled' },
  { id: 6,  date: '2026-06-19', time: '21:00', venue: 'Estadio Azteca',  city: 'Ciudad de México', homeTeam: t(2),  awayTeam: t(3),  homeScore: null, awayScore: null, group: 'A', stage: 'group', status: 'scheduled' },
  // Grupo B
  { id: 7,  date: '2026-06-12', time: '15:00', venue: 'MetLife Stadium', city: 'Nueva York',       homeTeam: t(5),  awayTeam: t(6),  homeScore: 1, awayScore: 2, group: 'B', stage: 'group', status: 'finished' },
  { id: 8,  date: '2026-06-12', time: '18:00', venue: 'MetLife Stadium', city: 'Nueva York',       homeTeam: t(7),  awayTeam: t(8),  homeScore: 2, awayScore: 0, group: 'B', stage: 'group', status: 'finished' },
  { id: 9,  date: '2026-06-16', time: '15:00', venue: 'MetLife Stadium', city: 'Nueva York',       homeTeam: t(5),  awayTeam: t(7),  homeScore: null, awayScore: null, group: 'B', stage: 'group', status: 'scheduled' },
  { id: 10, date: '2026-06-16', time: '18:00', venue: 'MetLife Stadium', city: 'Nueva York',       homeTeam: t(6),  awayTeam: t(8),  homeScore: null, awayScore: null, group: 'B', stage: 'group', status: 'scheduled' },
  { id: 11, date: '2026-06-20', time: '21:00', venue: 'MetLife Stadium', city: 'Nueva York',       homeTeam: t(5),  awayTeam: t(8),  homeScore: null, awayScore: null, group: 'B', stage: 'group', status: 'scheduled' },
  { id: 12, date: '2026-06-20', time: '21:00', venue: 'MetLife Stadium', city: 'Nueva York',       homeTeam: t(6),  awayTeam: t(7),  homeScore: null, awayScore: null, group: 'B', stage: 'group', status: 'scheduled' },
  // Grupo C
  { id: 13, date: '2026-06-12', time: '21:00', venue: 'SoFi Stadium',    city: 'Los Ángeles',      homeTeam: t(9),  awayTeam: t(10), homeScore: 2, awayScore: 2, group: 'C', stage: 'group', status: 'finished' },
  { id: 14, date: '2026-06-13', time: '15:00', venue: 'SoFi Stadium',    city: 'Los Ángeles',      homeTeam: t(11), awayTeam: t(12), homeScore: 1, awayScore: 1, group: 'C', stage: 'group', status: 'finished' },
  { id: 15, date: '2026-06-17', time: '18:00', venue: 'SoFi Stadium',    city: 'Los Ángeles',      homeTeam: t(9),  awayTeam: t(11), homeScore: null, awayScore: null, group: 'C', stage: 'group', status: 'scheduled' },
  { id: 16, date: '2026-06-17', time: '21:00', venue: 'SoFi Stadium',    city: 'Los Ángeles',      homeTeam: t(10), awayTeam: t(12), homeScore: null, awayScore: null, group: 'C', stage: 'group', status: 'scheduled' },
  { id: 17, date: '2026-06-21', time: '21:00', venue: 'SoFi Stadium',    city: 'Los Ángeles',      homeTeam: t(9),  awayTeam: t(12), homeScore: null, awayScore: null, group: 'C', stage: 'group', status: 'scheduled' },
  { id: 18, date: '2026-06-21', time: '21:00', venue: 'SoFi Stadium',    city: 'Los Ángeles',      homeTeam: t(10), awayTeam: t(11), homeScore: null, awayScore: null, group: 'C', stage: 'group', status: 'scheduled' },
  // Grupo D
  { id: 19, date: '2026-06-13', time: '18:00', venue: 'AT&T Stadium',    city: 'Dallas',           homeTeam: t(13), awayTeam: t(14), homeScore: null, awayScore: null, group: 'D', stage: 'group', status: 'scheduled' },
  { id: 20, date: '2026-06-13', time: '21:00', venue: 'AT&T Stadium',    city: 'Dallas',           homeTeam: t(15), awayTeam: t(16), homeScore: null, awayScore: null, group: 'D', stage: 'group', status: 'scheduled' },
  { id: 21, date: '2026-06-17', time: '15:00', venue: 'AT&T Stadium',    city: 'Dallas',           homeTeam: t(13), awayTeam: t(15), homeScore: null, awayScore: null, group: 'D', stage: 'group', status: 'scheduled' },
  { id: 22, date: '2026-06-17', time: '18:00', venue: 'AT&T Stadium',    city: 'Dallas',           homeTeam: t(14), awayTeam: t(16), homeScore: null, awayScore: null, group: 'D', stage: 'group', status: 'scheduled' },
  { id: 23, date: '2026-06-21', time: '21:00', venue: 'AT&T Stadium',    city: 'Dallas',           homeTeam: t(13), awayTeam: t(16), homeScore: null, awayScore: null, group: 'D', stage: 'group', status: 'scheduled' },
  { id: 24, date: '2026-06-21', time: '21:00', venue: 'AT&T Stadium',    city: 'Dallas',           homeTeam: t(14), awayTeam: t(15), homeScore: null, awayScore: null, group: 'D', stage: 'group', status: 'scheduled' },
];

// ─────────────────────────────────────────────
// TABLAS DE POSICIONES (calculadas para grupos con partidos terminados)
// ─────────────────────────────────────────────
export const MOCK_STANDINGS: Standing[] = [
  // Grupo A
  { team: t(1), group: 'A', played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 3, goalsAgainst: 2, goalDifference: 1,  points: 4 },
  { team: t(2), group: 'A', played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 4, goalsAgainst: 2, goalDifference: 2,  points: 3 },
  { team: t(3), group: 'A', played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 2, goalsAgainst: 2, goalDifference: 0,  points: 4 },
  { team: t(4), group: 'A', played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 0, goalsAgainst: 4, goalDifference: -4, points: 0 },
  // Grupo B
  { team: t(5), group: 'B', played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 2, goalDifference: -1, points: 0 },
  { team: t(6), group: 'B', played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 2, goalsAgainst: 1, goalDifference: 1,  points: 3 },
  { team: t(7), group: 'B', played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 2, goalsAgainst: 0, goalDifference: 2,  points: 3 },
  { team: t(8), group: 'B', played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 0, goalsAgainst: 2, goalDifference: -2, points: 0 },
  // Grupo C
  { team: t(9),  group: 'C', played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 2, goalsAgainst: 2, goalDifference: 0, points: 1 },
  { team: t(10), group: 'C', played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 2, goalsAgainst: 2, goalDifference: 0, points: 1 },
  { team: t(11), group: 'C', played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, goalDifference: 0, points: 1 },
  { team: t(12), group: 'C', played: 1, won: 0, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 1, goalDifference: 0, points: 1 },
];
