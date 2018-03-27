import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './api.service';
import { SearchService } from './search.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ApiService,SearchService]
})
export class DataModule { }
