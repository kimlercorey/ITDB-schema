import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  schema: any = '';
  isOpen = {};

  constructor(http: Http) {
    http.get('https://raw.githubusercontent.com/scottmccaughey/ITDB-schema/master/gh-pages/src/assets/content/schema.md').subscribe(data => {
      this.schema = data.text();
    });
  }

  ngOnInit() {
  }

}
