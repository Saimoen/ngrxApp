import { Photo } from './../interfaces/photo.interface';
import { from, map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { createApi } from 'unsplash-js';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  private accessKey = 'KaSrBGKlIn-yWXX0hNlKqxwBLZglTo4FmNUJqptFqWI';

  private unsplash = createApi({
    accessKey: this.accessKey,
  });

  constructor() {}

  public searchPhotos(search: string): Observable<Photo[]> {
    return from(
      this.unsplash.search.getPhotos({
        query: search,
        orientation: 'squarish',
      })
    ).pipe(
      map((result: any) =>
        result.response?.results.map((r: any) => ({ url: r.urls.small }))
      )
    );
  }
}
