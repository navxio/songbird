const fs = require('fs-extra')
const path = require('path')

const storeDir = path.resolve(process.env.HOME, '.songbird')

const createStorageDir = async () => {
  try {
    await fs.ensureDir(storeDir)
  } catch(e) {
    console.error('Creating the storage dir failed, please create ~/.local/share/songbird manually')
  } 
}

createStorageDir()
