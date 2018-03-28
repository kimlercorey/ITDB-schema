'use strict';
const excelToJson = require('../../../node_modules/convert-excel-to-json');
const fs = require('fs');

const result = excelToJson({
  sourceFile: 'validations.xlsx',
  sheets: ['ITP Valids', 'BC Valids', 'BCD Valids'],
  header: {
    rows: 1
  },
  columnToKey: {
    A: 'UI',
    B: 'Status',
    C: 'Section',
    D: 'Sub-Section',
    E: 'FY19 Field',
    F: 'Loc in Data Dictionary',
    G: 'Validation Type',
    H: 'Validation Description',
    I: 'Comments',
    J: 'Analyst Recommendation',
    K: 'Approval/Comment',
    L: 'Dev/QA',
    M: 'Status',
    N: 'Dev Comments',
    O: 'QA Comments',
    P: 'BA Comments'
  }
});

const json = JSON.stringify(result);

fs.writeFile('validations.json', json, function(err) {
  if(err) {
    return console.log(err);
  }
  console.log('The file was saved!');
});
