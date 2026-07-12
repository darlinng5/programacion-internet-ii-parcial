import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TeamsListComponent } from './components/teams/teams-list/teams-list.component';
import { TeamDetailComponent } from './components/teams/team-detail/team-detail.component';
import { TeamCreateComponent } from './components/teams/team-create/team-create.component';
import { TeamEditComponent } from './components/teams/team-edit/team-edit.component';
import { GroupsListComponent } from './components/groups/groups-list/groups-list.component';
import { GroupDetailComponent } from './components/groups/group-detail/group-detail.component';
import { MatchesListComponent } from './components/matches/matches-list/matches-list.component';
import { MatchDetailComponent } from './components/matches/match-detail/match-detail.component';
import { MatchCreateComponent } from './components/matches/match-create/match-create.component';
import { MatchEditComponent } from './components/matches/match-edit/match-edit.component';
import { NewsListComponent } from './components/news/news-list/news-list.component';
import { NewsDetailComponent } from './components/news/news-detail/news-detail.component';

export const routes: Routes = [
  { path: '',               component: HomeComponent,        title: 'Inicio — Mundial 2026' },
  { path: 'teams',          component: TeamsListComponent,   title: 'Equipos — Mundial 2026' },
  { path: 'teams/new',      component: TeamCreateComponent,  title: 'Nuevo Equipo' },
  { path: 'teams/edit/:id', component: TeamEditComponent,    title: 'Editar Equipo' },
  { path: 'teams/:id',      component: TeamDetailComponent,  title: 'Detalle Equipo' },
  { path: 'groups',         component: GroupsListComponent,  title: 'Grupos — Mundial 2026' },
  { path: 'groups/:id',     component: GroupDetailComponent, title: 'Detalle Grupo' },
  { path: 'standings',      component: GroupsListComponent,  title: 'Posiciones — Mundial 2026' },
  { path: 'matches',        component: MatchesListComponent, title: 'Partidos — Mundial 2026' },
  { path: 'matches/new',    component: MatchCreateComponent, title: 'Nuevo Partido' },
  { path: 'matches/edit/:id', component: MatchEditComponent, title: 'Editar Partido' },
  { path: 'matches/:id',    component: MatchDetailComponent, title: 'Detalle Partido' },
  { path: 'news',           component: NewsListComponent,    title: 'Noticias — Mundial 2026' },
  { path: 'news/:id',       component: NewsDetailComponent,  title: 'Detalle Noticia' },
  { path: '**',             redirectTo: '' },
];
