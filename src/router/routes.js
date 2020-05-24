import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import Admin from "@/pages/UserProfile.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";
import LoginComponent from "../pages/Login.vue"
import store from '../store/store';



const ifNotAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next('/login')
    return
  }
  next()
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
  
}

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardLayout,
    beforeEnter: ifAuthenticated,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
        beforeEnter: ifAuthenticated,
      },

      {
        path: "admin",
        name: "admin",
        component: Admin,
        beforeEnter: ifAuthenticated,
      },
      {
        path: "icons",
        name: "icons",
        component: Icons,
        beforeEnter: ifAuthenticated,
      },
      {
        path: "maps",
        name: "maps",
        component: Maps,
        beforeEnter: ifAuthenticated,
      },
      {
        path: "typography",
        name: "typography",
        component: Typography,
        beforeEnter: ifAuthenticated,
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList,
        beforeEnter: ifAuthenticated,
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: LoginComponent,
    beforeEnter: ifNotAuthenticated
},
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
