import Vue from "vue";
import Router from "vue-router";
import Index from "./components/Index";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import PageNotFound from "./components/PageNotFound";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/add-contact",
      name: "AddContact",
      component: AddContact
    },
    {
      path: "/edit-contact/:id",
      name: "EditContact",
      component: EditContact
    },
    {
      path: "**",
      name: "PageNotFound",
      meta: { title: `Page not found` },
      component: PageNotFound
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
