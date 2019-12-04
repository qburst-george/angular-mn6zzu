import { Component, OnInit } from "@angular/core";
// import PinchZoom from "pinch-zoom-js";

import { COORRDINATES_DATA } from "./coordinates.data";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  imagePath =
    "https://raw.githubusercontent.com/george3447/angular-k8qnba/master/src/download_img.png";
  coordinates;
  selectedItem;

  name = "Angular";

  ngOnInit() {
    this.coordinates = COORRDINATES_DATA;
  }

  onItemSelect(item) {
    this.selectedItem = item;
  }
}
