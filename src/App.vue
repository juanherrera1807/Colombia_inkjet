<template>
  <v-card v-if="!isLoggedIn">
     <v-layout>
       <v-app-bar
         color= blue
         prominent
       >
         <v-app-bar scroll-behavior="elevate" scroll-threshold="1000"></v-app-bar>
         
         
         <v-toolbar-title>
           <v-img src="./assets/logo_colombia.png" alt="Logo de Colombia Inkjet" width="50px" class="profile">
           </v-img>
         </v-toolbar-title>
         <v-spacer></v-spacer>
         <v-btn fluid style="height: 300px" @click="iniciarSesion">Iniciar Sesión</v-btn>
       </v-app-bar>
 
       <v-main>
        <div class="parent">
          <div class="div1"> </div>
          <div class="div2"> 
            <v-img src="@/assets/prueba.png"></v-img>
          </div>
          <div class="div3"> 

          </div>
          <div class="div4">  
            <h1 class="tituloUno">Simplificamos  la  Impresión  para  tu  Negocio.</h1>
            <p>Maximiza tu productividad con nuestras impresoras de alta calidad y olvida las preocupaciones 
              gracias a nuestro servicio integral de mantenimiento de cartuchos. En Colombia Inkjet, 
              somos tu socio estratégico en Santander para todas tus necesidades de impresión y tinta. 
              Con nosotros, puedes concentrarte en lo que mejor haces, mientras nosotros nos ocupamos 
              de mantener tus impresoras funcionando sin problemas y tus documentos impresos con la máxima calidad.</p>
          </div>
        </div>  
 <!-- Mostrar el componente de inicio de sesión si no está autenticado -->
        
         
 
       </v-main>
     </v-layout>
     
   </v-card>     
        <div v-else>
          <RegisterColombia @inicio-sesion-exitoso="iniciarSesion" />
        </div>

 </template>
 
 <script>
 
 import RegisterColombia from '../src/components/RegisterColombia.vue';

 
 export default {
   name: 'App',
 
   components: {
      
      RegisterColombia,
  
    
 
   },
 
   data: () => ({
     isLoggedIn: false, // Inicializa la variable isLoggedIn en false
   }),
 
   methods: {
     iniciarSesion() {
       // Aquí puedes realizar la lógica de autenticación, por ejemplo, verificar las credenciales del usuario.
       // Si la autenticación es exitosa, establece isLoggedIn en true y Vue Router navegará a "/registrar".
       this.isLoggedIn = true;
     },
 
     cerrarSesion() {
       // Realiza la lógica de cierre de sesión aquí (por ejemplo, reinicia variables, elimina tokens, etc.)
       // Después de cerrar sesión, puedes redirigir al usuario a donde desees.
       this.isLoggedIn = false;
     },
   },
 };
 </script>
<style>
.parent {
display: grid;
grid-template-columns: 0.5fr repeat(10, 1fr) 0.5fr;
grid-template-rows: 0fr repeat(5, 0.9fr) 0.2fr;
grid-column-gap: 5px;
grid-row-gap: 5px;
}

.div1 { grid-area: 1 / 1 / 8 / 13; }
.div2 { grid-area: 2 / 6 / 7 / 13; }
.div3 { grid-area: 6 / 2 / 7 / 6; }
.div4 { grid-area: 2 / 2 / 6 / 6; } 
.tituloUno{color: rgb(33, 150, 253);font-size: 35pt;text-align: start; padding-bottom: 4%;font-family: Spinnaker;}

p{text-align:start;padding-top: 2%;font-size: 12pt;font-family: Spinnaker;}

</style>