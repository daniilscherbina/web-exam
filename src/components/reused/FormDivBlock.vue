<template>
  <div class="form">
    <form @submit.prevent="submitForm">
      <input v-model="formData.name" type="text" id="name" name="name" placeholder="Ваше имя"><br>
      <input v-model="formData.tel" type="text" id="phone" name="phone" placeholder="Телефон"><br>
      <input v-model="formData.email" type="text" id="email" name="email" placeholder="E-mail"><br>
      <textarea v-model="formData.com" id="comment" name="comment" placeholder="Ваш комментарий" rows="4" cols="50"></textarea><br>

      <div class="consent">
        <input v-model="isConsent" type="checkbox" id="consent" name="consent" value="consent" class="custom-checkbox">
        <label for="consent" class="consent-lable">Отправляя заявку, я даю согласие на <a href="">обработку своих персональных данных.*</a></label><br>
      </div>
      <iframe id="doom_captcha" class="doom_captcha" src="https://vivirenremoto.github.io/doomcaptcha/captcha.html?version=17&amp;countdown=on&amp;enemies=10" style="width:250px;height:150px;border:2px black solid;"></iframe>
      <div v-bind:class="{ 'succes': !sendError, 'text-danger': sendError, 'waiting-animation':isSubmitting }"><p>{{ resultText }}</p></div>
      <input type="submit" value="Свяжитесь с нами" :disabled="isSubmitting">
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
        isConsent: false,
        isSubmitting: false,
        isCapcha: false,
        resultText: "",
        sendError: false
      };
    },
    created() {
      window.addEventListener('message', this.checkCapcha);
    },
    methods: {
      checkCapcha(event) {
        if (event.origin === 'https://vivirenremoto.github.io') {
          if (event.data === 1) {
            this.isCapcha = true;
          } else {
            this.isCapcha = false;
          }
        }
      },
      reloadDoomCaptcha() {
        var iframe = document.getElementById('doom_captcha');
        iframe.src = iframe.src;
        this.isCapcha = false;
      },
      checkFieldsNotEmpty() {
        return (
          this.formData.name !== "" &&
          this.formData.tel !== "" &&
          this.formData.email !== "" &&
          this.formData.com !== ""
        );
      },
      submitForm() {
        if (this.checkFieldsNotEmpty()) {
          if (this.isCapcha) {
            if (this.isConsent) {
              if (!this.isSubmitting) {

                if (!/^\S+@\S+\.\S+$/.test(this.formData.email)) {
                  this.resultText = "Введенный email некорректен!";
                  this.sendError = true;
                  return;
                }

                this.isSubmitting = true;
                this.resultText = "Отправка данных";
                fetch("https://formcarry.com/s/hOd4opxWKz", {
                  body: JSON.stringify(this.formData),
                  headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                  },
                  method: "POST"
                }).then((response) => {
                  if (response.ok) {
                    this.resultText = "Данные успешно отправлены!";
                    this.sendError = false;
                  } else {
                    this.resultText = "При отправке данных произошла ошибка!";
                    this.sendError = true;
                  }
                }).catch((error) => {
                  this.resultText = String(error);
                }).finally(() => {
                  this.isSubmitting = false;
                  this.reloadDoomCaptcha();
                });
              }
            } else {
              this.resultText = "Отсутствует соглашение!";
              this.sendError = true;
            }
          } else {
            this.resultText = "Капча недействительна!";
            this.sendError = true;
          }
        } else {
          this.resultText = "Введенные данные некорректны!";
          this.sendError = true;
        }
      }
    }
  };
</script>

<style>
  .form {
    color: white;
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
    color: white;
    font-weight: 500;
    padding-left: 15px;
  }

  .consent-lable {
    font-size: 12px;
    margin-left: 15px;width: 80%;
  }

  .form input::placeholder,
  .form input[type="submit"],
  .form textarea::placeholder {
    color: white;
    font-size: 14px;
  }

  .form input[type="submit"] {
    background-color: #F14D34;
    margin-top: 15px;
  }

  .form input[type="text"],
  .form input[type="email"],
  .form input[type="tel"],
  .form textarea {
    border: 1px solid rgba(255, 255, 255, 30%);
    background-color: transparent;
  }

  .form textarea {
    height: 120px;
    resize: none;
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

  input[type="submit"]:hover {
    background-color: #45a049;
  }

  .doom_captcha {
    margin-top: 15px;
    margin-bottom: 15px;
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