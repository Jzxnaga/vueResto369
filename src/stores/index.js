//stores/users.js

import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"

// export const useUserStore = defineStore("user", {
//     state: () => ({
//         users: [],
//     }),
//     getters: {
//       getUsers(state){
//           return state.users
//         }
//     },
//     actions: {
//       async fetchUsers() {
//         try {
//           const data = await axios.get('https://jsonplaceholder.typicode.com/users')
//             this.users = data.data
//           }
//           catch (error) {
//             alert(error)
//             console.log(error)
//         }
//       }
//     },
// })

export const useMenuStore = defineStore("menu", {
  state: () => ({
      menus: [],
      bill_id: null,
      menu_id: null,
      quantity: null,
      statusOn : 'onsite'
  }),
  getters: {
    getMenus(state){
        return state.menus
      }
  },
  actions: {
    async fetchMenus() {
      try {
        const data = await axios.get('http://localhost:4000/resto/menu/all')
          this.menus = data.data
          console.log(data.data)
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
    },
    async addBillMenu(){
      const newPost = {
        menu_id: this.menu_id,
        quantity: this.quantity,
        statusOn : 'onsite'
      }
      try {
        const resp = await axios.post(`http://localhost:4000/resto/bill/addBillMenu/${this.bill_id}`, newPost);
        console.log(resp.data);
      } catch (err) {
          // Handle Error Here
          console.error(err);
      }

    }
  },
})