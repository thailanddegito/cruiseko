class DefaultError extends Error{
    constructor(name) {
        super()
        this.name = name;
    }
    toJSON= () => {
        //let {status,name , error,message} = this;
        return {...this};
    }
}


module.exports = {
    DefaultError,
    INVALID_EMAIL : 'InvalidEmailError',
    DUPLICATED_EMAIL : 'DuplicatedEmailError',
    INVALID_PASSWORD : 'InvalidPasswordError',
    FILEDS_INCOMPLETE : 'FieldsIncompleteError'
}