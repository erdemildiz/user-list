import { Component, OnInit } from '@angular/core';
// Github
import { GithubService } from "../github.service";
// Pipe
import { SlicePipe as slice } from "../slice.pipe";

// OnInit sınıdı sayfa yüklendikten sonra çalışır
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [GithubService]
})
export class ListComponent implements OnInit {

  // Bütün kullanıcıların içerisine dolduğu dizi elemanı
  datas = [];
  users;
  // Sayfalama için kullanılan slice parametresi için
  // bağşlangıç ve bitiş değerini belirlediğimiz dağişkendir
  pageNumber: Number = 0;


  constructor(private _github: GithubService) { }

  ngOnInit() {
    // Userları çek
    this.getUserData();
  }

  /*
   Bütün userları Github api üzerinde al
   @return void
   Dönen değerler user değerine dolar.
  */
  getUserData() {
    // github üzerinde userları çek
    this._github.getUserList()
      // Observable değer döndüğünde subscribe etmemiz gerekiyor
      .subscribe(data => {
        // Bütün dönen datalar için kullanıcı bilgilerini getir
        data.map(user => {
          this._github.getUserDetails(user.login)
            // Dönen kullanıcı bilgilerini datas dizisine at ve ilk 10 elemanı slice et
            .subscribe(res => {
             this.datas.push(res);
             this.users = this.datas.slice(0, 10);
            });
        });
      });
  }

  /*
   Sayfalama için kullanılan foksiyondur. Gelen sayfamarası pageNumber değerine atılır..
   @param Number
   @return void
  */
  goPage(page: any) {
    this.pageNumber = page;
    this.users = this.datas.slice((page * 10), (page * 10 + 10));
  }
}
