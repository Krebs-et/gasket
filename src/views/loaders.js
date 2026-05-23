import renderCards from "./car/cardsContainer";
import renderForm from "./modal/UpsertForm/renderForm"
import carCard from "./car/carCard";
import { maintanceHandler } from "./modal/CarMaintance/maintanceModalHandler";
import { infrastructure } from "../infrastructure/db";
import PouchDB from 'pouchdb/dist/pouchdb.js';

const localDB = infrastructure.db;
const remoteDB = infrastructure.remoteDB;

async function init() {

    PouchDB.sync(localDB, remoteDB, {
        live: true,
        retry: true
    }).on('change', function (info) {
        console.log("Datos sincronizados.");
    }).on('paused', function (err) {
        console.log("Sincronización en pausa.");
    }).on('active', function () {
        console.log("Sincronizando")
    }).on('denied', function (err) {
        // a document failed to replicate (e.g. due to permissions)
    }).on('complete', function (info) {
        // handle complete
    }).on('error', function (err) {
        // handle error
    });



    await renderCards();
    await renderForm();
    await maintanceHandler.loadModal();

}

window.maintanceHandler = maintanceHandler;

export default init;