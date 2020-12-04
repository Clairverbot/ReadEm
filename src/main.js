import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import VueRouter from "vue-router";
import SearchPage from "./pages/SearchPage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";

Vue.use(VueRouter);
Vue.use(Buefy);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/", name: "SearchPage", component: SearchPage },
    { path: "/:username", name: "ProjectsPage", component: ProjectsPage },
  ],
});

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  render: (h) => h(App),
});
