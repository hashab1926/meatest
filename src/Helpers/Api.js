import axios from 'axios';
import qs from 'querystring';
class Api {
    #API_URL = 'https://staging.komunitasmea.com/api';

    constructor() {
        this.headers = {};
        this.data = {};
        this.withCredentials = true;
        this.config = {};
    }

    setHeader(config, value) {
        if (typeof config === 'object')
            Object.assign(this.headers, config);
        else {
            const newHeader = { [config]: value };
            Object.assign(this.headers, newHeader);
        }

        return this;
    }

    setPayload(data) {
        this.data = data;
        return this;
    }

    async get(endpoint, objQueryString) {
        try {

            objQueryString = qs.stringify(objQueryString);
            this.config = {
                method: 'get',
                url: `${this.#API_URL}/${endpoint}?${objQueryString}`,
                withCredentials: this.withCredentials,
            };

            console.log(this.config);
            // request api
            const response = await axios(this.config);

            //check respose
            if (response.data.status !== 200)
                throw response.data.message;

            // return data
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    async post(endpoint, payload = null) {
        try {
            this.config = {
                method: 'post',
                url: `${this.#API_URL}/${endpoint}`,
                headers: this.headers,
                withCredentials: true,
                data: qs.stringify(payload ?? this.data)
            };

            // request api 
            const response = await axios(this.config);

            //check respose
            if (response.data.status !== 200)
                throw response.data.message;

            // if success
            return response.data;
        } catch (error) {
            throw error
        }

    }


}
export default (new Api());