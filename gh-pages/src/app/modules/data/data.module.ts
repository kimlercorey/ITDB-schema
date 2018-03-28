import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchemaComponent } from './schema/schema.component';

import { ApiService } from './api.service';
import { SearchService } from './search.service';

import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

@NgModule({
  imports: [
    CommonModule,
    MarkdownToHtmlModule.forRoot()
  ],
  providers: [ApiService,SearchService],
  declarations: [SchemaComponent],
  exports: [SchemaComponent]
})
export class DataModule { }
