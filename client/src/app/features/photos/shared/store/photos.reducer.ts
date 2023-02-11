import { createReducer, on } from '@ngrx/store';
import { Photo } from '../interfaces/photo.interface';
import * as PhotosActions from './photos.actions';

export interface PhotosState {
  photos: Photo[];
  loading: boolean;
}

const PHOTOS_INITIAL_STATE: PhotosState = {
  photos: [],
  loading: false,
};

export const photosReducerKey = '[ reducer ] photos';

export const photosReducers = createReducer(
  PHOTOS_INITIAL_STATE,
  on(PhotosActions.loadPhotosAction, (state: PhotosState): PhotosState => {
    return {
      ...state,
      loading: true,
      photos: [],
    };
  }),
  on(
    PhotosActions.searchPhotosSuccessAction,
    (state: PhotosState, { photos }: { photos: Photo[] }): PhotosState => {
      return {
        ...state,
        photos,
        loading: false,
      };
    }
  )
);
