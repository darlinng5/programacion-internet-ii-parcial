import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { TeamsService } from '../../../services/teams.service';
import { GroupName } from '../../../interfaces/team.interface';

@Component({
  selector: 'app-team-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './team-form.component.html',
  styleUrl: './team-form.component.css',
})
export class TeamFormComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  teamId: number | null = null;
  groups: GroupName[] = ['A','B','C','D','E','F','G','H','I','J','K','L'];
  confederations = ['UEFA','CONMEBOL','CONCACAF','CAF','AFC','OFC'];
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private teamsService: TeamsService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name:          ['', [Validators.required, Validators.minLength(2)]],
      code:          ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]],
      group:         ['A', Validators.required],
      confederation: ['UEFA', Validators.required],
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.teamId = Number(id);
      this.teamsService.getTeamById(this.teamId).subscribe(team => {
        this.form.patchValue(team);
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    this.loading = true;

    const dto = this.form.value;

    if (this.isEdit && this.teamId) {
      this.teamsService.updateTeam(this.teamId, dto).subscribe({
        next: () => this.router.navigate(['/teams', this.teamId]),
        error: () => { this.error = 'Error al actualizar el equipo.'; this.loading = false; },
      });
    } else {
      this.teamsService.createTeam(dto).subscribe({
        next: team => this.router.navigate(['/teams', team.id]),
        error: () => { this.error = 'Error al crear el equipo.'; this.loading = false; },
      });
    }
  }
}
