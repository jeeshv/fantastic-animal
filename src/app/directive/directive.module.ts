import { NgModule } from '@angular/core';
import { DragDirective } from './drag-drop/drag.directive';
import { DropDirective } from './drag-drop/drop.directive';
import { DragDropService } from './drag-drop.service';
import { MobileVolidatorDirective } from './formVolidator/mobile-volidator.directive';

@NgModule({
  declarations: [
    DragDirective,
    DropDirective,
  ],
  exports:[
    DragDirective,
    DropDirective,
  ],
  providers:[
    DragDropService,
    MobileVolidatorDirective
  ]
})
export class DirectiveModule { }
