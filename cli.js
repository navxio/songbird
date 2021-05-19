#!/usr/bin/env -S node

const { get, set, list } = require('.')

switch(process.argv.length) {
  case 2:
    list()
    break;
  case 3: {
    const key = process.argv[2]
    get(key)
  }
    break;
  case 4: {
    const key = process.argv[2]
    const value = process.argv[3]
    set(key, value)
  }
    break;
  default:
    console.log('bad params, pass -h for help')
    break;
}
