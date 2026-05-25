import {infrastructure} from "../../infrastructure/db.js"

const db = infrastructure.db

export const maintanceInterface = {

    put: (doc) => {
        try {
            return db.put(doc);
        } catch (err) {
            console.log("Error al actualizar el servicio" + err);
            throw err;
        }
    },

    post: (doc) => {
        try {
            return db.post(doc);
        } catch (err) {
            console.log("Error al crear el servicio" + err);
            throw err;
        }
    },

    getDoc: (id) => {
        try {
            return db.get(id);
        } catch (err) {
            console.log("Error al recuperar el servicio: " + err);
            throw err;
        }
    },

    getAllDocs: (id) => {
        try {
            return db.allDocs({
                include_docs: true,
            });
        } catch (error) {
            console.log("Error al recuperar la información de los servicios." + error);
        }
    },

    removeDoc:  (doc) => {
        try {
            return db.remove(doc);
        } catch (error) {
            console.error("Error al eliminar el servicio: " + error);
        }
    }


}
