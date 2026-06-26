# ⚽ Mundial Tracker 2026

**Proyecto académico — Programación para Internet II**

Aplicación frontend en **Angular 17** para llevar el registro del Mundial de Fútbol 2026. Permite gestionar equipos, grupos, partidos y tablas de posiciones. El frontend está **completamente funcional con datos mock** y listo para conectarse al backend cuando esté disponible.

---

## Tecnologías

| Tecnología | Versión |
|---|---|
| Angular | 17 |
| TypeScript | 5.x (modo estricto) |
| Angular Router | incluido |
| HttpClient | incluido |
| CSS puro | sin frameworks |

---

## Instalación y ejecución

```bash
# 1. Entrar a la carpeta del proyecto
cd mundial-tracker

# 2. Instalar dependencias
npm install

# 3. Correr en modo desarrollo
ng serve

# 4. Abrir en el navegador
# http://localhost:4200
```

---

## Entidades del sistema

### Team (Equipo)
```typescript
interface Team {
  id: number;
  name: string;        // Nombre completo: "Argentina"
  code: string;        // Código FIFA: "ARG"
  flag: string;        // Emoji bandera: "🇦🇷"
  group: GroupName;    // Grupo: "A" | "B" | ... | "L"
  confederation: string; // "CONMEBOL" | "UEFA" | "CAF" | "AFC" | "CONCACAF" | "OFC"
}
```

### Group (Grupo)
```typescript
interface Group {
  id: number;
  name: GroupName;   // "A" ... "L"
  teams: Team[];
  standings?: Standing[];
}
```

### Match (Partido)
```typescript
interface Match {
  id: number;
  date: string;       // "2026-06-11"
  time: string;       // "18:00"
  venue: string;      // Nombre del estadio
  city: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number | null;  // null = partido no jugado
  awayScore: number | null;
  group: GroupName | null;   // null en fase eliminatoria
  stage: MatchStage;  // "group" | "round-of-16" | "quarter-final" | ...
  status: MatchStatus; // "scheduled" | "live" | "finished" | "postponed"
}
```

### Standing (Tabla de posiciones)
```typescript
interface Standing {
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
```

---

## Estructura de carpetas

```
mundial-tracker/
└── src/
    └── app/
        ├── interfaces/          ← Tipos TypeScript
        │   ├── team.interface.ts
        │   ├── group.interface.ts
        │   ├── match.interface.ts
        │   └── standing.interface.ts
        │
        ├── services/            ← Comunicación con el backend
        │   ├── teams.service.ts
        │   ├── groups.service.ts
        │   ├── matches.service.ts
        │   ├── standings.service.ts
        │   └── mock-data.ts     ← Datos del Mundial 2026 (48 equipos, 12 grupos)
        │
        └── components/          ← Componentes (cada uno: .ts + .html + .css)
            ├── navbar/
            ├── home/
            ├── teams/
            │   ├── teams-list/     → /teams
            │   ├── team-detail/    → /teams/:id
            │   └── team-form/      → /teams/new  y  /teams/edit/:id
            ├── groups/
            │   ├── groups-list/    → /groups
            │   └── group-detail/   → /groups/:id
            ├── matches/
            │   ├── matches-list/   → /matches
            │   ├── match-detail/   → /matches/:id
            │   └── match-form/     → /matches/new  y  /matches/edit/:id
            └── standings/
                └── standings-table.component.*  ← componente reutilizable (@Input)
```

---

## Rutas disponibles

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | HomeComponent | Dashboard con resumen |
| `/teams` | TeamsListComponent | Lista de equipos con filtros |
| `/teams/new` | TeamFormComponent | Crear equipo |
| `/teams/edit/:id` | TeamFormComponent | Editar equipo |
| `/teams/:id` | TeamDetailComponent | Detalle de un equipo |
| `/groups` | GroupsListComponent | Los 12 grupos |
| `/groups/:id` | GroupDetailComponent | Equipos + partidos + posiciones del grupo |
| `/standings` | GroupsListComponent | Vista de posiciones |
| `/matches` | MatchesListComponent | Todos los partidos con filtros |
| `/matches/new` | MatchFormComponent | Crear partido |
| `/matches/edit/:id` | MatchFormComponent | Editar/cargar resultado |
| `/matches/:id` | MatchDetailComponent | Detalle de un partido |

---

## Cómo conectar el backend

### Paso 1 — Configurar la URL del backend

Editar `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',  // ← cambiar por la URL de tu backend
};
```

### Paso 2 — Activar las llamadas HTTP en cada servicio

En cada servicio (ej. `src/app/services/teams.service.ts`) cada método tiene dos bloques:

```typescript
getTeams(): Observable<Team[]> {
  // ── MOCK: retorna datos locales (sin backend) ──────────────────────────
  return of([...this.mockTeams]);       // ← comentar esta línea

  // ── HTTP: descomentar cuando el backend esté listo ─────────────────────
  // return this.http.get<Team[]>(this.apiUrl);  // ← descomentar esta línea
}
```

Solo hay que **comentar la línea MOCK** y **descomentar la línea HTTP** en cada método. El cambio es identico en los 4 servicios: `teams.service.ts`, `groups.service.ts`, `matches.service.ts`, `standings.service.ts`.

---

## Contrato API esperado por el frontend

El backend debe implementar estos endpoints REST (JSON):

### Equipos
| Método | Endpoint | Body | Respuesta |
|---|---|---|---|
| GET | `/api/teams` | — | `Team[]` |
| GET | `/api/teams/:id` | — | `Team` |
| POST | `/api/teams` | `CreateTeamDto` | `Team` |
| PUT | `/api/teams/:id` | `UpdateTeamDto` | `Team` |
| DELETE | `/api/teams/:id` | — | `void` |

### Grupos
| Método | Endpoint | Respuesta |
|---|---|---|
| GET | `/api/groups` | `Group[]` |
| GET | `/api/groups/:id` | `Group` |
| GET | `/api/groups/name/:name` | `Group` |

### Partidos
| Método | Endpoint | Body | Respuesta |
|---|---|---|---|
| GET | `/api/matches` | — | `Match[]` |
| GET | `/api/matches?group=A` | — | `Match[]` |
| GET | `/api/matches/:id` | — | `Match` |
| POST | `/api/matches` | `CreateMatchDto` | `Match` |
| PUT | `/api/matches/:id` | `UpdateMatchDto` | `Match` |
| DELETE | `/api/matches/:id` | — | `void` |

### Posiciones
| Método | Endpoint | Respuesta |
|---|---|---|
| GET | `/api/standings` | `Standing[]` |
| GET | `/api/standings?group=A` | `Standing[]` |

> **Nota:** Los DTOs de creación usan `homeTeamId` y `awayTeamId` (números). El backend devuelve objetos `Team` anidados en `Match`.

---

## Scripts útiles

```bash
ng serve          # servidor de desarrollo con hot-reload
ng build          # compilación de producción
ng build --watch  # compilación continua
```
