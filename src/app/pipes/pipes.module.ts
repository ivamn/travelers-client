import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgUrlPipe } from './img-url.pipe';



@NgModule({
  declarations: [ImgUrlPipe],
  imports: [
    CommonModule
  ],
  exports: [ImgUrlPipe]
})
export class PipesModule { }
