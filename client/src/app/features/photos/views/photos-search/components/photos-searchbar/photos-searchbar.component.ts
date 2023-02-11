import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photos-searchbar',
  templateUrl: './photos-searchbar.component.html',
  styleUrls: ['./photos-searchbar.component.scss'],
})
export class PhotosSearchbarComponent {
  @Output() public search: EventEmitter<string> = new EventEmitter();
  @Input() public isLoading: boolean | null = false;
  public inputSearch!: string;
}
