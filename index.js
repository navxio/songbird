#!/usr/bin/env node

const { get, set, all } = require('./store')
const clipboard = require('clipboardy')
const args = require('optimist').argv
const Table = require('cli-table')

async function read(stream) {
  const chunks = []
  for await (const chunk of stream) chunks.push(chunk)
  return Buffer.concat(chunks).toString('utf8')
}

switch(args._.length) {
  case 0: {
    const data = all()
    const table = new Table({
      style: { 'padding-left': 0, 'padding-right': 0 }
    });
    if (data) {
      data.forEach(row => {
        table.push([row.key, row.value])
      })
      console.log(table.toString());
    }
    break;
  }
  case 1: {
    const key = args._[0]
    if (args.s) {
      // it's a stream
      read(process.stdin).then(val => {
        set(key, val)
      })
    } else {
      // get
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
    }
    break;
  }
  case 2:
    // set
    const key = args._[0]
    const value = args._[1]
    const res = set(key, String(value))
    if (args.p) {
      console.log(value);
    } else {
      process.stdout.write(String(value))
    }
    if (!args.n) {
      clipboard.writeSync(String(value))
    }
    break;
  default:
    console.error('wrong args')
    break;
}
