#!/usr/bin/env -S node

const { get, set, list } = require('.')

switch(process.argv.length) {
  case 2:
    list()
    console.log(process.argv)
    break;
  case 3: {
    const key = process.argv[2]
    console.log(process.argv)
    get(key)
  }
    break;
  case 4: {
    const key = process.argv[2]
    const value = process.argv[3]
    console.log(process.argv)
    set(key, value)
  }
    break;
}
