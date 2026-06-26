import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { TeamsService } from '../../../services/teams.service';
import { GroupName } from '../../../interfaces/team.interface';

@Component({
  selector: 'app-team-create',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './team-create.component.html',
  styleUrl: './team-create.component.css',
})
export class TeamCreateComponent implements OnInit {
  form!: FormGroup;
  groups: GroupName[] = ['A','B','C','D','E','F','G','H','I','J','K','L'];
  confederations = ['UEFA','CONMEBOL','CONCACAF','CAF','AFC','OFC'];
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
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
  }

  createTeam(): void {
    if (this.form.invalid) return;
    this.loading = true;

    this.teamsService.createTeam(this.form.value).subscribe({
      next: team => this.router.navigate(['/teams', team.id]),
      error: () => { this.error = 'Error al crear el equipo.'; this.loading = false; },
    });
  }
}
