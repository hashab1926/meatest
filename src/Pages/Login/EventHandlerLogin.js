const EventHandlerLogin = {
    handleSubmit(event) {
        event.preventDefault();

        if (!this.validator.allValid()) {
            this.validator.showMessages();
            return false;
        }
    },

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
}

export default EventHandlerLogin;