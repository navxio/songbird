#!/usr/bin/env node

const { get, set, all } = require('.')
const clipboard = require('clipboardy')
const args = require('optimist').argv

console.log('args', args)

switch(args._.length) {
  case 0:
    all().then(list => {
      console.log(list)
      process.exit(1)
    })
    break;
  case 1:
    // get
    get(args._[0]).then(val => {
      if (args.p) {
      }
    })
    break;
  case 2:
    break;
  default:
    console.error('bad number of arguments')
    break;
}
