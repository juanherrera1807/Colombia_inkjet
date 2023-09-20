<template>
  <v-container class="container-form login hide">
    <v-row>
      
      <v-col cols="6" class="form-information">
        <div class="form-information-childs">
          <h2>Iniciar Sesión</h2>
          <div class="icons">
            <!-- <v-icon>mdi-g</v-icon>
            <v-icon>mdi-f</v-icon> -->
          </div>
          <p>o ...</p>
          <v-form class="datos">
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="loginEmail" label="Correo Electrónico" outlined></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="loginPassword" label="Contraseña" type="password" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-btn @click='created' color="primary">Iniciar Sesión</v-btn>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import db from '../firebase/datos.js';
import { collection, query, getDocs } from 'firebase/firestore'

export default {
  name: "LoginComponent",
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
      users: [],
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
          user.usuario === this.loginEmail && user.clave === this.loginPassword
      );
      if (user) {
        // Usuario correcto
        console.log("Ingreso");
        this.$router.push({ path: "/impresora" });
      } else {
        // Usuario incorrecto
        alert("Usuario o contraseña incorrecta.");
      }
    }, 
  },
}
</script>