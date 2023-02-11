import { Photo } from './../interfaces/photo.interface';
import { createAction, props } from '@ngrx/store';

export const trySearchPhotosAction = createAction(
  '[ photos ] try search photos',
  props<{ search: string }>()
);

export const loadPhotosAction = createAction('[ photos ] load photos');

export const searchPhotosSuccessAction = createAction(
  '[ photos ] search photos success',
  props<{ photos: Photo[] }>()
);
