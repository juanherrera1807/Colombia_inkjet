<template>
  <div class="body">
  <div class="container-form login">
    <div class="information">
      <div class="info-childs">
        <h2>Bienvenido Nuevamente!!</h2>
        <p>Para unirte a nuestra comunidad por favor Inicia Sesion con tus datos</p>
      </div>
    </div>
    <div class="form-information">
      <div class="form-information-childs">
        <h2>Iniciar Sesion</h2>
        <div class="icons">
          <i class='mdi mdi-google'></i>
          <i class='mdi mdi-facebook'></i>
          <i class='mdi mdi-linkedin' ></i>
        </div>
        <p>o Iniciar Sesion con una cuenta</p>
        <form class="datos">
          <label>
            <i class='bx bx-envelope'></i>
            <input v-model="loginEmail" placeholder="Correo Electronico">
          </label>
          <label>
            <i class='bx bx-lock-alt'></i>
            <input v-model="loginPassword" type="password" placeholder="Contraseña">
          </label>
          <input @click='iniciarSesion' type="submit" value="Iniciar Sesion">
        </form>
      </div>
    </div>
  </div>
  </div>
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
        this.$router.push({ path: "/menu" });
      } else {
        // Usuario incorrecto
        alert("Usuario o contraseña incorrecta.");
      }
    }, 
    
    iniciarSesion() {
      // Lógica de autenticación aquí
      // Después de autenticar con éxito, emite un evento
      this.$emit('inicio-sesion-exitoso');
    },
  },
}
</script>
<style scoped>
/* Estilos globales */
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

.body{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: rgba(43,190,245,0.5);
    background-size: cover;
}

.container-form {
    display: flex;
    border-radius: 20px;
    box-shadow: 0 5px 7px rgba(0,0,0,.1);
    height: 500px;
    max-width: 900px;
    transition: all 1s ease;
    margin: 10px;
}

.information {
    width: 40%;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: rgba(43, 190, 245, 0.5);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.info-childs {
    width: 100%;
    padding: 0 45px;
}

.info-childs h2 {
    font-size: 2.5rem;
    color: #333;
}

.info-childs p {
    margin: 15px 0 ;
    color: #555;
}

.info-childs input {
    background-color: transparent;
    outline: none;
    border: solid 2px #333;
    border-radius: 20px;
    padding: 10px 20px;
    color: #333;
    cursor: pointer;
    transition: background-color .3s ease;
}

.info-childs input:hover {
    background-color: #9191bd;
    border: none;
    color: white;
    box-shadow: 0 2px 5px rgba(0,0,0,.1);
}

.form-information {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    text-align: center;
    background-color: #f8f8f8;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}

.form-information-childs {
    padding: 0 30px;
}

.form-information-childs h2 {
    color: #333;
    font-size:  2rem;
}

.form-information-childs p {
    color: #555;
}

.icons {
    margin: 15px 0;

}

.icons i {
    border-radius: 50%;
    padding: 15px;
    cursor: pointer;
    margin: 0 10px;
    color: #9191bd;
    border: solid thin #9191bd;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,.1);
}

.icons i:hover {
    background-color:  rgb(31, 193, 221);
    color: white;
}

.datos {
    margin: 30px 0 0 0;
}

.datos label {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    border-radius: 20px;
    padding: 0 10px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,.1); 
}

.datos label input {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    border: none;
    outline: none;
    border-radius: 20px;
    color: #333;
}

.datos label i {
    color: #a7a7a7;
}

.datos input[type="submit"] {
    background-color: #9191bd;
    color: #fff;
    border-radius: 20px;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    margin-top: 10px;
}

.datos input[type="submit"]:hover {
    background-color: #7a7a9a;
}

.hide {
    position: absolute;
    transform: translateY(-300%);
}

/*responsive*/

@media screen and (max-width: 750px) {
    html {
        font-size: 12px;
    }
}

@media screen and (max-width: 580px) {
    html {
        font-size: 10px;
    }

    .container-form {
        height: auto;
        flex-direction: column;
    }

    .information {
        width: 100%;
        padding: 20px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0;
    }

    .form-information {
        width: 100%;
        padding: 20px;
        border-bottom-left-radius: 20px;
        border-top-right-radius: 0;
    }
}


</style>
