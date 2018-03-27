import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../data/api.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {

  isOpen = {};
  public validations;
  public filter;

  constructor(private _api: ApiService) { }

  public ngOnInit() {
    // console.log(this._api);
    this._api.loadData('./assets/data/bcdvalids.json').subscribe((results) => {

        // console.log(results)
        // do stuff with our data here.
        // ....
        // asign data to our class property in the end
        // so it will be available to our template
        console.log('Validations', results);

        this.validations = results;
    });

  }
}
