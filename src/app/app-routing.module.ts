import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './component/forms/forms.component';
import { MenusComponent } from './component/menus/menus.component';
import { NewsComponent } from './component/news/news.component';

const routes: Routes = [
  {
    path:"news",
    component: NewsComponent
  },
  {
    path:"forms",
    component: FormsComponent
  },
  {
    path:"menus",
    component: MenusComponent
  },
  {
    path:"**",
    redirectTo:"news"
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
