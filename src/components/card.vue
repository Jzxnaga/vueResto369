<script>
  export default{
    components:{

    },
    props:
      ['ids','menuName','menuPrice']
    ,
    emits:
      ['showModalFuncEmit']
    ,
    methods:{
      add(a,b,c) {
        console.log('MASUK SINI PAK BOSS BELUM DI EMIT')
        this.$emit("showModalFuncEmit",a,b,c)
      }
    }
  }

</script>
<template>
  <div class="about">
    <div class="card_title">
      <!-- <h3>{{ ids }}.</h3> -->
      <h3>{{ menuName }}</h3>
    </div>
    <div class="card_img">

    </div>
    <div class="card_else">
      <div class="else_info">
        Dikasi Info masse lorem ipsum asd dibalik dsa
      </div>
      <div class="else_container">
          <h3>Rp {{ menuPrice }}</h3>
          <button @click='add(ids,menuName,menuPrice)' class="button"> ADD </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
  .card_title{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card_img{
    display: flex;
    width:100%;
    height: 50%;
    background-color: blue;
  }
  .card_else{
    display: flex;
    width:100%;
    height: 35%;
    background-color: transparent;
  }

  .else_info{
    width: 50%;
    padding: 7px; 
    /* background-color: brown; */
  }
  .else_container{
    width: 50%;
    padding-left: 10px; 
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    /* background-color: brown; */
    margin-right: 10px;
  }
  .button{
    height: 50px;
    width:50px;
  }

    
</style>

