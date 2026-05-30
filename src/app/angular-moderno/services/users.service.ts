import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';
import { environment } from '@environments/environment';
interface State {
  users: User[];
  loading: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    users: [],
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.http
      .get<UsersResponse>('https://reqres.in/api/users', {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': environment.apikeyUsers,
        },
      })
      .pipe(delay(1500))
      .subscribe((res) => {
        console.log(res);

        this.#state.set({
          loading: false,
          users: res.data.map((user) => ({
            ...user,
            avatar: user.avatar.replace('https://reqres.in', '/reqres-img'),
          })),
        });
      });
  }

  getUserById(id: string) {
    return this.http
      .get<UserResponse>(`https://reqres.in/api/users/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': environment.apikeyUsers,
        },
      })
      .pipe(
        delay(1500),
        map((resp) => {
          return {
            ...resp.data,
            avatar: resp.data.avatar.replace('https://reqres.in', '/reqres-img'),
          };
        }),
      );
  }
}
