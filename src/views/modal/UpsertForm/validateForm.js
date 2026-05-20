function validateFields(fields) {

    let isValid = true;

    fields.forEach(field => {

        if (!field.value || !field.value.trim()) {
            field.classList.add("is-invalid");
            isValid = false;
        }

    });

    return isValid;
}

export default validateFields;
