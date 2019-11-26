import axios from 'axios';
import lodash from 'lodash';
export default {
    install: function (Vue) {
      Object.defineProperty(Vue.prototype, '$_', { value: lodash });
      Object.defineProperty(Vue.prototype, '$Axios', { value: axios, writable: true });
    },
  };