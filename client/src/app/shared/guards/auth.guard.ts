import { selectIsLoggedin } from './../store/auth.selectors';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, first, filter, map } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsLoggedin).pipe(
      filter((x) => x !== null),
      first(),
      map((isLoggedin: boolean | null) => {
        if (!isLoggedin) {
          this.router.navigateByUrl('/connexion');
          return false;
        }
        return true;
      })
    );
  }
}
