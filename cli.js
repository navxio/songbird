#!/usr/bin/env node

const { get, set, all } = require('.')
const clipboard = require('clipboardy')
const args = require('optimist').argv

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
        console.log(val);
      } else {
        if (val) {
          process.stdout.write(val)
        }
      }
      if (!args.n) {
        if (val) {
          clipboard.writeSync(val)
        }
      }
    })
    break;
  case 2:
    // get
    set(args._[0], args._[1]).then(val => {
      if (args.p) {
        console.log(val);
      } else {
        if (val) {
          process.stdout.write(val)
        }
      }
      if (!args.n) {
        if (val) {
          clipboard.writeSync(val)
        }
      }
    })
    break;
  default:
    console.error('bad number of arguments')
    break;
}
