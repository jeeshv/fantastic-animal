import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { DragDropService } from '../drag-drop.service';

@Directive({
  selector: '[app-draggable][dragTag][dragData][draggedClass]'//动态可输入
})
export class DragDirective {
  private _isDraggable = false;//用于可拓展，true=可拖拽

  @Input('app-draggable')//对外暴露的选择器名，当外部书写 app-draggable = ‘true’，即调用set方法
  set isDraggable(val: boolean) {
    this._isDraggable = val;
    //设置成可拖拽
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${val}`);
  }
  get isDraggable() {
    return this._isDraggable;
  }
  @Input() draggedClass: string;
  @Input() dragTag: string;
  @Input() dragData:any;
  constructor(
    private el: ElementRef,
    private rd: Renderer2,//Renderer2 --4.0推荐使用的
    private service: DragDropService) { 

  }
  @HostListener('dragstart', ['$event'])
  ondragstart(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
      this.service.setDragData({tag:this.dragTag,data:this.dragData})
    }
  }
  @HostListener('dragsend', ['$event'])
  ondragend(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass)
    }
  }
}
