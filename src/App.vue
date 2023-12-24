<script setup>
  import AboutUsBlock from './components/AboutUsBlock.vue';
  import FooterBlock from './components/FooterBlock.vue';
  import ClientsBlock from './components/ClientsBlock.vue';
  import CostBlock from './components/CostBlock.vue';
  import FAQBlock from './components/FAQBlock.vue';
  import LastCasesBlock from './components/LastCasesBlock.vue';
  import ReviewsBlock from './components/ReviewsBlock.vue';
  import SupportBlock from './components/SupportBlock.vue';
  import TeamBlock from './components/TeamBlock.vue';
  import TimeSpeedBlock from './components/TimeSpeedBlock.vue';
  import ModalWindow from './components/reused/ModalWindow.vue';
  import FormDivBlock from './components/reused/FormDivBlock.vue';
  import HeaderBlock from './components/HeaderBlock.vue';
</script>

<template>
  <HeaderBlock />

  <main>
    <AboutUsBlock />
    <SupportBlock />
    <CostBlock />
    <TimeSpeedBlock />
    <TeamBlock />
    <LastCasesBlock />
    <ReviewsBlock />
    <ClientsBlock />
    <FAQBlock />
  </main>
  
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
  <FooterBlock />
</template>