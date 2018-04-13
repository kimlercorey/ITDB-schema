import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../data/api.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  businessCase;
  content = '';
  apiUrlRoot = 'https://api.github.com/repos/ombegov/ITDB-schema/contents/src/';
  schemaRoot = 'https://rawgit.com/scottmccaughey/ITDB-schema/master/gh-pages/src/assets/content/schema-';
  schemaCatParam;

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private _api: ApiService
  ) { }

  getSchema(schemaCat) {
    // return this.http.get(this.schemaRoot + schemaCat + '.md').subscribe(data => {
    //   this.content += '\n\n' + data.text();
    // });

    this._api.loadData(this.apiUrlRoot + schemaCat + '/Examples').subscribe((files) => {
      // console.log(files);
      let fileList = '';
      for (const file of files) {
        // console.log(file.name);
        fileList += file.name;
      }
      console.log(fileList);
      this.content += fileList;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.schemaCatParam = params['schemaCat'];
    });

    this._api.loadData(this.apiUrlRoot).subscribe((categories) => {
      if (this.schemaCatParam) {
        this.getSchema(this.schemaCatParam);
      } else {
        for (const schemaCat of categories) {
          this.getSchema(schemaCat.name);
        }
      }
    });

  }

}
