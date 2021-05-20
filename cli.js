#!/usr/bin/env node

const { program } = require('commander')
const { get, set, listAll } = require('.')

program.version('0.0.2')
  .option('-l, --list', 'list all key/value pairs')
  .usage('[options] <key> [value]')
  .arguments('<key> [value]')
  .description('get or fetch the snippet', {
    key: 'string: unique name of the key',
    value: 'string: value to be set'
  })
  .action(( key, value) => {
    if (key && !value) {
      get(key).then(() => 
        process.exit(1)
      )
    }
    if ( key && value) {
      set(key, value).then(() => process.exit(1))
    }
  })
  .parse(process.argv)

const options = program.opts()
if (options.list) {
  listAll()
}
