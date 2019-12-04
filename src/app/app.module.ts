import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import {ImageMapperModule} from "./image-mapper/image-mapper.module";

@NgModule({
  imports: [BrowserModule, ImageMapperModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
