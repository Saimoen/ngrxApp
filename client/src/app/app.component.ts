import { tryLogoutAction } from './shared/store/auth.actions';
import { selectIsLoggedin } from './shared/store/auth.selectors';
import { Store } from '@ngrx/store';
import { AuthService } from './shared/service/auth.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { User } from './shared/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isLoggedin$: Observable<boolean | null> =
    this.store.select(selectIsLoggedin);

  constructor(private store: Store) {}

  public logout() {
    this.store.dispatch(tryLogoutAction());
  }
}
