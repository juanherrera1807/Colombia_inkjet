<template>
    <nav>
        <v-toolbar flat app>
            <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <span class="material-symbols-outlined">dehaze</span>
            </v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Colombia Inkjet</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="grey">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <span class="material-symbols-outlined">exit_to_app</span>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class="success">
            <v-list>
                <v-list-title>
                    <v-list-title-action class="menu-items">
                        <v-icon class="icon">
                            <font-awesome-icon :icon="['fa-solid', 'fa-print']" size="0.5x" />
                        </v-icon>
                    </v-list-title-action>
                    <v-list-title-content>
                        <v-list-title-title class="menu-items">
                            <router-link to="/impresora" class="a">Impresora</router-link>
                        </v-list-title-title>
                    </v-list-title-content>
                </v-list-title>
                <v-spacer>
                </v-spacer>
                <v-list-title>
                    <v-list-title-action class="menu-items">
                        <v-icon class="icon">
                            <font-awesome-icon :icon="['fa-solid', 'fa-building-user']" size="0.5x" />
                        </v-icon>
                    </v-list-title-action>
                    <v-list-title-content>
                        <v-list-title-title class="menu-items">
                            <router-link to="/impresora" class="a">Empresa</router-link>
                        </v-list-title-title>
                    </v-list-title-content>
                </v-list-title>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>

export default {
   
    data (){
        return {
            drawer: false,
        }
    }
}



</script>
<style>
.menu-items {
  list-style: none;
  padding: 1px;
  margin: 20px;
  align-items: center;
  justify-content: center;
  border: auto 1px solid;

}

.icon{
  
  display: center;
  align-items: center;
  gap: 20px;

  
  
}



</style>