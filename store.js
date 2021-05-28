const path = require('path')

const dbPath = path.resolve(process.env.HOME, '.songbird', 'db.sqlite3')

let db

const store = {}
try {
    db = require('better-sqlite3')(dbPath)
} catch(e) {
    console.log('Connection error:', e)
    process.exit(1)
}

store.get = (key) => {
    const fetchVal = db.prepare('select value from store where key = ?')
    const result = fetchVal.get(key)
    const val = result?.value;
    return val;
}

store.set = (key, val) => {
    const setVal = db.prepare('replace into store values(?, ?)')
    setVal.run(key, val)
    return val;
}

store.all = () => {
    const allSet = db.prepare('select * from store')
    const result = allSet.all()
    return result;
}

module.exports = store;
