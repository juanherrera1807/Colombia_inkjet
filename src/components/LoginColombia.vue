<template>
  <div class="container-form register">
    <div class="information">
      <div class="info-childs">
        <h2>Bienvenido</h2>
        <p>Para unirte a nuestra comunidad por favor Inicia Sesion con tus datos</p>
        <router-link to="/registro" type="button"  value="Iniciar Sesion" id="showLogin" replace>Iniciar Sesion</router-link>
      </div>
    </div>
    <div class="form-information">
      <div class="form-information-childs">
        <h2>Crear una Cuenta</h2>
        <div class="icons">
         <!--  <font-awesome-icon icon="g" />
          <font-awesome-icon icon="f" /> -->
        </div>
        <p>o usa tu email para registrarte</p>
        <form class="datos">
          <label>
            <font-awesome-icon icon="user-large" />
            <input type="text" v-model="name" placeholder="Nombre Completo">
          </label>
          <label>
            <font-awesome-icon icon="envelope" />
            <input type="email" v-model="email" placeholder="Correo Electronico">
          </label>
          <label>
            <font-awesome-icon icon="lock" />
            <input type="password" v-model="password" placeholder="Contraseña">
          </label>
          <router-link type="submit" to="/menu" value="Registrarse" replace>Registrarse</router-link>
        </form>
      </div>
    </div>
  </div>

</template>

<script>

export default {


data() {
  return {
    name: "",
    email: "",
    password: "",
    loginEmail: "",
    loginPassword: ""
  };
},
  methods: {

  showRegistro() {
      this.$router.replace('/registro',false);
    },
    showMenu() {
      this.$router.replace('/menu',false);
    },
}, 
};

</script>

<style>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body{
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

.info-childs router-link {
  background-color: transparent;
  outline: none;
  border: solid 2px #333;
  border-radius: 20px;
  padding: 10px 20px;
  color: #333;
  cursor: pointer;
  transition: background-color .3s ease;
}

.info-childs router-link:hover {
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

.icons font-awesome-icon {
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
  margin: 0 10px;
  color: #9191bd;
  border: solid thin #9191bd;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,.1);
}

.icons font-awesome-icon:hover {
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

/* .datos label router-link {
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border: none;
  outline: none;
  border-radius: 20px;
  color: #333;
} */

.datos label font-awesome-icon {
  color: #a7a7a7;
}

.datos router-link[type="submit"] {
  background-color: #9191bd;
  color: #fff;
  border-radius: 20px;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 10px;
}

.datos router-link[type="submit"]:hover {
  background-color: #7a7a9a;
}

/*responsive*/
/* 
@media screen and (max-width: 750px) {
template {
  font-size: 12px;
}
}

@media screen and (max-width: 580px) {
template {
  font-size: 10px;
}

.container-form {
  height: auto;
  flex-direction: column;
}

.information {
  width: 100%;
  padding: 20px;
  border-radius: 20px;
}

.form-information {
  width: 100%;
  padding: 20px;
  border-radius: 20px;
}
} */


</style>

/*const btnSignIn = document.getElementById('sign-in');
const btnSignUp = document.getElementById('sign-up');
const formRegister = document.querySelector('.register');
const formLogin = document.querySelector('.login');

const app = new Vue({
el: '#app',
data() {
  return {
    formRegisterVisible: true,
    formLoginVisible: false
  };
},
methods: {
  toggleFormRegister() {
    this.formRegisterVisible = !this.formRegisterVisible;
    this.formLoginVisible = false;
  },
  toggleFormLogin() {
    this.formLoginVisible = !this.formLoginVisible;
    this.formRegisterVisible = false;
  }
}
});

btnSignIn.addEventListener('click', () => {
app.toggleFormLogin();
});

btnSignUp.addEventListener('click', () => {
app.toggleFormRegister();
});
*/