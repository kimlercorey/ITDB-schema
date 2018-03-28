import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-schema',
  template: `
    <h3 class="code-label" [innerHTML]=filename></h3>
    <markdown-to-html [data]="content | language : 'xml'"></markdown-to-html>
  `
})
export class SchemaComponent implements OnInit {
  content: any = '';
  @Input() filename;

  constructor(
    private http: Http
  ) {}

  ngOnInit() {
    this.http.get('https://rawgit.com/ombegov/ITDB-schema/master/src/BusinessCase/Examples/' + this.filename).subscribe(data => {
      const text = data.text().replace(/\n$/, '');
      this.content = text;
    });
  }

}
