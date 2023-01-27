<template>
  <div class="modal-backdrop">
      <div class="modal">
      <header class="modal-header">
          
          <!-- Modal Menu -->
          
          <button
          type="button"
          class="btn-close"
          @click="close"
          >
          x
          </button>
          
      </header>

      <section class="modal-body">
        <slot name="body">
          <div class="modal-img">

          </div>  
          <div class="modal-input">
            Quantity : 
            <input type="text" v-on:keypress="NumbersOnly">
          </div>
        </slot>
      </section>

      <footer class="modal-footer">
          <slot name="footer">
          <!-- footer -->
          </slot>
          <button
          type="button"
          class="btn-green"
          @click="close"
          >
          Confirm
          </button>
      </footer>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        console.log('siap emit close')
        this.$emit('closeModaFuncEmit');
      },
      NumbersOnly(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
          evt.preventDefault();;
        } else {
          return true;
        }
      }
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    display: flex;
    position: relative;
    border-bottom: 1px solid #eeeeee;
    background-color: rgb(184, 219, 250);
  }

  .modal-footer {
    display: flex;
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .modal-input{
    padding-top: 20px
  }

  .btn-close {
    position: absolute;
    bottom: 0;
    right: 0;
    border: none;
    font-size: 30px;
    cursor: pointer;
    font-weight: bold;
    color: rgb(236, 73, 73);
    background: transparent;
  }

  .btn-green {
    color: white;
    background: rgb(22, 160, 5);
    border: 1px rgb(22, 160, 5);
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 2px;
  }

  .modal-img{
    display: flex;
    width: 25vw;
    height: 40vh;
    background-color: blue;
  }
</style>

  