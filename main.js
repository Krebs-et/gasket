// app.js

import renderCards from "./src/views/car/cardsContainer";
import upsertForm from "./src/views/modal/UpsertForm/upsertForm";
import renderForm from "./src/views/modal/UpsertForm/renderForm"
import submitForm from "./src/views/modal/UpsertForm/submitForm";

document.addEventListener("DOMContentLoaded", () => {

    renderCards();
    renderForm();

});