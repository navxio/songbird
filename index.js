const Keyv = require('keyv')
const path = require('path')
const clipboard = require('clipboardy')


const dbDir = path.resolve(process.env.HOME, '.local/share/songbird', 'store.sqlite3')

// will list all the keys defined
const listAll = async () => {
  let keyv
  try {
    keyv = new Keyv('sqlite://'+ dbDir)
    keyv.on('error', err => console.error('Connection error', err))
    console.log('called listAll')
  } catch(e) {
    console.error('Error', e)
  }
  // keyv.on('error', err => console.error('Connection error', err))
}

const set = async (key, val) => {
  let keyv
  try {
    keyv = new Keyv('sqlite://'+ dbDir)
    keyv.on('error', err => console.error('Connection error', err))
    await keyv.set(key, val)
    clipboard.writeSync(val)
    process.stdout.write(val)
  } catch(e) {
    console.error('Error', e)
  }
  // keyv.on('error', err => console.error('Connection error', err))
}

const get = async (key, clip) => {
  let keyv
  try {
    keyv = new Keyv('sqlite://'+ dbDir)
  keyv.on('error', err => console.error('Connection error', err))
    const val = await keyv.get(key)
    if (val) {
      console.log(val)
      clipboard.writeSync(val)
    } else {
      process.stderr.write('Not found')
    }
  } catch(e) {
    console.error('Error', e)
  }
}

module.exports = { set, get, listAll }
