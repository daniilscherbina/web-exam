<script setup>
  import SupportTile from './SupportTile.vue';
</script>

<template>
  <div class="support-tiles-block row">
  <SupportTile class="col-md-6 col-lg-3" :image-src="'https://raw.githubusercontent.com/daniilscherbina/web-exam/40212ddbd57dd3a1e1658e95304edd7727d99b74/src/assets/img/icons/support/support1.svg'"
    :com-text="'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда не теряются.'" 
    :number-text="'01'"
    :heading-text="'Постановка задачи по Email'" 
   />
   <SupportTile class="col-md-6 col-lg-3" :image-src="'https://raw.githubusercontent.com/daniilscherbina/web-exam/40212ddbd57dd3a1e1658e95304edd7727d99b74/src/assets/img/icons/support/support2.svg'"
    :com-text="'Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете через браузер. Более 122737 тикетов уже выполнено!'" 
    :number-text="'02'"
    :heading-text="'Система Helpdesk – отчетность, прозрачность'" 
   />
   <SupportTile class="col-md-6 col-lg-3" :image-src="'https://raw.githubusercontent.com/daniilscherbina/web-exam/40212ddbd57dd3a1e1658e95304edd7727d99b74/src/assets/img/icons/support/support3.svg'"
    :com-text="'Возможность организации расширенной техподдержки с 6:00 до 22:00 без выходных.'" 
    :number-text="'03'"
    :heading-text="'Расширенная техническая поддержка'" 
   />
   <SupportTile class="col-md-6 col-lg-3" :image-src="'https://raw.githubusercontent.com/daniilscherbina/web-exam/40212ddbd57dd3a1e1658e95304edd7727d99b74/src/assets/img/icons/support/support4.svg'"
    :com-text="'Ваш менеджер проекта всегда в курсе текущего состояния проекта и в любой момент готов ответить на любые вопросы.'" 
    :number-text="'04'"
    :heading-text="'Персональный менеджер проекта'" 
   />
   <SupportTile class="col-md-6 col-lg-3" :image-src="'https://raw.githubusercontent.com/daniilscherbina/web-exam/40212ddbd57dd3a1e1658e95304edd7727d99b74/src/assets/img/icons/support/support5.svg'"
    :com-text="'Безналичный расчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, Paypal.'" 
    :number-text="'05'"
    :heading-text="'Удобные способы оплаты'" 
   />
   <SupportTile class="col-md-6 col-lg-3" :image-src="'https://raw.githubusercontent.com/daniilscherbina/web-exam/40212ddbd57dd3a1e1658e95304edd7727d99b74/src/assets/img/icons/support/support6.svg'"
    :com-text="'Работа в рамках соглашений о конфиденциальности и об уровне качества работ.'" 
    :number-text="'06'"
    :heading-text="'Работаем с SLA и NDA'" 
   />
   <SupportTile class="col-md-6 col-lg-3" :image-src="'https://raw.githubusercontent.com/daniilscherbina/web-exam/40212ddbd57dd3a1e1658e95304edd7727d99b74/src/assets/img/icons/support/support7.svg'"
    :com-text="'Надежные штатные специалисты, никаких фрилансеров.'" 
    :number-text="'07'"
    :heading-text="'Штатные специалисты'" 
   />
   <SupportTile class="col-md-6 col-lg-3" :image-src="'https://raw.githubusercontent.com/daniilscherbina/web-exam/40212ddbd57dd3a1e1658e95304edd7727d99b74/src/assets/img/icons/support/support8.svg'"
    :com-text="'Консультации по телефону, скайпу, в месенджерах.'" 
    :number-text="'08'"
    :heading-text="'Удобные каналы связи'" 
   />
  </div>
</template>

<style>
  .support-tiles-block {
    margin: 0 auto;
    position: relative;
    z-index: 5;
  }
</style>