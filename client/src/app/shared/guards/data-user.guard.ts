import { tryFetchCurrentUserAction } from './../store/auth.actions';
import { selectCurrentUser } from './../store/auth.selectors';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { first, map, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class DataUserGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): Observable<true> {
    return this.store.select(selectCurrentUser).pipe(
      first(),
      map((user: User | null) => {
        if (!user) {
          this.store.dispatch(tryFetchCurrentUserAction());
        }
        return true;
      })
    );
  }
}
