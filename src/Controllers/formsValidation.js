
export const validation = {
    required: {
        value: true,
        message: 'This field is required'
        },
        minLength: {
            value: 3,
            message: `Minimum length is 3`
            },
    handleValidation: () => {
        let formIsValid = true;
        Object.keys(this.state).forEach(key => {
            formIsValid = this.state[key].valid && formIsValid;
            });
    }
}

