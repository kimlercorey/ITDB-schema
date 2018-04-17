import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username = 'scottmccaughey';
  private githubRoot = 'https://api.github.com/repos/ombegov/ITDB-schema/';
  private githubContents = 'contents/src/';
  private githubCommits = 'commits?path=';
  private token = 'f255300ec05626a44e86d65f755b1567f5337c4f';

  constructor( private _http: HttpClient ) { }

  getSchemaCats() {
    const headers = new HttpHeaders();
    return this._http.get(this.githubRoot + this.githubContents, {
      headers: new HttpHeaders({'Authorization': 'token ' + this.token})
    });
  }

  getExamples(schemaCat) {
    const exampleFormat = (schemaCat === 'InvestmentReport') ? '/examples' : '/Examples';
    return this._http.get(this.githubRoot + this.githubContents + schemaCat + exampleFormat, {
      headers: new HttpHeaders({'Authorization': 'token ' + this.token})
    });
  }

  getFileInfo(path) {
    return this._http.get(this.githubRoot + this.githubCommits + path, {
      headers: new HttpHeaders({'Authorization': 'token ' + this.token})
    });
  }

}
