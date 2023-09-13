import { createRouter, createWebHashHistory } from "vue-router";
import login from "../components/LoginColombia.vue";
import registro from "../components/RegisterColombia.vue";
import menu from "../components/MenuPrincipal.vue";
import inventario from "../components/InventarioColombia.vue";
import usuario from "../components/UsuarioColombia.vue";
import impresora from '../components/ImpresoraCol.vue'

const routes = [
   {
    path: "/login",
    name: "login",
    component: login,
},
{
    path: "/registro",
    name: "registro",
    component: registro,
},
{
    path: "/menu",
    name: "menu",
    component: menu,
}, 
{
  path: "/inventario",
  name: "inventario",
  component: inventario,
},
{
  path: "/usuario",
  name: "usuario",
  component: usuario,
},
{
  path: "/impresora",
  name: "impresora",
  component: impresora,
}
];

const router = new createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
