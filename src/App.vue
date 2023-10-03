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
         <!-- <v-btn fluid style="height: 300px" @click="iniciarSesion">Iniciar Sesión</v-btn> -->
         <v-dialog width="500">
  <template v-if="!isLoggedIn" v-slot:activator="{ props }">
    <v-btn v-bind="props" text="Iniciar Sesion"> </v-btn>
  </template>

  <template v-if="!isLoggedIn" v-slot:default="{ isActive }">
    
    <v-card>
      <div class="titulo">INICIAR SESION</div>
          <v-img src="../src/assets/logo_colombia.png" height="100" margin="0px" justify-content="center" align-content="center"/>

  
        <div class="container">
          <label for="usuario"><b>Usuario</b></label>
          <input type="text" v-model="loginUser" placeholder="Ingrese Usuario" name="usuario" required />
  
          <label for="clave"><b>Contraseña</b></label>
          <input type="password" v-model="loginPassword" placeholder="Ingrese Contraseña" name="clave" required />
        </div>
        

        <div class="boton" style="background-color:#f1f1f1;">
          <v-btn type="button" class="cancelbtn" @click="isActive.value = false">Cancelar</v-btn>
          <v-spacer></v-spacer>
          <v-btn type="submit" class="login" @click='created' value="Iniciar Sesion">Ingresar</v-btn> 
        </div>
        
    </v-card>
  </template>
</v-dialog>
                      
       </v-app-bar>
 
       <v-main style=" min-height: 100vh;">
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
       </v-main>
     </v-layout>
     
   </v-card>     
        <div v-else>
          <!-- <RegisterColombia @inicio-sesion-exitoso="iniciarSesion" /> -->
          <!-- <Popup @inicio-sesion-exitoso="iniciarSesion" /> -->
          <MenuPrincipal @cerrar-sesion="cerrarSesion" />
        </div>
          

 </template>
 
 <script>
/* import Popup from '../src/components/PopColombia.vue' */
/* import RegisterColombia from '../src/components/RegisterColombia.vue'; */

import db from '../src/firebase/datos';
import { collection, query, getDocs } from 'firebase/firestore'
import MenuPrincipal from '../src/components/MenuPrincipal.vue';

export default {
  
  components: {
    MenuPrincipal, // Agrega el componente en la sección 'components'
  },

  data() {
    
    return {
      loginUser: "",
      loginPassword: "",
      users: [],
      hide: false,
      isLoggedIn: false
    };
  },

   methods: {
    async listar() {
      const q = query(collection(db, 'usuarios'));
      const result = await getDocs(q);
      result.forEach((doc) => {
        this.users.push({
          usuario: doc.data().usuario,
          clave: doc.data().clave,
        });
      });
    },
  
    async created() {
      await this.listar(); // Espera a que se complete la operación de listar
      this.login(); // Llama a login() después de llenar el array users[]
    },
  
    async login() {
      // Verifica que el usuario y la contraseña sean correctos
      console.log(this.users)
      const user = this.users.find(
        (user) =>
          user.usuario === this.loginUser && user.clave === this.loginPassword
      );
      if (user) {
        // Usuario correcto
        this.isLoggedIn = true;
        console.log("Ingreso");
        this.$emit('inicio-sesion-exitoso');
        this.$router.push({ path: "/home" });
      } else {
        // Usuario incorrecto
        alert("Usuario o contraseña incorrecta.");
      }
    }, 
    
  },
}

 </script>
<style scoped>
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

/* Bordered form */
form {
    border: 3px solid #f1f1f1;
  }
  
  /* Full-width inputs */
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  
  /* Set a style for all buttons */
  v-btn {
    background-color: rgb(33, 150, 253);
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    
  }
  
  /* Add a hover effect for buttons */
  button:hover {
    opacity: 0.8;
  }
  
  /* Extra style for the cancel button (red) */
  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
  }

  .login{
    background-color: rgb(33, 150, 253) ;
    color: white;
  }
  
  /* Center the avatar image inside this container */
  /* .imgcontainer {
    width: 100px;
    justify-content: center;
  } */
  
  /* Avatar image */
  /* .avatar {
    justify-items: center;
    border-radius: 50%;
    width: 100px;
  } */
  
  /* Add padding to containers */
  .container {
    padding: 16px;
  }

  .boton {
    padding: 16px;
    display: flex;
  }

  .titulo {
    justify-content: center;
    display: flex;
    margin: 22px;
    font-size: 24px;
}
  
  
  /* Change styles for span and cancel button on extra small screens */
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }
    .cancelbtn {
      width: 100%;
    }
  }

</style>