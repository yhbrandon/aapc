import PouchDB from "pouchdb"

PouchDB.plugin(require("pouchdb-authentication"))

const db = new PouchDB("aapc")

db.setMaxListeners(50)

export default db
