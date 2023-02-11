import { User, Credentials } from './../interfaces/user.interface';
import { createAction, props } from '@ngrx/store';

// FetchCurrentUser()
export const tryFetchCurrentUserAction = createAction(
  '[ auth ] try fetch current user'
);
export const fetchCurrentUserSuccessAction = createAction(
  '[ auth ] fetch current user success',
  props<{ user: User | null }>()
);

// Inscription
export const tryInscriptionAction = createAction(
  '[ auth ] try inscription',
  props<{ user: User }>()
);

export const inscriptionErrorAction = createAction(
  '[ auth ] inscription error',
  props<{ error: string }>()
);

// Connexion
export const tryConnexionAction = createAction(
  '[ auth ] try connexion',
  props<{ credentials: Credentials }>()
);

export const connexionErrorAction = createAction(
  '[ auth ] connexion error',
  props<{ error: string }>()
);

export const connexionSuccessAction = createAction(
  '[ auth ] connexion success',
  props<{ user: User }>()
);

// Deconnexion
export const tryLogoutAction = createAction('[ auth ] try deconnexion');

export const logoutSuccessAction = createAction('[ auth ] logout success');
