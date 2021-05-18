const Keyv = require('keyv')
const fs = require('fs-extra')
const path = require('path')

const configDir = '~/.config/songbird'
const keyv = new Keyv('sqlite://', path.resolve(configDir, 'store.sqlite3'))

keyv.on('error', err => console.error('Connection error', err))

// will list all the keys defined
const list = (args) => {

}

const set = (val) => {

}

const get = (key) => {
  
}

module.exports = song;
