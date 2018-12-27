import { Component, Input, forwardRef } from '@angular/core';
//实现一个表单控件
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';
@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,//令牌
      useExisting: forwardRef(() => ImageListSelectComponent) ,//forwardRef引用自己
      multi: true//固定写法
    },
    {
      provide: NG_VALIDATORS,//把自己注册到 ng_validators
      useExisting: forwardRef(() => ImageListSelectComponent) ,//forwardRef引用自己
      multi: true//固定写法
    }
  ]
})
export class ImageListSelectComponent implements ControlValueAccessor {
  selected: string;
  @Input() title = '选择封面：';
  @Input() items: string[] = [];
  @Input() cols = 8;
  @Input() rowHeight = '64px';
  @Input() itemWidth = '80px';
  @Input() useSvgIcon = false;

  constructor() { }
  // 这里是做一个空函数体，真正使用的方法在 registerOnChange 中
  // 由框架注册，然后我们使用它把变化发回表单
  // 注意，和 EventEmitter 尽管很像，但发送回的对象不同
  private propagateChange = (_: any) => {};

  // 写入控件值
  public writeValue(obj: any) {
    if (obj && obj !== '') {
      this.selected = obj;
    }
  }

  // 当表单控件值改变时，函数 fn 会被调用
  // 这也是我们把变化 emit 回表单的机制
  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  // 验证表单，验证结果正确返回 null 否则返回一个验证结果对象
  public validate(c: FormControl) {
    return this.selected ? null : {
      imageListSelect: {
        valid: false,
      },
    };
  }

  // 这里没有使用，用于注册 touched 状态
  public registerOnTouched() {
  }
   // 列表元素选择发生改变触发
   onChange(i) {
    this.selected = this.items[i];
    // 更新表单
    this.propagateChange(this.items[i]);
  }

}
