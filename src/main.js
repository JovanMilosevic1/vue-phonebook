import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import vueScrollto from "vue-scrollto";
import Materialize from "materialize-css/dist/css/materialize.css";
import Vuelidate from "vuelidate";

Vue.use(Materialize);
Vue.use(Vuelidate)
Vue.use(VueSweetalert2);
Vue.use(vueScrollto, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
