import axios from 'axios';
const apiReclamation = {
    createReclamation: async (reclamation) => {
        const URL = '/reclamation/create';
        return await axios.post(URL,reclamation)
            .then((res) => res)
            .catch((err) => err)
    },

    getALLReclamations: async () =>{
        return await axios.get('/reclamations')
            .then((res) => res)
            .catch((err) => err)
    },

    Traited :  async (id) =>{
        axios.put('/reclamations/Traited/' + id)
            .then(rep => rep)
            .catch(err => err);
    },

    AllTraited :  async (id) =>{
        axios.get('/reclamations/AllTraited')
            .then(rep => rep)
            .catch(err => err);
    }
}

export default apiReclamation;