import { selectCurrentUser } from './../../shared/store/auth.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user.interface';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent {
  public user$: Observable<User | null> = this.store.select(selectCurrentUser);

  constructor(private store: Store) {}
}
