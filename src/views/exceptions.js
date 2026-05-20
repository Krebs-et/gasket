function InvalidDataException (fieldName, message){
    this.fieldName = fieldName;
    this.message = message;
}

export default InvalidDataException;