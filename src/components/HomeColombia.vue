<template>
    <div class="home">
      <div class="background">
        <!-- Aquí va el logotipo de la empresa -->
        <v-img alt="Logo de la empresa" class="logo"></v-img>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeColombia',
  };
  </script>
  
  <style scoped>
  .home {
    min-height: 100vh; /* Al menos el alto de la pantalla */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* Fondo transparente */
  }
  
  .background {
    background-image: url('@/assets/2.png'); /* Agrega la imagen de fondo */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 80vw; /* Ancho relativo al viewport */
    max-width: 600px; /* Máximo ancho en píxeles */
    height: 80vh; /* Alto relativo al viewport */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; /* Añade posición relativa para elementos internos */
    filter: blur(2px); /* Agrega efecto de desenfoque */
  }
  
  .logo {
    max-width: 100%; /* Ajusta el tamaño del logotipo al contenedor */
    height: auto; /* Ajusta la altura automáticamente */
  }
  </style>
  