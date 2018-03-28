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
    this._api.loadData('./assets/data/validations.json').subscribe((results) => {
      const itp = results['ITP Valids'];
      const bc = results['BC Valids'];
      const bcd = results['BCD Valids'];
      this.validations = itp.concat(bc, bcd);
    });

  }
}
