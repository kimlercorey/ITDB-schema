import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  content: any = '';
  isOpen = {};

  constructor(http: Http) {
    http.get('https://raw.githubusercontent.com/ombegov/ITDB-schema/master/README.md').subscribe(data => {

      const md = data.text();
      const split = md.split('## Important Dates');
      console.log(split);

      this.content = data.text();
    });
  }

  ngOnInit() {
  }

}
