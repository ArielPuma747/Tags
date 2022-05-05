import axios from 'axios';

export const config = {
  baseURL: 'http://localhost:3000', // json-server
};

const ApiService = (() => {
  const service = axios.create(config);
  return {
    get: function (url, params = {}) {
      return service.get(url, params);
    },
    post: function (url, data) {
      return service.post(url, data);
    },
    delete: function (url, data) {
        return service.delete(url, data);
    },
    patch: function (url, data) {
        return service.patch(url, data);
    },
  };
})();

export default ApiService;