import Vuex from 'vuex';

export const store = new Vuex.Store({
  state: {
    isSubmitting: false,
    isCapcha: false,
    resultText: "",
    sendError: false
  },
  getters: {
    getSubmiting(state) {
      return state.isSubmitting;
    },
    getCapcha(state) {
      return state.isCapcha;
    },
    getResultText(state) {
      return state.resultText;
    },
    getSendError(state) {
      return state.sendError;
    },
  },
  mutations: {
    updateSubmiting(state, value) {
      state.isSubmitting = value;
    },
    updateCapcha(state, value) {
      state.isCapcha = value;
    },
    updateResultText(state, value) {
      state.resultText = value;
    },
    updateSendError(state, value) {
      state.sendError = value;
    },
  },
  actions: {
    capchaFalse(ctx) {
      ctx.commit('updateCapcha', false);
    },
    capchaTrue(ctx) {
      ctx.commit('updateCapcha', true);
    },
    formFetch(ctx, formData) {
      var reloadDoomCaptcha = function() {
        var iframe = document.getElementById('doom_captcha');
        iframe.src = iframe.src;
        ctx.commit('updateCapcha', false);
      };
      var clearError = function() {
          setTimeout(() => {
            ctx.commit('updateResultText', "");
            ctx.commit('updateSendError', false);
          }, 1000);
      };

      var submitForm = function() {
        var sendErrorText = (text) => {
          ctx.commit('updateResultText', text);
          ctx.commit('updateSendError', true);
          clearError();
        };

        if (!ctx.getters.getCapcha) {
          sendErrorText("Капча недействительна!");
          return;
        }

        if (!ctx.getters.getSubmiting) {
          ctx.commit('updateResultText', "Отправка данных....");
          ctx.commit('updateSubmiting', true);
          fetch("https://formcarry.com/s/hOd4opxWKz", {
            body: JSON.stringify(formData),
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            method: "POST"
          }).then((response) => {
            if (response.ok) {
              ctx.commit('updateResultText', "Данные успешно отправлены!");
              ctx.commit('updateSendError', false);
            } else {
              sendErrorText("При отправке данных произошла ошибка!");
            }
          }).catch((error) => {
            sendErrorText(String(error));
          }).finally(() => {
            ctx.commit('updateSubmiting', false);
            reloadDoomCaptcha();
          });
        }
      };
      submitForm();
    },
  },
});