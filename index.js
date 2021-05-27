#!/usr/bin/env node

const { get, set, all } = require('./store')
const clipboard = require('clipboardy')
const args = require('optimist').argv
const Table = require('cli-table')

switch(args._.length) {
  case 0: {
    const data = all()
    const table = new Table({
      style: { 'padding-left': 0, 'padding-right': 0 }
    });
    data.forEach(row => {
      table.push([row.key, row.value])
    })
    console.log(table.toString());
    break;
  }
  case 1: {
    // get
    const key = args._[0]
    const res = get(key)
    if (args.p) {
      console.log(res)
    } else {
      if (res) {
        process.stdout.write(res)
      }
    }
    if (!args.n) {
      if (res) {
        clipboard.writeSync(res)
      }
    }
    break;
  }
  case 2:
    // set
    const key = args._[0]
    const value = args._[1]
    const val = set(key, value)
    if (args.p) {
      console.log(val);
    } else {
      process.stdout.write(val)
    }
    if (!args.n) {
      clipboard.writeSync(val)
    }
    break;
  default:
    console.error('wrong args')
    break;
}
