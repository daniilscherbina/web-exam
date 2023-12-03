<template>
  <div class="form">
    <form>
      <input type="text" id="name" name="name" placeholder="Ваше имя"><br>
      <input type="text" id="phone" name="phone" placeholder="Телефон"><br>
      <input type="text" id="email" name="email" placeholder="E-mail"><br>
      <textarea id="comment" name="comment" placeholder="Ваш комментарий" rows="4" cols="50"></textarea><br>

      <div class="consent">
        <input type="checkbox" id="consent" name="consent" value="consent" class="custom-checkbox">
        <label for="consent" class="consent-lable">Отправляя заявку, я даю согласие на <a href="">обработку своих персональных данных.*</a></label><br>
      </div>
      <iframe id="doom_captcha" class="doom_captcha" src="https://vivirenremoto.github.io/doomcaptcha/captcha.html?version=17&amp;countdown=on&amp;enemies=10" style="width:300px;height:150px;border:2px black solid;"></iframe>
      <input type="submit" value="Свяжитесь с нами">
    </form>
  </div>
</template>

<script>
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
    height: 60px;
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