import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '../interfaces/req-res.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient)

  #state = signal<State>({
    loading: true,
    users: []
  });

  public users: Signal<User[]> = computed(() => this.#state().users);
  public loading: Signal<boolean> = computed(() => this.#state().loading);
  
  constructor() { 
    this.http.get<UsersResponse>('https://reqres.in/api/users')
      .pipe( delay(1500) )
      .subscribe( res => {

        this.#state.set({
          loading: false,
          users: res.data
        });

      });
    
  }

  public getUserById(id: string): Observable<User> {
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe( 
        delay(1500),
        map( response => response.data ) 
      )
  }

}
