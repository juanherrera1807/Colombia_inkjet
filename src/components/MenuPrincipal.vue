<script setup>
import {ref } from "vue";

const collapsed = ref(true);


</script>

<template>
  <div :class="['menu', collapsed ? 'collapsed' : 'expanded']">
    <div class="header">
      <button class="menu-button" @click="collapsed = !collapsed">
        <font-awesome-icon icon="fa-solid fa-bars" size="2x" />
      </button>
    </div>

    <div class="profile">
      <v-img src="../assets/logo_colombia.png" alt="" />
      <div class="profile-name" v-if="!collapsed">
        Colombia Inkjet
      </div>
    </div>

    <div class="menu-items">
        <div class="icon">
          <font-awesome-icon :icon="['fa-solid', 'fa-house-user']" size="2x" />
          <router-link to="/menu" class="a" v-if="!collapsed" font-awesome-icon :icon="['fa-solid', 'fa-house-user']" size="2x" >Home</router-link>
        </div>
    </div>  
    <div class="menu-items">
        <div class="icon">
          <font-awesome-icon :icon="['fa-solid', 'fa-print']" size="2x" />
          <router-link to="/impresora" class="a" v-if="!collapsed">Impresora</router-link>
        </div>
    </div>  
    <div class="menu-items">
        <div class="icon">
          <font-awesome-icon :icon="['fa-solid', 'fa-building-user']" size="2x" />
          <router-link to="/empresa" class="a" v-if="!collapsed">Empresa</router-link>
        </div>
    </div>  
    <div class="menu-items">
        <div class="icon">
          <font-awesome-icon :icon="['fa-solid', 'fa-user-plus']" size="2x" />
          <router-link to="/usuario" class="a" v-if="!collapsed">Usuario</router-link>
        </div>
    </div> 
    <div class="menu-items">
        <div class="icon">
          <font-awesome-icon :icon="['fa-solid', 'fa-newspaper']" size="2x" />
          <router-link to="/inventario" class="a" v-if="!collapsed">Inventario</router-link>
        </div>
    </div>  
    <div class="menu-items">
        <div class="icon">
          <font-awesome-icon :icon="['fa-solid', 'fa-screwdriver-wrench']" size="2x" />
          <router-link to="/mantenimiento" class="a" v-if="!collapsed">Mantemiento</router-link>
        </div>
    </div> 
    <div class="menu-items">
        <div class="icon">
          <font-awesome-icon :icon="['fa-solid', 'fa-user-xmark']" size="2x" />
          <router-link to="/registro" class="a" v-if="!collapsed">Cerrar Sesion</router-link>
        </div>
    </div>      
  </div> -->
</template>

<style scoped>
.menu {
  background-color: #222;
  color: white;
  height: 100vh;
  transition: width 0.3s;
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  left: 0;
  top: 0;
}

.header {
  display: flex;
  justify-content: end;
}

.menu-button {
  border: none;
  background-color: transparent;
  color: white;
  padding: 10px;
}

/* we will explain what these classes do next! */
.collapsed {
  width: 80px;
}

.expanded {
  width: 230px;
}

.profile {
  padding: 10px;
  text-align: center;
}
.profile img {
  border-radius: 50%;
  min-width: 50px;
  max-width: 150px;
  width: 100%;
}

.profile-name {
  padding: 10px 0;
  font-size: 18px;
}

.menu-items {
  list-style: none;
  padding: 1px;
  margin: 20px;
  align-items: center;
  justify-content: center;

}
.a {
  color: white;
  text-decoration: none;
  display: block;
  align-items: center;
  text-align: center;
}
.icon{
  display: flex;
  align-items: center;
  gap: 20px;
  align-items: center;
  
}

.a:hover {
  background-color: white;
  color: black;
  
}

/* .item .icon {
  width: 80px;
  display: flex;
  justify-content: center;
  
} */
</style>