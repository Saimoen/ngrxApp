import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  photosReducerKey,
  photosReducers,
} from './shared/store/photos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PHOTOS_ROUTES } from './photos.routes';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './../../shared/modules/layout.module';
import { NgModule } from '@angular/core';
import { PhotosSearchComponent } from './views/photos-search/photos-search.component';
import { PhotosListComponent } from './views/photos-search/components/photos-list/photos-list.component';
import { PhotosSearchbarComponent } from './views/photos-search/components/photos-searchbar/photos-searchbar.component';
import { PhotoEffects } from './shared/store/photos.effects';

@NgModule({
  declarations: [
    PhotosSearchComponent,
    PhotosListComponent,
    PhotosSearchbarComponent,
  ],
  imports: [
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(PHOTOS_ROUTES),
    StoreModule.forFeature(photosReducerKey, photosReducers),
    EffectsModule.forFeature([PhotoEffects]),
  ],
})
export class PhotosModule {}
