import Api from '../../Helpers/Api';

const ControllerLogin = {
    async handleSubmit(event) {
        try {

            event.preventDefault();

            if (!this.validator.allValid()) {
                this.validator.showMessages();
                return false;
            }
            const payload = {
                email: this.state.email,
                password: this.state.password
            };
            // request api
            const response = await Api.setHeader('Content-Type', 'application/x-www-form-urlencoded')
                .setPayload(payload)
                .post('login');

            const data = response.data;

            sessionStorage.setItem('user_id', data.user_id)
            sessionStorage.setItem('name', data.name)

            this.props.history.push('/course');
        } catch (error) {
            alert(error);
        }
    },

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    },


}

export default ControllerLogin;