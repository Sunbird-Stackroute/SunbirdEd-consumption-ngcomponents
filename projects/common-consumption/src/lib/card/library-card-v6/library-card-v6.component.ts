import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IContent, ICardClick, LibraryCardTypes } from '../models';

@Component({
  selector: 'sb-library-card-v6',
  templateUrl: './library-card-v6.component.html',
  styleUrls: ['./library-card-v6.component.css']
})
export class LibraryCardV6Component implements OnInit {

  @Input() content: IContent|any;
  @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();
  @Input() isLoading: boolean;
  @Input() layoutConfig: any;
  @Input() cardImg = '';
  @Input() type: LibraryCardTypes = LibraryCardTypes.DESKTOP_TEXTBOOK;
  constructor() { }
  ngOnInit(): void {
  }

  // ngAfterViewInit(): void {
  // }
  onClick(event: MouseEvent) {
    this.cardClick.emit({ event: event, data: this.content });
 }
 getClassForImage() {
  if (this.layoutConfig != null && this.layoutConfig.cardImgStyle != null) {
      return 'sb--card__img sb--card__image-pos-' + this.layoutConfig.cardImgStyle;
  } else {
      return 'sb--card__img sb--card__image-pos';
  }
}
}
