var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { GithubService } from "../github.service";
var ListComponent = (function () {
    function ListComponent(_github) {
        this._github = _github;
        this.datas = [];
        this.pageNumber = 0;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getUserData();
    };
    ListComponent.prototype.getUserData = function () {
        var _this = this;
        this._github.getUserList()
            .subscribe(function (data) {
            data.map(function (user) {
                _this._github.getUserDetails(user.login)
                    .subscribe(function (res) {
                    _this.datas.push(res);
                    _this.users = _this.datas.slice(0, 10);
                });
            });
        });
    };
    ListComponent.prototype.goPage = function (page) {
        this.pageNumber = page;
        this.users = this.datas.slice((page * 10), (page * 10 + 10));
    };
    return ListComponent;
}());
ListComponent = __decorate([
    Component({
        selector: 'app-list',
        templateUrl: './list.component.html',
        providers: [GithubService]
    }),
    __metadata("design:paramtypes", [GithubService])
], ListComponent);
export { ListComponent };
//# sourceMappingURL=../../../../src/app/list/list.component.js.map