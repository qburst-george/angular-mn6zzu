import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PinchZoomModule } from "ngx-pinch-zoom";

import { AppComponent } from "./app.component";
import {ImageMapperModule} from "./image-mapper/image-mapper.module";

@NgModule({
  imports: [BrowserModule, PinchZoomModule, ImageMapperModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
