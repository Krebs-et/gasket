import { db } from "./db";

db.info().then(function (info) {
    console.log('Connected to:', info.db_name);
}).catch(function (err) {
    console.log('Connection error:', err);
});


export const carInterface = {

    put: (doc) => {
        try {
            return db.put(doc);
        } catch (err) {
            console.log("Error al crear el vehículo" + err);
            throw err;
        }
    },

    post: (doc) => {
        try {
            return db.post(doc);
        } catch (err) {
            console.log("Error al crear el vehículo" + err);
            throw err;
        }
    },

    getDoc: (id) => {
        try {
            return db.get(id);
        } catch (err) {
            console.log("Error al recuperar el objeto: " + err);
        }
    },

    getAllDocs: (id) => {
        try {
            return db.allDocs({
                include_docs: true,
                attachments: true
            });
        } catch (error) {
            console.log("Error al recuperar la información de los objetos." + error);
        }
    },

    getInfo: () => {
        try {
            const response = db.info()
            console.log(response);
        }
        catch (err) {
            console.error("Error al recuperar la información de la base de datos." + err);
        }

    },

    removeDoc:  (doc) => {
        try {
            console.log(doc);
            return db.remove(doc);
        } catch (error) {
            console.error("Error al eliminar el auto: " + error);
        }
    }


}
