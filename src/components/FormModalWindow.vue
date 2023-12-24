<script setup>
  import ModalWindow from './reused/ModalWindow.vue';
  import FormDivBlock from './reused/FormDivBlock.vue';
</script>

<template>
  <ModalWindow 
    :windowName="'modal_form_window'" 
    :title="'Оставьте заявку'" 
    :wrapperName="'modal_form_wrapper'"
    :windowWidth="360"
    :windowHeight="620"
    :createdName="'setModalSize'"
    :closeName="'closeModal'"
  >
    <FormDivBlock :black="true" />
  </ModalWindow>
</template>