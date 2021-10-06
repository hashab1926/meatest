import SimpleReactValidator from 'simple-react-validator';


function Validator(props) {
    const defaultConfig = {
        element: (message, className) => <div className={`text-danger text-italic ${className}`}>{message}</div>, // element message
        messages: {
            // default  messages
            required: ':attribute harus diisi',
            email: ':attribute tidak valid',
            min: ':attribute minimal :min karatker',
            max: ':attribute maksimal :min karatker',

        }
    };

    Object.assign(defaultConfig, props);
    return new SimpleReactValidator(defaultConfig);
}

export default Validator;
