import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { GroupsService } from '../../../services/groups.service';
import { Group } from '../../../interfaces/group.interface';

@Component({
  selector: 'app-groups-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './groups-list.component.html',
  styleUrl: './groups-list.component.css',
})
export class GroupsListComponent implements OnInit {
  groups: Group[] = [];

  constructor(private groupsService: GroupsService) {}

  ngOnInit(): void {
    this.groupsService.getGroups().subscribe(groups => {
      this.groups = groups;
    });
  }
}
