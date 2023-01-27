<script setup>

import { ref, onMounted, computed } from "vue";
import { useMenuStore } from "../stores/index.js";
import Card from "../components/card.vue"

const store = useMenuStore();

const msg = ref("Welcome to my Vuex Store");
// const getUsers = computed(() => {
//   return store.getUsers;
// });
// const users = computed(() => {
//   return store.users;
// });

const getMenus = computed(() => {
  return store.getMenus;
});
const menus = computed(() => {
  return store.menus;
});

onMounted(() => {
  // store.fetchUsers();
  store.fetchMenus();
});



</script>


<script>
import Modal from '@/components/Modal.vue';

export default {
  name: 'App',
  components: {
    // Modal,
  },
  data() {
    return {
      isModalVisible: true,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};


</script>

<template>
  <view>
    <card class='card' v-for="menu in getMenus" :key="menu.id"
    :ids="menu.id"
    :menuName="menu.name" :menuPrice="menu.priceOnSite"
    @showModalFuncEmit="showModal"
    >
    </card>
  </view>  
  <modal
    v-show="isModalVisible"
    @closeModaFuncEmit="closeModal"
  />
</template>

<style scoped>
  view{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    align-items: flex-start;
    margin-top: 3vh;
    margin-bottom: 3vh;
  }
  .card {
    margin: 1vh;
    align-items: flex-start;
    justify-content: flex-start;
    width: 31%;
    /* 31% */
    height: 400px;
    /* background-color: rgb(230, 230, 230); */
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
</style>