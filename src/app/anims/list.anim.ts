import { trigger, stagger, transition, style, animate, query } from '@angular/animations';
export const listAnimation = trigger('listAnim', [
    transition('*=>*', [
        query(':enter',style({opacity:0}),{optional:true}),
        query(':enter',stagger(100,[//间隔100，stagger有一个先后动画顺序，没有stagger则元素同时出现
            animate('1s',style({opacity:1}))
        ]),{optional:true}),//stagger找子节点
        query(':leave',style({opacity:1}),{optional:true}),
        query(':leave',stagger(100,[
            animate('1s',style({opacity:0}))
        ]),{optional:true}),//s
    ]),
]);