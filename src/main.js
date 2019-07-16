import Vue from "vue";
import router from './router';
import APP from "./APP";
import store from 'store';
import "./asstes/styles/base.scss";
//后缀可省略；

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(APP)
});
