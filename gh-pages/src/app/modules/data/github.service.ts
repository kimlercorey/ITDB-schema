import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username = 'scottmccaughey';
  private client_id = '65310d7db60de661723f';
  private client_secret = '48a7ecf7a2a2090fa1ce8efba00410de608f0c5d';

  constructor( private _http: Http ) { }

}
