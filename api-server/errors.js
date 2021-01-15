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
    NOT_FOUND : 'NotFoundError',
    INVALID_EMAIL : 'InvalidEmailError',
    INVALID_INPUT : 'InvalidInputError',
    DUPLICATED_EMAIL : 'DuplicatedEmailError',
    DUPLICATED_USERNAME : 'DuplicatedUsernameError',
    INVALID_PASSWORD : 'InvalidPasswordError',
    FILEDS_INCOMPLETE : 'FieldsIncompleteError',
    PERMISSION_ERROR : 'PermissionError',
    PENDING_APPROVE : 'PendingApproveError',
    NOT_APPROVE : 'NotApproveError',
    NOT_PUBLISHED : 'NotPublishedError',
    ALREADY_REVIEW : 'AlreadyReviewError',
}