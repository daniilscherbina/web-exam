<!-- пример использования -->
<!-- <ModalWindow :windowName="'first'" :title="'Tester'" :wrapperName="'test'" :windowHeight="500" :windowWidth="500"></ModalWindow> -->

<script setup>
  import { mapGetters } from 'vuex';
</script>

<template>
  <Transition name="modal-window-visiable-transition">
    <div v-show="getModalWindow" :id="wrapperName" class="modal-window-wrapper">
      <div :id="windowName" class="modal-window">
        <div class="modal-window-close-button" @click="$store.dispatch(closeName, [windowName, wrapperName])"></div>
        <div class="modal-window-head">{{ title }}</div>
        <div class="modal-window-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
  /* $ global */
  export default {
    data() {
      return {
        visible: true,
      }
    },
    props: {
      windowWidth: {
        type: Number,
        required: true
      },
      windowHeight: {
        type: Number,
        required: true
      },
      windowName: {
        type: String,
        required: true
      },
      wrapperName: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      closeName: {
        type: String,
        required: true
      },
      createdName: {
        type: String,
        required: true
      },
    },
    computed: mapGetters([
      "getModalWindow",
    ]),
    created() {
      setTimeout(() => {
        this.$store.dispatch(this.createdName, [this.windowWidth, this.windowHeight])
        }, 500);
    }
  }
</script>

<style>
  .modal-window-visiable-transition-enter-active, .modal-window-visiable-transition-leave-active {
    transition: opacity .5s;
  }

  .modal-window-visiable-transition-enter, .modal-window-visiable-transition-leave-to {
    opacity: 0;
  }

  .modal-window-wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 5000;
  }

  .modal-window {
    position: fixed;
    background-color: #F1F7ED;
    border-radius: 25px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }

  .modal-window-close-button {
    background-color: #ff6058;
    border-radius: 15px;
    position: absolute;
    top: 10px;
    right: 15px;
    width: 25px;
    height: 25px;
    transition: background-color 0.5s ease;
  }

  .modal-window-close-button::after {
    content: 'x';
    margin-left: 9px;
    margin-top: -3px;
    color: white;
  }

  .modal-window-close-button:hover {
    background-color: #a62011;
  }

  .modal-window-head {
    width: 100%;
    height: 45px;
    background-color: #d7d7d7;
    padding-top: 10px;
    padding-left: 30px;
    font-weight: 500;
  }

  .modal-window-content {
    padding: 20px;
  }
</style>