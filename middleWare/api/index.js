const axios = require('axios');
export default {
    get: options => {
        // Make a request for a user with a given ID
        return axios.get(`http://localhost:4000/${options.entity}`)
            .then(response => {
                // handle success
                console.log(response);

                return response.data.result.workers

            })
            .catch(error => {
                //handle error
                console.error(error)
            })
    },
    getById: options => {
        // Make a request for a user with a given ID
        return axios.get(`http://localhost:4000/${options.entity}/${options.id}`)
            .then(response => {
                // handle success

                console.log(response.data.result);

                return response.data.result

            })
            .catch(error => {
                //handle error
                console.error(error)
            })
    },


    create: options => {
        return axios.post(`http://localhost:4000/${options.entity}`, {worker: options.worker})
            .then((response) => {
                console.log(response);
                return response.data.result.worker
            })
    },
    remove: options => {
        return axios.delete(`http://localhost:4000/${options.entity}/${options.id}`)
            .then((response) => {
                console.log(response);
                return response.data.result.worker
            })

    },
    update: options => {
        return axios.put(`http://localhost:4000/${options.entity}/${options.id}`, {worker: options.worker})
            .then((response) => {
                console.log(response);
                return response.data.result.worker
            })
    }

}