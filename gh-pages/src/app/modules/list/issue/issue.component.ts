import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../data/api.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  isOpen = {};
  public issues;
  url = 'https://api.github.com/repos/ombegov/ITDB-schema/issues?state=open';

  constructor(private _api: ApiService) { }

  public ngOnInit() {
    // console.log(this._api);
    this._api.loadData(this.url).subscribe((results) => {

        console.log('Issues', results);
        this.issues = results;
    });

}
}
