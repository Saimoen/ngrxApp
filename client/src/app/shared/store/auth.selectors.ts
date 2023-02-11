import { AuthState, authStateKey } from './auth.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAuthFeature = createFeatureSelector<AuthState>(authStateKey);

export const selectCurrentUser = createSelector(
  selectAuthFeature,
  (authState: AuthState) => {
    return authState.user;
  }
);

export const selectError = createSelector(
  selectAuthFeature,
  (authState: AuthState) => {
    return authState.error;
  }
);

export const selectIsLoggedin = createSelector(
  selectAuthFeature,
  (authState: AuthState) => {
    return authState.isLoggedin;
  }
);
