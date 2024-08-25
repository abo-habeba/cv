// toast.js
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const toastOptions = {
  autoClose: 3000,
  // ...
};

export default {
  install(app) {
    app.use(Vue3Toasity, toastOptions);
  }
};
