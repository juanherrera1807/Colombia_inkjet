<template>
 
  <v-app>
    <v-main>
      <menu-principal><h1>BIENVENIDOS</h1></menu-principal>
      
    </v-main>
  </v-app>
</template>

<script>
import MenuPrincipal from '../src/components/MenuPrincipal.vue';
export default {
  name: 'App',

  components: {
    MenuPrincipal
},

  data: () => ({
    //
  }),
}
</script>