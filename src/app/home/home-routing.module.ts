import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ResultComponent } from './result/result.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'result/:key', component: ResultComponent },
    { path: 'about', component: AboutComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
