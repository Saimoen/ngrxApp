import { Store } from '@ngrx/store';
import { switchMap, catchError, EMPTY, map, debounceTime, of } from 'rxjs';
import { UnsplashService } from './../services/unsplash.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  trySearchPhotosAction,
  searchPhotosSuccessAction,
  loadPhotosAction,
} from './photos.actions';
import { Injectable } from '@angular/core';
import { Photo } from '../interfaces/photo.interface';

@Injectable()
export class PhotoEffects {
  trySearchPhotosAction = createEffect(() =>
    this.actions$.pipe(
      ofType(trySearchPhotosAction),
      debounceTime(1000),
      switchMap(({ search }) => {
        if (search.length) {
          this.store.dispatch(loadPhotosAction());
          return this.unsplashService.searchPhotos(search).pipe(
            map((photos: Photo[]) => searchPhotosSuccessAction({ photos })),
            catchError((err) => {
              console.error(err);
              return EMPTY;
            })
          );
        } else {
          return of(searchPhotosSuccessAction({ photos: [] }));
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private unsplashService: UnsplashService,
    private store: Store
  ) {}
}
