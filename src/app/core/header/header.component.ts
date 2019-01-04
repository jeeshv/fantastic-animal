import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CookieService } from 'angular2-cookie/core';
import { PortalService } from '../../services/portal.service';
import { AppSettings } from '../../app-setting';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>();
  // 核心页面
  corePageRoute = [
    'home',
    'personalCenter',
    'about',
  ];
  // 其它消息页面
  elsePageRoute = [
    'result',
    'login',
    'regist',
  ];
  logoImg = "assets/img/logo.PNG"; // logo图片地址
  searchContent = ''; // 搜索内容
  isHome = false;     // 当前是否主页
  isLogin = false;    // 是否经过登录页面
  currentUserName=''; // 当前登录用户名
  isMsgHeaderStyle = false; // 导航头部是否切换为消息形式的头部

  constructor(
    private portalService:PortalService,
    private cookieService: CookieService,
    private router: Router, 
    private titleService: Title, 
    private activatedRoute: ActivatedRoute) { 
      
  }

  ngOnInit() {
    //TODO
    this.titleService.setTitle('神奇动物在哪里');
    this.listenRouter(); // 监听路由
    this.checkSessionLive();// 检查用户登录状态
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

   /**
   * 退出登录
   */
  logout(){
    this.portalService.logout().subscribe(data => {
      if(data.status === 0){
        this.cookieService.removeAll();
        AppSettings.TOKEN = '';
        this.router.navigate(["/login"]);
      }
    });
  }
  /**
   * 检查用户session是否失效
   */
  checkSessionLive(){
    const username = this.cookieService.get("username");
      if(username){
        this.currentUserName = username;
        AppSettings.TOKEN = this.cookieService.get("token");
      }else{
        this.cookieService.removeAll();
        this.currentUserName = '';
        AppSettings.TOKEN = '';
      }
  }
}
