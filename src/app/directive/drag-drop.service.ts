import { Injectable } from '@angular/core';
export interface DragData{
  tag:string;//区分媒体拖拽，
  data:any;//传递的数据
}
@Injectable()
export class DragDropService {
  private _dargData = null;
  setDragData(data:DragData){
    this._dargData.next(data);
  }
  getDragData():any{
    return this._dargData.asObservable();
  }
  clearDragData(){
    this._dargData.next(null);
  }
  constructor() { }
}
