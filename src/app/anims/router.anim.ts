import { trigger, state, transition, style, animate, group } from '@angular/animations';
/* export const slideToRight = trigger('routeAnim',[
    state('void',style({'position':'absolute','width':'100%','height':'80%'})),
    state('*',style({'position':'absolute','width':'100%','height':'80%'})),
    transition(':enter',[
        style({transform:'translateX(-100%)'}),
        animate('1s ease-in-out',style({transform:'translateX(0)'}))
    ]),
    transition(':leave',[
        style({transform:'translateX(0)'}),
        animate('1s ease-in-out',style({transform:'translateX(100%)'}))
    ]),
]); */

export const slideToRight = trigger('routeAnim',[
    state('void',style({'position':'absolute','width':'100%','height':'80%'})),
    state('*',style({'position':'absolute','width':'100%','height':'80%'})),
    transition(':enter',[
        style({opacity:0}),
        animate('0.3s ease-in-out',style({opacity:1}))
    ]),
    transition(':leave',[
        style({opacity:1}),
        //group可以同时执行多个动画
        /* group([
            animate('1s ease-in-out',style({transform:'translateX(100%)'})),
            animate('0.3s ease-in-out',style({opacity:0}))
        ]), */
        animate('0s ease-in-out',style({opacity:0}))
    ]),
]);