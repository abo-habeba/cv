// Utilities
import { defineStore } from 'pinia'

export const useLoadeStore = defineStore('loade', {
  state: () => ({
    isLoader: true,
    popupError: false,
    loadengApi: false,
    errorMessag: null,
  }),
})
