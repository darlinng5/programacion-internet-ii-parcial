import { Team } from '../interfaces/team.interface';
import { Group } from '../interfaces/group.interface';
import { Match } from '../interfaces/match.interface';
import { Standing } from '../interfaces/standing.interface';

// ─────────────────────────────────────────────
// EQUIPOS — Mundial 2026 (48 equipos, 12 grupos)
// ─────────────────────────────────────────────
export const MOCK_TEAMS: Team[] = [
  // Grupo A
  { id: 1,  name: 'México',                          code: 'MEX', group: 'A', confederation: 'CONCACAF' },
  { id: 2,  name: 'Sudáfrica',                       code: 'RSA', group: 'A', confederation: 'CAF' },
  { id: 3,  name: 'Corea del Sur',                   code: 'KOR', group: 'A', confederation: 'AFC' },
  { id: 4,  name: 'Chequia',                         code: 'CZE', group: 'A', confederation: 'UEFA' },
  // Grupo B
  { id: 5,  name: 'Canadá',                          code: 'CAN', group: 'B', confederation: 'CONCACAF' },
  { id: 6,  name: 'Bosnia y Herzegovina',            code: 'BIH', group: 'B', confederation: 'UEFA' },
  { id: 7,  name: 'Qatar',                           code: 'QAT', group: 'B', confederation: 'AFC' },
  { id: 8,  name: 'Suiza',                           code: 'SUI', group: 'B', confederation: 'UEFA' },
  // Grupo C
  { id: 9,  name: 'Brasil',                          code: 'BRA', group: 'C', confederation: 'CONMEBOL' },
  { id: 10, name: 'Marruecos',                       code: 'MAR', group: 'C', confederation: 'CAF' },
  { id: 11, name: 'Haití',                           code: 'HAI', group: 'C', confederation: 'CONCACAF' },
  { id: 12, name: 'Escocia',                         code: 'SCO', group: 'C', confederation: 'UEFA' },
  // Grupo D
  { id: 13, name: 'Estados Unidos',                  code: 'USA', group: 'D', confederation: 'CONCACAF' },
  { id: 14, name: 'Paraguay',                        code: 'PAR', group: 'D', confederation: 'CONMEBOL' },
  { id: 15, name: 'Australia',                       code: 'AUS', group: 'D', confederation: 'AFC' },
  { id: 16, name: 'Turquía',                         code: 'TUR', group: 'D', confederation: 'UEFA' },
  // Grupo E
  { id: 17, name: 'Alemania',                        code: 'GER', group: 'E', confederation: 'UEFA' },
  { id: 18, name: 'Curazao',                         code: 'CUW', group: 'E', confederation: 'CONCACAF' },
  { id: 19, name: 'Costa de Marfil',                 code: 'CIV', group: 'E', confederation: 'CAF' },
  { id: 20, name: 'Ecuador',                         code: 'ECU', group: 'E', confederation: 'CONMEBOL' },
  // Grupo F
  { id: 21, name: 'Países Bajos',                    code: 'NED', group: 'F', confederation: 'UEFA' },
  { id: 22, name: 'Japón',                           code: 'JPN', group: 'F', confederation: 'AFC' },
  { id: 23, name: 'Suecia',                          code: 'SWE', group: 'F', confederation: 'UEFA' },
  { id: 24, name: 'Túnez',                           code: 'TUN', group: 'F', confederation: 'CAF' },
  // Grupo G
  { id: 25, name: 'Bélgica',                         code: 'BEL', group: 'G', confederation: 'UEFA' },
  { id: 26, name: 'Egipto',                          code: 'EGY', group: 'G', confederation: 'CAF' },
  { id: 27, name: 'Irán',                            code: 'IRN', group: 'G', confederation: 'AFC' },
  { id: 28, name: 'Nueva Zelanda',                   code: 'NZL', group: 'G', confederation: 'OFC' },
  // Grupo H
  { id: 29, name: 'España',                          code: 'ESP', group: 'H', confederation: 'UEFA' },
  { id: 30, name: 'Cabo Verde',                      code: 'CPV', group: 'H', confederation: 'CAF' },
  { id: 31, name: 'Arabia Saudita',                  code: 'KSA', group: 'H', confederation: 'AFC' },
  { id: 32, name: 'Uruguay',                         code: 'URU', group: 'H', confederation: 'CONMEBOL' },
  // Grupo I
  { id: 33, name: 'Francia',                         code: 'FRA', group: 'I', confederation: 'UEFA' },
  { id: 34, name: 'Senegal',                         code: 'SEN', group: 'I', confederation: 'CAF' },
  { id: 35, name: 'Irak',                            code: 'IRQ', group: 'I', confederation: 'AFC' },
  { id: 36, name: 'Noruega',                         code: 'NOR', group: 'I', confederation: 'UEFA' },
  // Grupo J
  { id: 37, name: 'Argentina',                       code: 'ARG', group: 'J', confederation: 'CONMEBOL' },
  { id: 38, name: 'Argelia',                         code: 'ALG', group: 'J', confederation: 'CAF' },
  { id: 39, name: 'Austria',                         code: 'AUT', group: 'J', confederation: 'UEFA' },
  { id: 40, name: 'Jordania',                        code: 'JOR', group: 'J', confederation: 'AFC' },
  // Grupo K
  { id: 41, name: 'Portugal',                        code: 'POR', group: 'K', confederation: 'UEFA' },
  { id: 42, name: 'Rep. Democrática del Congo',      code: 'COD', group: 'K', confederation: 'CAF' },
  { id: 43, name: 'Uzbekistán',                      code: 'UZB', group: 'K', confederation: 'AFC' },
  { id: 44, name: 'Colombia',                        code: 'COL', group: 'K', confederation: 'CONMEBOL' },
  // Grupo L
  { id: 45, name: 'Inglaterra',                      code: 'ENG', group: 'L', confederation: 'UEFA' },
  { id: 46, name: 'Croacia',                         code: 'CRO', group: 'L', confederation: 'UEFA' },
  { id: 47, name: 'Ghana',                           code: 'GHA', group: 'L', confederation: 'CAF' },
  { id: 48, name: 'Panamá',                          code: 'PAN', group: 'L', confederation: 'CONCACAF' },
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
  { id: 1,  date: '2026-06-11', time: '18:00', venue: 'Estadio Azteca',     city: 'Ciudad de México', homeTeam: t(1),  awayTeam: t(2),  homeScore: null, awayScore: null, group: 'A', stage: 'group', status: 'scheduled' },
  { id: 2,  date: '2026-06-11', time: '21:00', venue: 'Estadio Azteca',     city: 'Ciudad de México', homeTeam: t(3),  awayTeam: t(4),  homeScore: null, awayScore: null, group: 'A', stage: 'group', status: 'scheduled' },
  { id: 3,  date: '2026-06-15', time: '18:00', venue: 'Estadio Azteca',     city: 'Ciudad de México', homeTeam: t(1),  awayTeam: t(3),  homeScore: null, awayScore: null, group: 'A', stage: 'group', status: 'scheduled' },
  { id: 4,  date: '2026-06-15', time: '21:00', venue: 'Estadio Azteca',     city: 'Ciudad de México', homeTeam: t(2),  awayTeam: t(4),  homeScore: null, awayScore: null, group: 'A', stage: 'group', status: 'scheduled' },
  { id: 5,  date: '2026-06-19', time: '21:00', venue: 'Estadio Azteca',     city: 'Ciudad de México', homeTeam: t(1),  awayTeam: t(4),  homeScore: null, awayScore: null, group: 'A', stage: 'group', status: 'scheduled' },
  { id: 6,  date: '2026-06-19', time: '21:00', venue: 'Estadio Azteca',     city: 'Ciudad de México', homeTeam: t(2),  awayTeam: t(3),  homeScore: null, awayScore: null, group: 'A', stage: 'group', status: 'scheduled' },
  // Grupo B
  { id: 7,  date: '2026-06-12', time: '15:00', venue: 'MetLife Stadium',    city: 'Nueva York',       homeTeam: t(5),  awayTeam: t(6),  homeScore: null, awayScore: null, group: 'B', stage: 'group', status: 'scheduled' },
  { id: 8,  date: '2026-06-12', time: '18:00', venue: 'MetLife Stadium',    city: 'Nueva York',       homeTeam: t(7),  awayTeam: t(8),  homeScore: null, awayScore: null, group: 'B', stage: 'group', status: 'scheduled' },
  { id: 9,  date: '2026-06-16', time: '15:00', venue: 'MetLife Stadium',    city: 'Nueva York',       homeTeam: t(5),  awayTeam: t(7),  homeScore: null, awayScore: null, group: 'B', stage: 'group', status: 'scheduled' },
  { id: 10, date: '2026-06-16', time: '18:00', venue: 'MetLife Stadium',    city: 'Nueva York',       homeTeam: t(6),  awayTeam: t(8),  homeScore: null, awayScore: null, group: 'B', stage: 'group', status: 'scheduled' },
  { id: 11, date: '2026-06-20', time: '21:00', venue: 'MetLife Stadium',    city: 'Nueva York',       homeTeam: t(5),  awayTeam: t(8),  homeScore: null, awayScore: null, group: 'B', stage: 'group', status: 'scheduled' },
  { id: 12, date: '2026-06-20', time: '21:00', venue: 'MetLife Stadium',    city: 'Nueva York',       homeTeam: t(6),  awayTeam: t(7),  homeScore: null, awayScore: null, group: 'B', stage: 'group', status: 'scheduled' },
  // Grupo C
  { id: 13, date: '2026-06-12', time: '21:00', venue: 'SoFi Stadium',       city: 'Los Ángeles',      homeTeam: t(9),  awayTeam: t(10), homeScore: null, awayScore: null, group: 'C', stage: 'group', status: 'scheduled' },
  { id: 14, date: '2026-06-13', time: '15:00', venue: 'SoFi Stadium',       city: 'Los Ángeles',      homeTeam: t(11), awayTeam: t(12), homeScore: null, awayScore: null, group: 'C', stage: 'group', status: 'scheduled' },
  { id: 15, date: '2026-06-17', time: '18:00', venue: 'SoFi Stadium',       city: 'Los Ángeles',      homeTeam: t(9),  awayTeam: t(11), homeScore: null, awayScore: null, group: 'C', stage: 'group', status: 'scheduled' },
  { id: 16, date: '2026-06-17', time: '21:00', venue: 'SoFi Stadium',       city: 'Los Ángeles',      homeTeam: t(10), awayTeam: t(12), homeScore: null, awayScore: null, group: 'C', stage: 'group', status: 'scheduled' },
  { id: 17, date: '2026-06-21', time: '21:00', venue: 'SoFi Stadium',       city: 'Los Ángeles',      homeTeam: t(9),  awayTeam: t(12), homeScore: null, awayScore: null, group: 'C', stage: 'group', status: 'scheduled' },
  { id: 18, date: '2026-06-21', time: '21:00', venue: 'SoFi Stadium',       city: 'Los Ángeles',      homeTeam: t(10), awayTeam: t(11), homeScore: null, awayScore: null, group: 'C', stage: 'group', status: 'scheduled' },
  // Grupo D
  { id: 19, date: '2026-06-13', time: '18:00', venue: 'AT&T Stadium',       city: 'Dallas',           homeTeam: t(13), awayTeam: t(14), homeScore: null, awayScore: null, group: 'D', stage: 'group', status: 'scheduled' },
  { id: 20, date: '2026-06-13', time: '21:00', venue: 'AT&T Stadium',       city: 'Dallas',           homeTeam: t(15), awayTeam: t(16), homeScore: null, awayScore: null, group: 'D', stage: 'group', status: 'scheduled' },
  { id: 21, date: '2026-06-17', time: '15:00', venue: 'AT&T Stadium',       city: 'Dallas',           homeTeam: t(13), awayTeam: t(15), homeScore: null, awayScore: null, group: 'D', stage: 'group', status: 'scheduled' },
  { id: 22, date: '2026-06-17', time: '18:00', venue: 'AT&T Stadium',       city: 'Dallas',           homeTeam: t(14), awayTeam: t(16), homeScore: null, awayScore: null, group: 'D', stage: 'group', status: 'scheduled' },
  { id: 23, date: '2026-06-21', time: '21:00', venue: 'AT&T Stadium',       city: 'Dallas',           homeTeam: t(13), awayTeam: t(16), homeScore: null, awayScore: null, group: 'D', stage: 'group', status: 'scheduled' },
  { id: 24, date: '2026-06-21', time: '21:00', venue: 'AT&T Stadium',       city: 'Dallas',           homeTeam: t(14), awayTeam: t(15), homeScore: null, awayScore: null, group: 'D', stage: 'group', status: 'scheduled' },
  // Grupo E
  { id: 25, date: '2026-06-13', time: '15:00', venue: 'Mercedes-Benz Stadium', city: 'Atlanta',       homeTeam: t(17), awayTeam: t(18), homeScore: null, awayScore: null, group: 'E', stage: 'group', status: 'scheduled' },
  { id: 26, date: '2026-06-13', time: '18:00', venue: 'Mercedes-Benz Stadium', city: 'Atlanta',       homeTeam: t(19), awayTeam: t(20), homeScore: null, awayScore: null, group: 'E', stage: 'group', status: 'scheduled' },
  { id: 27, date: '2026-06-17', time: '15:00', venue: 'Mercedes-Benz Stadium', city: 'Atlanta',       homeTeam: t(17), awayTeam: t(19), homeScore: null, awayScore: null, group: 'E', stage: 'group', status: 'scheduled' },
  { id: 28, date: '2026-06-17', time: '18:00', venue: 'Mercedes-Benz Stadium', city: 'Atlanta',       homeTeam: t(18), awayTeam: t(20), homeScore: null, awayScore: null, group: 'E', stage: 'group', status: 'scheduled' },
  { id: 29, date: '2026-06-21', time: '21:00', venue: 'Mercedes-Benz Stadium', city: 'Atlanta',       homeTeam: t(17), awayTeam: t(20), homeScore: null, awayScore: null, group: 'E', stage: 'group', status: 'scheduled' },
  { id: 30, date: '2026-06-21', time: '21:00', venue: 'Mercedes-Benz Stadium', city: 'Atlanta',       homeTeam: t(18), awayTeam: t(19), homeScore: null, awayScore: null, group: 'E', stage: 'group', status: 'scheduled' },
  // Grupo F
  { id: 31, date: '2026-06-14', time: '15:00', venue: 'Levi\'s Stadium',    city: 'San Francisco',    homeTeam: t(21), awayTeam: t(22), homeScore: null, awayScore: null, group: 'F', stage: 'group', status: 'scheduled' },
  { id: 32, date: '2026-06-14', time: '18:00', venue: 'Levi\'s Stadium',    city: 'San Francisco',    homeTeam: t(23), awayTeam: t(24), homeScore: null, awayScore: null, group: 'F', stage: 'group', status: 'scheduled' },
  { id: 33, date: '2026-06-18', time: '15:00', venue: 'Levi\'s Stadium',    city: 'San Francisco',    homeTeam: t(21), awayTeam: t(23), homeScore: null, awayScore: null, group: 'F', stage: 'group', status: 'scheduled' },
  { id: 34, date: '2026-06-18', time: '18:00', venue: 'Levi\'s Stadium',    city: 'San Francisco',    homeTeam: t(22), awayTeam: t(24), homeScore: null, awayScore: null, group: 'F', stage: 'group', status: 'scheduled' },
  { id: 35, date: '2026-06-22', time: '21:00', venue: 'Levi\'s Stadium',    city: 'San Francisco',    homeTeam: t(21), awayTeam: t(24), homeScore: null, awayScore: null, group: 'F', stage: 'group', status: 'scheduled' },
  { id: 36, date: '2026-06-22', time: '21:00', venue: 'Levi\'s Stadium',    city: 'San Francisco',    homeTeam: t(22), awayTeam: t(23), homeScore: null, awayScore: null, group: 'F', stage: 'group', status: 'scheduled' },
  // Grupo G
  { id: 37, date: '2026-06-14', time: '15:00', venue: 'Arrowhead Stadium',  city: 'Kansas City',      homeTeam: t(25), awayTeam: t(26), homeScore: null, awayScore: null, group: 'G', stage: 'group', status: 'scheduled' },
  { id: 38, date: '2026-06-14', time: '18:00', venue: 'Arrowhead Stadium',  city: 'Kansas City',      homeTeam: t(27), awayTeam: t(28), homeScore: null, awayScore: null, group: 'G', stage: 'group', status: 'scheduled' },
  { id: 39, date: '2026-06-18', time: '15:00', venue: 'Arrowhead Stadium',  city: 'Kansas City',      homeTeam: t(25), awayTeam: t(27), homeScore: null, awayScore: null, group: 'G', stage: 'group', status: 'scheduled' },
  { id: 40, date: '2026-06-18', time: '18:00', venue: 'Arrowhead Stadium',  city: 'Kansas City',      homeTeam: t(26), awayTeam: t(28), homeScore: null, awayScore: null, group: 'G', stage: 'group', status: 'scheduled' },
  { id: 41, date: '2026-06-22', time: '21:00', venue: 'Arrowhead Stadium',  city: 'Kansas City',      homeTeam: t(25), awayTeam: t(28), homeScore: null, awayScore: null, group: 'G', stage: 'group', status: 'scheduled' },
  { id: 42, date: '2026-06-22', time: '21:00', venue: 'Arrowhead Stadium',  city: 'Kansas City',      homeTeam: t(26), awayTeam: t(27), homeScore: null, awayScore: null, group: 'G', stage: 'group', status: 'scheduled' },
  // Grupo H
  { id: 43, date: '2026-06-14', time: '21:00', venue: 'Estadio Akron',      city: 'Guadalajara',      homeTeam: t(29), awayTeam: t(30), homeScore: null, awayScore: null, group: 'H', stage: 'group', status: 'scheduled' },
  { id: 44, date: '2026-06-15', time: '15:00', venue: 'Estadio Akron',      city: 'Guadalajara',      homeTeam: t(31), awayTeam: t(32), homeScore: null, awayScore: null, group: 'H', stage: 'group', status: 'scheduled' },
  { id: 45, date: '2026-06-19', time: '15:00', venue: 'Estadio Akron',      city: 'Guadalajara',      homeTeam: t(29), awayTeam: t(31), homeScore: null, awayScore: null, group: 'H', stage: 'group', status: 'scheduled' },
  { id: 46, date: '2026-06-19', time: '18:00', venue: 'Estadio Akron',      city: 'Guadalajara',      homeTeam: t(30), awayTeam: t(32), homeScore: null, awayScore: null, group: 'H', stage: 'group', status: 'scheduled' },
  { id: 47, date: '2026-06-23', time: '21:00', venue: 'Estadio Akron',      city: 'Guadalajara',      homeTeam: t(29), awayTeam: t(32), homeScore: null, awayScore: null, group: 'H', stage: 'group', status: 'scheduled' },
  { id: 48, date: '2026-06-23', time: '21:00', venue: 'Estadio Akron',      city: 'Guadalajara',      homeTeam: t(30), awayTeam: t(31), homeScore: null, awayScore: null, group: 'H', stage: 'group', status: 'scheduled' },
  // Grupo I
  { id: 49, date: '2026-06-15', time: '15:00', venue: 'BC Place',           city: 'Vancouver',        homeTeam: t(33), awayTeam: t(34), homeScore: null, awayScore: null, group: 'I', stage: 'group', status: 'scheduled' },
  { id: 50, date: '2026-06-15', time: '18:00', venue: 'BC Place',           city: 'Vancouver',        homeTeam: t(35), awayTeam: t(36), homeScore: null, awayScore: null, group: 'I', stage: 'group', status: 'scheduled' },
  { id: 51, date: '2026-06-19', time: '15:00', venue: 'BC Place',           city: 'Vancouver',        homeTeam: t(33), awayTeam: t(35), homeScore: null, awayScore: null, group: 'I', stage: 'group', status: 'scheduled' },
  { id: 52, date: '2026-06-19', time: '18:00', venue: 'BC Place',           city: 'Vancouver',        homeTeam: t(34), awayTeam: t(36), homeScore: null, awayScore: null, group: 'I', stage: 'group', status: 'scheduled' },
  { id: 53, date: '2026-06-23', time: '21:00', venue: 'BC Place',           city: 'Vancouver',        homeTeam: t(33), awayTeam: t(36), homeScore: null, awayScore: null, group: 'I', stage: 'group', status: 'scheduled' },
  { id: 54, date: '2026-06-23', time: '21:00', venue: 'BC Place',           city: 'Vancouver',        homeTeam: t(34), awayTeam: t(35), homeScore: null, awayScore: null, group: 'I', stage: 'group', status: 'scheduled' },
  // Grupo J
  { id: 55, date: '2026-06-15', time: '21:00', venue: 'Estadio BBVA',       city: 'Monterrey',        homeTeam: t(37), awayTeam: t(38), homeScore: null, awayScore: null, group: 'J', stage: 'group', status: 'scheduled' },
  { id: 56, date: '2026-06-16', time: '15:00', venue: 'Estadio BBVA',       city: 'Monterrey',        homeTeam: t(39), awayTeam: t(40), homeScore: null, awayScore: null, group: 'J', stage: 'group', status: 'scheduled' },
  { id: 57, date: '2026-06-20', time: '15:00', venue: 'Estadio BBVA',       city: 'Monterrey',        homeTeam: t(37), awayTeam: t(39), homeScore: null, awayScore: null, group: 'J', stage: 'group', status: 'scheduled' },
  { id: 58, date: '2026-06-20', time: '18:00', venue: 'Estadio BBVA',       city: 'Monterrey',        homeTeam: t(38), awayTeam: t(40), homeScore: null, awayScore: null, group: 'J', stage: 'group', status: 'scheduled' },
  { id: 59, date: '2026-06-24', time: '21:00', venue: 'Estadio BBVA',       city: 'Monterrey',        homeTeam: t(37), awayTeam: t(40), homeScore: null, awayScore: null, group: 'J', stage: 'group', status: 'scheduled' },
  { id: 60, date: '2026-06-24', time: '21:00', venue: 'Estadio BBVA',       city: 'Monterrey',        homeTeam: t(38), awayTeam: t(39), homeScore: null, awayScore: null, group: 'J', stage: 'group', status: 'scheduled' },
  // Grupo K
  { id: 61, date: '2026-06-16', time: '15:00', venue: 'BMO Field',          city: 'Toronto',          homeTeam: t(41), awayTeam: t(42), homeScore: null, awayScore: null, group: 'K', stage: 'group', status: 'scheduled' },
  { id: 62, date: '2026-06-16', time: '18:00', venue: 'BMO Field',          city: 'Toronto',          homeTeam: t(43), awayTeam: t(44), homeScore: null, awayScore: null, group: 'K', stage: 'group', status: 'scheduled' },
  { id: 63, date: '2026-06-20', time: '15:00', venue: 'BMO Field',          city: 'Toronto',          homeTeam: t(41), awayTeam: t(43), homeScore: null, awayScore: null, group: 'K', stage: 'group', status: 'scheduled' },
  { id: 64, date: '2026-06-20', time: '18:00', venue: 'BMO Field',          city: 'Toronto',          homeTeam: t(42), awayTeam: t(44), homeScore: null, awayScore: null, group: 'K', stage: 'group', status: 'scheduled' },
  { id: 65, date: '2026-06-24', time: '21:00', venue: 'BMO Field',          city: 'Toronto',          homeTeam: t(41), awayTeam: t(44), homeScore: null, awayScore: null, group: 'K', stage: 'group', status: 'scheduled' },
  { id: 66, date: '2026-06-24', time: '21:00', venue: 'BMO Field',          city: 'Toronto',          homeTeam: t(42), awayTeam: t(43), homeScore: null, awayScore: null, group: 'K', stage: 'group', status: 'scheduled' },
  // Grupo L
  { id: 67, date: '2026-06-16', time: '21:00', venue: 'Gillette Stadium',   city: 'Boston',           homeTeam: t(45), awayTeam: t(46), homeScore: null, awayScore: null, group: 'L', stage: 'group', status: 'scheduled' },
  { id: 68, date: '2026-06-17', time: '15:00', venue: 'Gillette Stadium',   city: 'Boston',           homeTeam: t(47), awayTeam: t(48), homeScore: null, awayScore: null, group: 'L', stage: 'group', status: 'scheduled' },
  { id: 69, date: '2026-06-21', time: '15:00', venue: 'Gillette Stadium',   city: 'Boston',           homeTeam: t(45), awayTeam: t(47), homeScore: null, awayScore: null, group: 'L', stage: 'group', status: 'scheduled' },
  { id: 70, date: '2026-06-21', time: '18:00', venue: 'Gillette Stadium',   city: 'Boston',           homeTeam: t(46), awayTeam: t(48), homeScore: null, awayScore: null, group: 'L', stage: 'group', status: 'scheduled' },
  { id: 71, date: '2026-06-25', time: '21:00', venue: 'Gillette Stadium',   city: 'Boston',           homeTeam: t(45), awayTeam: t(48), homeScore: null, awayScore: null, group: 'L', stage: 'group', status: 'scheduled' },
  { id: 72, date: '2026-06-25', time: '21:00', venue: 'Gillette Stadium',   city: 'Boston',           homeTeam: t(46), awayTeam: t(47), homeScore: null, awayScore: null, group: 'L', stage: 'group', status: 'scheduled' },
];

// ─────────────────────────────────────────────
// TABLAS DE POSICIONES — vacías al inicio del torneo
// ─────────────────────────────────────────────
export const MOCK_STANDINGS: Standing[] = MOCK_TEAMS.map(team => ({
  team,
  group: team.group,
  played: 0,
  won: 0,
  drawn: 0,
  lost: 0,
  goalsFor: 0,
  goalsAgainst: 0,
  goalDifference: 0,
  points: 0,
}));
