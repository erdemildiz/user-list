import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Page
import { ListComponent } from "./list/list.component";
import { DetailComponent } from "./detail/detail.component";
/*
 Sayfa linkleridir
 /link parametresi yada sayfa açılış componenti ListComponent dir
 /link/:id sayfası userLogin idsini alır ve DetailComponent sayfasını çalıştırır
 ** sayfası herhangi bir sayfa hatası yada 404 durumunda çalışan ana componenttir.
*/
const routes: Routes = [
  {
    path: "list",
    component: ListComponent
  },
  {
    path: "list/:id",
    component: DetailComponent
  },
  {
    path: "**",
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class GithubUserListRoutingModule { }
