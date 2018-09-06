import axios from "axios";

export default {
  backend(endpoint) {
    const baseUrl = "http://localhost:3000/";

    return {
      getData: () => axios.get(baseUrl + endpoint),
      /*
      getKeyScans: ({ id }) => axios.get(`${url}/${id}`),
      getAll: () => axios.get(url),
      update: (toUpdate) =>  axios.put(url,toUpdate),
      create: (toCreate) =>  axios.put(url,toCreate),
      delete: ({ id }) =>  axios.delete(`${url}/${id}`)
      */
    }
  }
}
