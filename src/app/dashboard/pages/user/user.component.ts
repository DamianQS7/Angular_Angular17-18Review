import { Component, Signal, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '../../../interfaces/req-res.interface';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/user.service';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export default class UserComponent {

  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  public user = toSignal(
    this.route.params.pipe(
      switchMap( params => this.usersService.getUserById(params['id']))
    )
  );

  public fullName: Signal<string> = computed(() => {
    
    if(this.user()) {
      return `${this.user()?.first_name} ${this.user()?.last_name}`
    }

    return 'User Information'
  });

}
