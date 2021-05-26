const Keyv = require('keyv')
const path = require('path')

const dbPath = path.resolve(process.env.HOME, '.songbird', 'db.sqlite3')
let keyv

try {
    keyv = new Keyv('sqlite://'+ dbPath)
    keyv.on('error', err => console.error('Connection error', err))
} catch(e) {
    console.error('Connection Error', e)
}

// will list all the keys defined
const listAll = async () => {
  try {
  } catch(e) {
    console.error('Error', e)
  }
}

const set = async (key, val) => {
  try {
    await keyv.set(key, val)
    return val;
  } catch(e) {
    console.error('Error', e)
  }
}

const get = async (key) => {
  try {
    const val = await keyv.get(key)
    if (val) {
      return val;
    } else {
      console.error('Not Found')
      return null;
    }
  } catch(e) {
    console.error('Error', e)
  }
}

const all = async () => {

}
module.exports = { set, get, all }
