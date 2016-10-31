import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// Pages
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
// Router
import { GithubUserListRoutingModule } from "./app-routing.module";
// Pipe
//import { SlicePipe } from './slice.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    //SlicePipe
  ],
  imports: [
    BrowserModule,
    GithubUserListRoutingModule,
    HttpModule
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
