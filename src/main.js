import Vue from "vue";
import APP from "./APP";
import router from './router';
import store from 'store';
//后缀可省略；

new Vue({
  el: "#app",
  router:router,
  store:store,
  render: h => h(APP)
});
