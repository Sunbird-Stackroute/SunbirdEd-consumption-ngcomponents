import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { IContent, ICardClick, LibraryCardTypes } from '../models';

@Component({
  selector: 'sb-library-card-v5',
  templateUrl: './library-card-v5.component.html',
  styleUrls: ['./library-card-v5.component.css']
})
export class LibraryCardV5Component implements OnInit, AfterViewInit {
  @Input() content: IContent|any;
  @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();
  @Input() isLoading: boolean;
  @Input() layoutConfig: any;
  @Input() cardImg = '';
  @Input() contentStatus = [];
  @Input() type: LibraryCardTypes = LibraryCardTypes.DESKTOP_TEXTBOOK;
  constructor() { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }
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
