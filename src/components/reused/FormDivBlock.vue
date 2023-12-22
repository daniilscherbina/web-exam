<script setup>
  import { mapGetters, mapActions } from 'vuex';
</script>

<template>
  <div class="form" v-bind:class="{ 'form-white' : !black, 'form-black' : black }">
    <form @submit.prevent="$store.dispatch('formFetch', formData)">
      <input v-model="formData.name" type="text" id="name" name="name" placeholder="Ваше имя" required><br>
      <input v-model="formData.tel" pattern="[0-9]-[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" id="phone" name="phone" placeholder="Телефон" title="x-xxx-xxx-xxxx" required><br>
      <input v-model="formData.email" type="email" id="email" name="email" placeholder="E-mail" required><br>
      <textarea v-model="formData.com" id="comment" name="comment" placeholder="Ваш комментарий" rows="4" cols="50" required></textarea><br>

      <div class="consent">
        <input type="checkbox" id="consent" name="consent" value="consent" class="custom-checkbox" required>
        <label for="consent" class="consent-lable">Отправляя заявку, я даю согласие на <a href="">обработку своих персональных данных.*</a></label><br>
      </div>
      <iframe id="doom_captcha" class="doom_captcha" src="https://vivirenremoto.github.io/doomcaptcha/captcha.html?version=17&amp;countdown=on&amp;enemies=10" style="width:250px;height:150px;border:2px black solid;"></iframe>
      <Transition name="fade">
        <div v-if="getResultText != ''" v-bind:class="{ 'succes': !getSendError, 'text-danger': getSendError, 'waiting-animation': getSubmiting }"><p>{{ getResultText }}</p></div>
      </Transition>
      <input type="submit" value="Свяжитесь с нами" :disabled="getSubmiting">
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          name: "",
          email: "",
          tel: "",
          com: ""
        },
      };
    },
    props: {
      black: {
        type: Boolean,
        required: true
      },
    },
    computed: mapGetters([
      "getConsents",
      "getSubmiting",
      "getCapcha",
      "getResultText",
      "getSendError",
    ]),
    created() {
      var checkCapcha = (event) => {
        if (event.origin === 'https://vivirenremoto.github.io') {
          if (event.data === 1) {
            this.capchaTrue();
          } else {
            this.capchaFalse();
          }
        }
      };
      window.addEventListener('message', checkCapcha);
    },
    methods: mapActions(['formFetch', 'capchaTrue', 'capchaFalse']),
  };
</script>

<style>

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
  .form-white {
    color: white;
  }

  .form-black {
    color: black;
  }

  .form {
    max-width: 480px;
    padding: 15px;
  }

  .text-danger {
    color: red;
  }

  .succes {
    color: green;
  }

  .form input[type="text"],
  .form input[type="email"],
  .form input[type="tel"], 
  .form input[type="submit"],
  .form textarea {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: 500;
    padding-left: 15px;
  }

  .form-white input[type="text"],
  .form-white input[type="email"],
  .form-white input[type="tel"], 
  .form-white input[type="submit"],
  .form-white textarea {
    color: white;
  }

  .form-black input[type="text"],
  .form-black input[type="email"],
  .form-black input[type="tel"],
  .form-black textarea {
    color: black;
    height: 30px;
    font-size: 12px;
  }

  .consent-lable {
    font-size: 12px;
    margin-left: 15px;width: 80%;
  }

  .form-white input::placeholder,
  .form-white input[type="submit"],
  .form-white textarea::placeholder {
    color: white;
    font-size: 14px;
  }

  .form-black input::placeholder,
  .form-black textarea::placeholder {
    color: black;
    font-size: 12px;
  }

  .form input[type="submit"] {
    background-color: #F14D34;
    border: 2px solid rgba(255, 255, 255, 50%);
    margin-top: 15px;
  }

  .form-black input[type="submit"] {
    background-color: #F14D34;
    border: 2px solid rgba(255, 255, 255, 50%);
    margin-top: 5px;
  }

  .form-white input[type="text"],
  .form-white input[type="email"],
  .form-white input[type="tel"],
  .form-white textarea {
    border: 1px solid rgba(255, 255, 255, 30%);
    background-color: transparent;
  }

  .form-black input[type="text"],
  .form-black input[type="email"],
  .form-black input[type="tel"],
  .form-black textarea {
    border: 1px solid rgba(0, 0, 0, 30%);
    background-color: transparent;
  }

  .form textarea {
    height: 120px;
    resize: none;
    padding-top: 15px;
  }

  .form-black textarea {
    height: 80px;
    padding-top: 15px;
  }

  .consent {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .form a {
    color: red;
  }

  .custom-checkbox {
    float: left;
    width: 20px;
    height: 20px;
    -webkit-appearance: none; /* Remove default appearance */
    -moz-appearance: none;
    appearance: none;
    border: 2px solid #999;
    border-radius: 4px;
    outline: none;
    transition: background-image 0.3s ease-in-out;
  }

  .custom-checkbox:checked {
      background-image: url("../../assets/img/cheackbox.svg");
      background-repeat: no-repeat;
      background-position: center;
   }

   .form-black .custom-checkbox:checked {
      background-image: url("../../assets/img/cheackbox_black.svg");
      background-repeat: no-repeat;
      background-position: center;
   }

  input[type="submit"]:hover {
    background-color: #45a049;
  }

  .form-black .doom_captcha {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .waiting-animation {
    width: 100%;
    display: flex;
  }

  .waiting-animation p {
    margin-left: 15px;
  }

  .waiting-animation::before {
    content: '';
    box-sizing: border-box;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: rgb(12, 223, 23);
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>