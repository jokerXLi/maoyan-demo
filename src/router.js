import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/", //一级路由
      component: ()=>import("./views/home/index.vue"),
      children: [
        { path: "films", component:()=>import( "./views/home/films.vue" )},
        { path: "center", component:()=>import( "./views/home/center.vue")},
        { path: "cinemas", component:()=>import( "./views/home/cinemas.vue")},
      
        {
          //默认跳转地址
          path: "",
          redirect: "/films"
        }
      ]
    },

    { path: "/film/:filmId",component:()=>import('./views/film/index.vue') },
    {path:'/city',component:()=>import('./views/city/index.vue')},
    {
      path: "*",
      redirect: "/films"
    }
  ]
});
