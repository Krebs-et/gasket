import PouchDB from 'pouchdb/dist/pouchdb.js';



export const infrastructure = {
    remoteDB: new PouchDB('http://krebs:password@localhost:5984/remote_gasket'),
    db: new PouchDB("gasket")
}

