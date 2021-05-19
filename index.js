const Keyv = require('keyv')
const fs = require('fs-extra')
const path = require('path')

const storeDir = path.resolve(process.env.HOME, '.local/share/songbird')
const dbDir = path.resolve(process.env.HOME, '.local/share/songbird', 'store.sqlite3')

// will list all the keys defined
const list = async () => {
  let keyv
  try {
    await fs.ensureDir(storeDir)
    keyv = new Keyv('sqlite://'+ dbDir)
  } catch(e) {
    console.error('Error', e)
  }
  keyv.on('error', err => console.error('Connection error', err))
}

const set = (key, val) => {
  let keyv
  try {
    await fs.ensureDir(storeDir)
    keyv = new Keyv('sqlite://'+ dbDir)
  } catch(e) {
    console.error('Error', e)
  }
  keyv.on('error', err => console.error('Connection error', err))
}

const get = (key) => {
  let keyv
  try {
    await fs.ensureDir(storeDir)
    keyv = new Keyv('sqlite://'+ dbDir)
  } catch(e) {
    console.error('Error', e)
  }
  keyv.on('error', err => console.error('Connection error', err))
}

module.exports = { set, get, list }
