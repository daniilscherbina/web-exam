import Vuex from 'vuex';
import { router } from '../main';

export const store = new Vuex.Store({
  state: {
    isSubmitting: false,
    isCapcha: false,
    resultText: "",
    sendError: false,
    modalWindow: false,
    modalWindowWidth: 0,
    modalWindowHeight: 0,
    modalWindowX: 0,
    modalWindowY: 0,
  },
  getters: {
    getModalWindow(state) {
      return state.modalWindow;
    },
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
    getModalWindowWidth(state) {
      return state.modalWindowWidth;
    },
    getModalWindowHeight(state) {
      return state.modalWindowHeight;
    },
    getModalWindowX(state) {
      return state.modalWindowX;
    },
    getModalWindowY(state) {
      return state.modalWindowY;
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
    updateModal(state, value) {
      state.modalWindow = value;
    },
    updateModalWidth(state, value) {
      state.modalWindowWidth = value;
    },
    updateModalHeight(state, value) {
      state.modalWindowHeight = value;
    },
    updateModalX(state, value) {
      state.modalWindowX = value;
    },
    updateModalY(state, value) {
      state.modalWindowY = value;
    }
  },
  actions: {
    setModalSize(ctx, ar) {
      ctx.commit('updateModalWidth', ar[0]);
      ctx.commit('updateModalHeight', ar[1]);
    },

    openModal(ctx, ar) {
      var windowModal = document.getElementById(ar[0]);
      windowModal.style.setProperty('width', ctx.getters.getModalWindowWidth + "px");
      windowModal.style.setProperty('height', ctx.getters.getModalWindowHeight + "px");
      var x = window.innerWidth / 2 - ctx.getters.getModalWindowWidth / 2;
      var y = window.innerHeight / 2 - ctx.getters.getModalWindowHeight / 2;
      windowModal.style.setProperty('top', y + "px");
      windowModal.style.setProperty('left', x + "px");
      ctx.commit('updateModal', true);
    },

    closeModal(ctx, ar) {
      var animate = function({timing, draw, duration, exit}) {
        let start = performance.now();

        requestAnimationFrame(function animate(time) {
          let timeFraction = (time - start) / duration;
          if (timeFraction > 1) timeFraction = 1;

          let progress = timing(timeFraction);

          draw(progress);

          if (timeFraction < 1) {
            requestAnimationFrame(animate);
          } else {
            exit();
          }

        })
      };
      
      var wrapper = document.getElementById(ar[1]);
      var window = document.getElementById(ar[0]);
      animate({
        duration: 500,
        timing: function(timeFraction) {
          return timeFraction;
        },
        draw: (progress) => {
          var y = wrapper.getBoundingClientRect().height / 2 - ctx.getters.getModalWindowWidth / 2;
          var x = wrapper.getBoundingClientRect().width / 2 - ctx.getters.getModalWindowHeight / 2;
          x = (x + progress * 1000);
          window.style.left = x + "px";
          window.style.top = (y + Math.sin(x * 0.01) * 50) + "px";
        },
        exit: () => {
          router.push('/');
          ctx.commit('updateModal', false);
        }
      });

    },

    capchaFalse(ctx) {
      ctx.commit('updateCapcha', false);
    },
    capchaTrue(ctx) {
      ctx.commit('updateCapcha', true);
    },

    modalFalse(ctx) {
      ctx.commit('updateModal', false);
    },
    modalTrue(ctx) {
      ctx.commit('updateModal', true);
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
    saveFormData(ctx, data) {
      localStorage.setItem("formData", JSON.stringify(data));
    }
  },
});
