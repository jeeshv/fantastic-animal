import { trigger, state, transition, style, animate } from '@angular/animations';
export const cardAnim = trigger('card',[
    state('out',style({transform:'scale(1)','box-shadow':'none'})),
    state('hover',style({transform:'scale(1.02)','box-shadow':'2px 2px 3px 3px #ccc'})),
    transition('out=>hover',animate('.2s ease-in')),
    transition('hover=>out',animate('.2s ease-out')),
]);