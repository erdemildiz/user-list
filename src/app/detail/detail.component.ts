import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Server
import { GithubService } from '../github.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  providers: [GithubService]
})
export class DetailComponent implements OnInit {

  // Kullanıcı bilgilerini atıldığı değişkenlerdir
  name: String;
  email: String;
  avatar: String;
  // Kullanıcı repolarını atıldığı değikendir.
  repos = [];

  constructor(private _router: ActivatedRoute, private _github: GithubService) { }

  ngOnInit() {
    // Aktif sayfadan gelen url parametreleri alınır.
    this._router.params.subscribe(
      res => {
        // Dönen data içerinde id değeri userLoginId parametersine atılır.
        let userLoginId = res['id'];
        // Url üzerinde alınan userLoginId değeri ile kullanıcı detay bilgileri çekilir.
        this._github.getUserDetails(userLoginId)
          .subscribe(userinfo => {
            // Dönen değerler daha önce belirtilen parametrelere atılır.
            this.avatar = userinfo.avatar_url;
            this.name = userinfo.name;
            this.email = userinfo.email;
          });
        // Belirtilen kullanıcının repoları çekilir ve repos dizisine atılır.
        this._github.getUserRepos(userLoginId)
          .subscribe(userrepo => this.repos.push(userrepo));
      }
    );
  }
}
