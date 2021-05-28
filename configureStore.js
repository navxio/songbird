const fs = require('fs')
const path = require('path')

const storeDir = path.resolve(process.env.HOME, '.songbird')

const dbPath = path.resolve(process.env.HOME, '.songbird', 'db.sqlite3')

const configureStore = async () => {
  try {
    if (!fs.existsSync(storeDir)) {
      fs.mkdirSync(storeDir)
    }
    const db = require('better-sqlite3')(dbPath)
    const createTable = db.prepare(`create table if not exists store(
        key text not null primary key,
        value text not null
    )`).run()
  } catch(e) {
    console.error('Creating the storage dir failed, please create ~/.local/share/songbird manually')
  } 
}

configureStore()
