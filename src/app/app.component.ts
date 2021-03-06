import { Component, Inject } from '@angular/core';
/* import { trigger, state, transition, style, animate, keyframes } from '@angular/animations'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 /*  animations: [
    trigger('square',
      [
        state('green', style({ 'background': 'green', 'height': '100px', 'transform': 'translateY(-100%)' })),
        state('red', style({ 'background': 'red', 'height': '100px', 'transform': 'translateY(100%)' })),
        transition('red=>green', animate('.8s ease-in')),
        transition('green=>red', animate(5000,keyframes([
          style({transform:'translateY(100%)'}),
          style({transform:'translateY(98%)'}),
          style({transform:'translateY(95%)'}),
          style({transform:'translateY(90%)'}),
          style({transform:'translateY(80%)'}),
          style({transform:'translateY(60%)'}),
          style({transform:'translateY(30%)'}),
          style({transform:'translateY(0%)'}),
          style({transform:'translateY(-10%)'}),
          style({transform:'translateY(-5%)'}),
          style({transform:'translateY(-2%)'}),
          style({transform:'translateY(0%)'}),
          style({transform:'translateY(0%)'}),
          style({transform:'translateY(100%)'}),
        ])))
      ]
    )
  ] */
})
export class AppComponent {
  /* squareState: string; */ //测试动画的数据
  darkTheme = false;

  constructor(@Inject('BASE_CONFIG')config){
    console.log("依赖注入：" + config);
  }
  switchTheme(dark) {
    this.darkTheme = dark.checked;;
  }

  /* onClick() {
    this.squareState = this.squareState == 'red' ? 'green' : 'red'; //测试动画的数据
  } */
}
