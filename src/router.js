import { createRouter, createWebHistory } from "vue-router";
import Catalog from "./components/Catalog.vue";
import Goods from "./components/Goods.vue";
import Signin from "./components/Signin.vue";
import Signup from "./components/Signup.vue";
import Profile from "./components/Profile.vue";
import Basket from "./components/Basket.vue";
import AddProduct from "./components/Addproduct.vue";
import Ordering from "./components/Ordering.vue";
import AdminUser from "./components/AdminUser.vue";
import AdminOrders from "./components/AdminOrders.vue";
import AdminOrders2 from "./components/AdminOrders2.vue";
import AdminOrders3 from "./components/AdminOrders3.vue";
import AdminOrderLook from "./components/AdminOrderLook.vue";
import AdminOrderEdit from "./components/AdminOrderEdit.vue";
import orderHistory from "./components/OrderHistory.vue";
import Delivery from "./components/Delivery.vue";
import Contacts from "./components/Contacts.vue"
import loggedIn from "./middleware/loggedIn"
import loggedAdmin from "./middleware/loggedAdmin";


const routes = [
  {
    path: "/basket",
    component: Basket,
  },
  {
    path: "/contacts",
    component: Contacts,
  },
  {
    path: "/catalog",
    component: Catalog,
  },
  {
    path: "/",
    redirect: "/catalog",
  },
  {
    path: "/category/:title",
    name: "categoryTitle",
    component: Goods,
    props: true,
  },
  {
    path: "/signin",
    component: Signin,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta:{
      middleware:{
        attach:[loggedIn],
      }
    }
  },
  {
    path: "/history",
    name: "history",
    component: orderHistory,
    meta:{
      middleware:{
        attach:[loggedIn],
      }
    }
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/delivery",
    component: Delivery,
  },
  {
    path: "/ordering",
    component: Ordering,
    meta:{
      middleware:{
        attach:[loggedIn],
      }
    }
  },
  {
    path: "/adminUser",
    component: AdminUser,
  },
  {
    path: "/adminOrders",
    component: AdminOrders,
  },
  {
    path: "/adminOrders2",
    component: AdminOrders2,
  },
  {
    path: "/adminOrders3",
    component: AdminOrders3,
  },
  {
    path: "/adminOrderLook",
    component: AdminOrderLook,
  },
  {
    path: "/adminOrderEdit",
    component: AdminOrderEdit,
  },
  {
    path: "/adminpanel/",
    component: () => import("@/components/AdminPanel.vue"),
    children: [
      {
        path: "products",
        component: () => import("@/components/Control.vue"),
      },
      {
        path: "products/add",
        component: AddProduct,
      },
      {
        path: "editProduct/:id",
        name: "createProduct",
        component: AddProduct,
        props: true,
      },
      {
        path: "categoriesAdmin",
        component: () => import("@/components/CategoriesAdmin.vue"),
      },
    ],
    meta:{
      middleware:{
        attach:[loggedAdmin],
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/catalog',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
