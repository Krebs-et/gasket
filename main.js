// app.js

import renderCards from "./src/views/car/cardsContainer";
import renderForm from "./src/views/modal/renderForm";
import upsertForm from "./src/views/modal/renderForm";
import submitForm from "./src/views/modal/submitForm";


// Escuchamos a que el DOM esté completamente cargado para evitar errores de elementos inexistentes
document.addEventListener("DOMContentLoaded", () => {

    renderCards();
    renderForm();

});