import { createWebHashHistory ,createRouter } from "vue-router";
/* import store from '../stores/store' */

import menu from "../App.vue";
import inventario from "../components/InventarioColombia.vue";
import usuario from "../components/UsuarioColombia.vue";
import impresora from '../components/ImpresoraCol.vue';
import registrar from '../components/RegisterColombia.vue'
import empresas from '../components/EmpresasCol.vue'
const routes = [

{
    path: "/menu",
    name: "menu",
    component: menu,
    meta: {requiresAuth: true}
}, 
{
  path: "/inventario",
  name: "inventario",
  component: inventario,
  meta: {requiresAuth: true}
},
{
  path: "/usuario",
  name: "usuario",
  component: usuario,
  meta: {requiresAuth: true}
},
{
  path: "/impresora",
  name: "impresora",
  component: impresora,
  meta: {requiresAuth: true}
},
{
  path: "/registrar",
  name: 'registrar',
  component: registrar,
  meta: {requiresAuth: true}
},
{
  path: "/empresas",
  name: "empresas",
  component: empresas,
  meta: {requiresAuth: true}
}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

/* router.beforeEach((to, from, next) => {

  if (to.meta.requiresAuth && !store.state.isAuthenticated) {
    next('/registrar');
  } else {
    next();
  }
}); */

export default router;
