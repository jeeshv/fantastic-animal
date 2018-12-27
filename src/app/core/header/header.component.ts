import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CookieService } from 'angular2-cookie/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>();

  corePageRoute = [
    'home',
    'personalCenter',
    'about',
  ];
  elsePageRoute = [
    'result',
    'login',
    'regist',
  ];
  logoImg = "assets/img/logo.PNG";
  searchContent = '';
  isHome = false;
  isLogin = false;
  currentUserName='';
  isMsgHeaderStyle = false;

  constructor(
    private cookieService: CookieService,
    private router: Router, 
    private titleService: Title, 
    private activatedRoute: ActivatedRoute) { 
      
  }

  ngOnInit() {
    //TODO
    this.titleService.setTitle('神奇动物在哪里');
    this.listenRouter(); // 监听路由
  }
  listenRouter(){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) { // 当导航成功结束时执行
        const url = event.url;
        if(url.length ===1 || this.isCorePage(url)){
          this.isHome = true;
          this.isMsgHeaderStyle = false;
        }else if(this.isElsePage(url)){
          this.isHome = false;
          this.isMsgHeaderStyle = true;
        }else if(this.isHome){
          this.isHome = false;
        }else{
          this.isHome = false;
          this.isMsgHeaderStyle = false;
        }

        if(this.isLogin){
          this.currentUserName = this.cookieService.get("username");
          this.isLogin = false;
        }

        if(url.indexOf("login") > 0){
          this.isLogin = true;
        }
        
      }
    });
  }
  isCorePage(url){
    let flag = false;
    for(let i = 0; i < this.corePageRoute.length;i++){
      if(url.indexOf(this.corePageRoute[i]) > 0 ){
        return true;
      }
    }
    return flag;
  }
  isElsePage(url){
    let flag = false;
    for(let i = 0; i < this.elsePageRoute.length;i++){
      if(url.indexOf(this.elsePageRoute[i]) > 0 ){
        return true;
      }
    }
    return flag;
  }
  openSidebar() {
    this.toggle.emit();// 发射事件
  }
  onChange(checked:boolean){
    this.toggleDarkTheme.emit(checked);// 发射事件
  }

  search(){
    alert(this.searchContent);
  }

  regist(){
    this.router.navigate(["/register"]);
  }
  login(){
    this.router.navigate(["/result",'login']);
  }

  clickLogo(){
    this.router.navigate(["/home"]);
  }

}
