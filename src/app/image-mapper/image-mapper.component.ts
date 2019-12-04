import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";

import { fromEvent, Observable, Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";

import { Coordinate } from "../coordinates.data";

@Component({
  selector: "image-mapper",
  templateUrl: "./image-mapper.component.html",
  styleUrls: ["./image-mapper.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageMapperComponent implements OnInit {
  @ViewChild("imageEl", { static: false }) imageEl: ElementRef;
  @Input() coordinates: Array<Coordinate>;
  @Input() imagePath: string;
  @Output() select: EventEmitter<Coordinate> = new EventEmitter();

  selectedItem;

  constructor(private ref: ChangeDetectorRef) {}

  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;

  ngOnInit() {
    this.resizeObservable$ = fromEvent(window, "resize");
    this.resizeSubscription$ = this.resizeObservable$
      .pipe(debounceTime(300))
      .subscribe(evt => {
        this.initCoords();
        this.ref.markForCheck();
      });
  }

  onItemSelect(item) {
    this.selectedItem = item;
    this.select.emit(item);
  }

  initCoords() {
    this.coordinates.map(coordinate => {
      const { x, y, width } = coordinate;
      const { x: newX, y: newY, radius } = this.getCoordinatesObj(x, y, width);
      coordinate.positionX = newX;
      coordinate.positionY = newY;
      coordinate.radius = radius;
      return coordinate;
    });
  }

  getCoordinatesObj(x, y, radius) {
    const {
      clientWidth,
      clientHeight,
      naturalWidth,
      naturalHeight
    } = this.imageEl.nativeElement;

    const newRadius = radius * (clientWidth / naturalWidth);
    const newX = x * (clientWidth / naturalWidth) - (newRadius / 2 + 1);
    const newY = y * (clientHeight / naturalHeight) - (newRadius / 2 + 1);
    const result = { x: newX + "px", y: newY + "px", radius: newRadius + "px" };
    return result;
  }
}
