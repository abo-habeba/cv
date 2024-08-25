// stores/user.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    userAll: null,
    isAuth: false,
    isLoader: true,
    popupError: false,
    loadengApi: false,
    errorMessag: null,
    // role: null,
  }),

  actions: {
    setAuthHeaderNew(token) {
      this.loadengApi = true;
      return new Promise((resolve, reject) => {
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const userId = localStorage.user ? JSON.parse(localStorage.user).id : 0;
          axios
            .get(`users/${userId}`)
            .then(res => {
              axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
              this.user = res.data.data;
              this.isLoader = false;
              this.isAuth = true;
              this.loadengApi = false;
              resolve();
            })
            .catch(error => {
              console.log('setAuthHeader error', error);
              if (error.message === 'Request failed with status code 401') {
                this.isAuth = false;
                this.loadengApi = false;
                delete axios.defaults.headers.common['Authorization'];
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                location.reload(true);
              } else {
                this.isAuth = false;
                this.loadengApi = false;
                this.popupError = true;
                this.errorMessag = error.message;
                // console.log("error:", error.message);
              }
              reject();
            });
        } else {
          delete axios.defaults.headers.common['Authorization'];
          this.isAuth = false;
          this.isLoader = false;
          // router.push('/login');
        }
      });
    },
    fetchUser() {
      const userId = localStorage.user ? JSON.parse(localStorage.user).id : 0;
      return new Promise((resolve, reject) => {
        axios
          .get(`users/${userId}`)
          .then(res => {
            this.user = res.data.data;
            this.isLoader = false;
            this.loadengApi = false;
            this.isAuth = true;
            resolve();
          })
          .catch(error => {
            this.isLoader = false;
            this.loadengApi = false;
            if (error.message === 'Request failed with status code 401') {
              this.isAuth = false;
              delete axios.defaults.headers.common['Authorization'];
              localStorage.removeItem('token');
              localStorage.removeItem('user');
            } else {
              this.isLoader = false;
              this.loadengApi = false;
              this.popupError = true;
              this.errorMessag = error.message;
              // console.log("error:", error.message);
            }
            // console.log("Error", error.message);
            reject(error);
          });
      });
    },
  },
  getters: {
    userName: state => (state.user ? state.user.nameName : 'Guest'),
    role: state => (state.user ? state.user.role : 'Guest'),
  },
});
