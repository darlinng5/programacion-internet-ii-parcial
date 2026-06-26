import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TeamsListComponent } from './components/teams/teams-list/teams-list.component';
import { TeamDetailComponent } from './components/teams/team-detail/team-detail.component';
import { TeamFormComponent } from './components/teams/team-form/team-form.component';
import { GroupsListComponent } from './components/groups/groups-list/groups-list.component';
import { GroupDetailComponent } from './components/groups/group-detail/group-detail.component';
import { MatchesListComponent } from './components/matches/matches-list/matches-list.component';
import { MatchDetailComponent } from './components/matches/match-detail/match-detail.component';
import { MatchFormComponent } from './components/matches/match-form/match-form.component';

export const routes: Routes = [
  { path: '',               component: HomeComponent,        title: 'Inicio — Mundial 2026' },
  { path: 'teams',          component: TeamsListComponent,   title: 'Equipos — Mundial 2026' },
  { path: 'teams/new',      component: TeamFormComponent,    title: 'Nuevo Equipo' },
  { path: 'teams/edit/:id', component: TeamFormComponent,    title: 'Editar Equipo' },
  { path: 'teams/:id',      component: TeamDetailComponent,  title: 'Detalle Equipo' },
  { path: 'groups',         component: GroupsListComponent,  title: 'Grupos — Mundial 2026' },
  { path: 'groups/:id',     component: GroupDetailComponent, title: 'Detalle Grupo' },
  { path: 'standings',      component: GroupsListComponent,  title: 'Posiciones — Mundial 2026' },
  { path: 'matches',        component: MatchesListComponent, title: 'Partidos — Mundial 2026' },
  { path: 'matches/new',    component: MatchFormComponent,   title: 'Nuevo Partido' },
  { path: 'matches/edit/:id', component: MatchFormComponent, title: 'Editar Partido' },
  { path: 'matches/:id',    component: MatchDetailComponent, title: 'Detalle Partido' },
  { path: '**',             redirectTo: '' },
];
