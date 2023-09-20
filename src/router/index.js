import { createRouter, createWebHashHistory } from "vue-router";
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
},
{
  path: "/registrar",
  name: 'registrar',
  component: registrar,
},
{
  path: "/empresas",
  name: "empresas",
  component: empresas,
}
];

const router = new createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
