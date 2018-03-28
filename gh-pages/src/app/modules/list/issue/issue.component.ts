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
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this._api.loadData(this.url).subscribe((results) => {
      let json = results;
      for (var i = 0; i < json.length; i++) {
        const created = new Date(json[i]['created_at']);
        json[i]['created_at'] = monthNames[created.getMonth()] + ' ' + created.getDate() + ', ' + created.getFullYear();

        const updated = new Date(json[i]['updated_at']);
        json[i]['updated_at'] = monthNames[updated.getMonth()] + ' ' + updated.getDate() + ', ' + updated.getFullYear();
      }
      this.issues = json;
    });
  }
}
