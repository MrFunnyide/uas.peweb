import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import Home from "../views/HomeView.vue";
import AllLaptop from "../views/AllLaptop.vue";
import Pinjam from "../views/DataPeminjam.vue";
import Riwayat from "../views/RiwayatPeminjam.vue";
import AllCamera from "../views/AllCamera.vue";
import AllAudio from "../views/AllAudio.vue";
import AllProyektor from "../views/AllProyektor.vue";
import AllTablet from "../views/AllTablet.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/riwayat",
      component: Riwayat,
    },
    {
      path: "/allAudio",
      component: AllAudio,
    },
    {
      path: "/pinjam",
      component: Pinjam,
    },
    {
      path: "/allLaptop",
      component: AllLaptop,
    },
    {
      path: "/allCamera",
      component: AllCamera,
    },
    {
      path: "/allProyektor",
      component: AllProyektor,
    },
    {
      path: "/about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/allTablet",
      component: AllTablet,
    },
    {
      path: "/inputbarang",
      // name: 'databarang',
      component: () => import("../views/InputBarangView.vue"),
    },
  ],
});

export default router;
