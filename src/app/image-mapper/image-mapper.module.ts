import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinchZoomModule } from "ngx-pinch-zoom";

import { ImageMapperComponent } from './image-mapper.component';

@NgModule({
  imports: [
    CommonModule,
    PinchZoomModule
  ],
  exports: [ImageMapperComponent],
  declarations: [ImageMapperComponent]
})
export class ImageMapperModule { }