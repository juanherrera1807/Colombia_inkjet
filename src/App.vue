<template>
  <v-card>
    <v-layout>
      <!--  <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar
        color= blue
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        
        
        <v-toolbar-title>
          <v-img src="./assets/logo_colombia.png" alt="Logo de Colombia Inkjet" width="50px" class="profile">
          </v-img>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn>
          <span>Cerrar Sesion</span>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
          <span class="material-symbols-outlined">exit_to_app</span>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
      >
      <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi mdi-printer" title="Impresora" value="impresora" to=/impresora></v-list-item>
          <v-list-item prepend-icon="mdi mdi-monitor-multiple" title="Empresa" value="empresa" to=/empresa></v-list-item>
          <v-list-item prepend-icon="mdi mdi-account-plus" title="Usuario" value="usuario" to=/usuario></v-list-item>
          <v-list-item prepend-icon="mdi mdi-clipboard-text" title="Inventario" value="inventario" to=/inventario></v-list-item>
          <v-list-item prepend-icon="mdi mdi-cogs" title="Mantenimiento" value="mantenimiento" to=/mantenimiento></v-list-item>
          
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh; width: 100vw">
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-card>
  <!-- <v-app>
    <MenuPrincial />
    <v-content>
      <router-view></router-view>
    </v-content>
      </v-app> -->
</template>

<script>
/* import MenuPrincial from '@/components/MenuPrincipal.vue' */

export default {
  /* name: 'App',
  components: { MenuPrincial },
  data: () => ({
    //
  }), */
  data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>
<style>



</style>