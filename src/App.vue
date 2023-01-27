<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <div class="wrapper">
      <div class="menu">
        <RouterLink class="item" to="/">MENU</RouterLink>
        <RouterLink class="item" to="/cart">CART</RouterLink>
        <RouterLink class="item" to="/about">ABOUT</RouterLink>
      </div>

        <RouterView />

    </div>
  </main>
</template>

<style scoped>
  

  main {
    /* background-color: rgb(4, 4, 4); */
    flex: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .menu{
    width: 100%;
    height: 10vh;
    background-color: rgb(184, 219, 250);
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .item{
    margin-top: 1vh;
  }
  
  .wrapper{
    width: 50%;
    margin-left: 25%;
    background-color: aliceblue;
  }


</style>
