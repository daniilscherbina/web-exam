<template>
  <div class="form">
    <form @submit.prevent="submitForm">
      <input v-model="formData.name" type="text" id="name" name="name" placeholder="Ваше имя"><br>
      <input v-model="formData.tel" type="text" id="phone" name="phone" placeholder="Телефон"><br>
      <input v-model="formData.email" type="text" id="email" name="email" placeholder="E-mail"><br>
      <textarea v-model="formData.com" id="comment" name="comment" placeholder="Ваш комментарий" rows="4" cols="50"></textarea><br>

      <div class="consent">
        <input type="checkbox" id="consent" name="consent" value="consent" class="custom-checkbox">
        <label for="consent" class="consent-lable">Отправляя заявку, я даю согласие на <a href="">обработку своих персональных данных.*</a></label><br>
      </div>
      <iframe id="doom_captcha" class="doom_captcha" src="https://vivirenremoto.github.io/doomcaptcha/captcha.html?version=17&amp;countdown=on&amp;enemies=10" style="width:250px;height:150px;border:2px black solid;"></iframe>
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
        isSubmitting: false,
        isCapcha: false
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
        return (this.name != null || this.name != "")
          && (this.tel != null || this.tel != "")
          && (this.email != null || this.email != "")
          && (this.com != null || this.com != "");
      },
      submitForm() {
        if (this.checkFieldsNotEmpty()) {
          if (this.isCapcha) {
            if (!this.isSubmitting) {
              this.isSubmitting = true;
              fetch("https://formcarry.com/s/hOd4opxWKz", {
                body: JSON.stringify(this.formData),
                headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json"
                },
                method: "POST"
              }).then(function (response) {
                if (response.ok) {
                  console.log("nice");
                } else {
                  console.log("not nice");
                }
              }).catch(function (error) {
                console.log(error);
              }).finally(() => {
                this.isSubmitting = false;
                this.reloadDoomCaptcha();
              });
            }
          } else {
            alert("Капча не действительна");
          }
        } else {
          alert("Введенные данные некорректны");
        }
      }
    }
  };
</script>

<style>
  form {
    color: white;
    max-width: 480px;
    padding: 15px;
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
    margin-left: 15px;
  }

  .form input::placeholder,
  .form input[type="submit"],
  .form textarea::placeholder {
    color: white;
    font-size: 14px;
  }

  .form input[type="submit"] {
    background-color: #F14D34;
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
    width: 20px;
    height: 20px;
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

</style>