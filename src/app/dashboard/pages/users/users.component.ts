import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '@services/user.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export default class UsersComponent {

  public usersService = inject( UsersService)

  constructor() {

  }
}
