import Axios from "axios";

const axios = Axios.create({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});


const restService = {
    api: axios
}

export default restService
