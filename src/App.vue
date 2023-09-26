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
         <div>
           <h1>Contrato de Alquiler de Impresoras</h1>
 
           <p>Este contrato de alquiler de impresoras ("Contrato") se celebra entre [Nombre de la Empresa Arrendadora], con domicilio en [Dirección], en adelante denominada "Arrendadora", y [Nombre del Cliente], con domicilio en [Dirección del Cliente], en adelante denominado "Cliente". Ambas partes acuerdan los siguientes términos y condiciones:</p>
 
           <h2>1. Objeto del Contrato</h2>
           <p>La Arrendadora acuerda alquilar al Cliente el siguiente equipo de impresión:</p>
 
           <ul>
             <li>Modelo de impresora: [Nombre o modelo de la impresora]</li>
             <li>Cantidad: [Número de impresoras alquiladas]</li>
           </ul>
 
           <h2>2. Duración del Alquiler</h2>
           <p>El período de alquiler comenzará el [Fecha de inicio del alquiler] y terminará el [Fecha de finalización del alquiler]. El Cliente se compromete a devolver el equipo de impresión en buenas condiciones al finalizar el período de alquiler.</p>
 
           <h2>3. Pago y Tarifas</h2>
           <p>El Cliente acuerda pagar a la Arrendadora la tarifa de alquiler mensual de [Monto del alquiler] antes del [Día de pago] de cada mes. El primer pago se realizará el [Fecha del primer pago].</p>
 
           <h2>4. Mantenimiento y Reparaciones</h2>
           <p>La Arrendadora será responsable de proporcionar el mantenimiento y las reparaciones necesarias para mantener el equipo de impresión en funcionamiento adecuado durante el período de alquiler. El Cliente debe informar cualquier problema o avería a la Arrendadora de inmediato.</p>
 
           <h2>5. Obligaciones del Cliente</h2>
           <p>El Cliente se compromete a:</p>
 
           <ul>
             <li>Utilizar el equipo de impresión de manera adecuada y solo para fines comerciales legítimos.</li>
             <li>No realizar modificaciones o alteraciones en el equipo de impresión sin el consentimiento de la Arrendadora.</li>
             <li>Mantener el equipo en un entorno adecuado y seguro.</li>
           </ul>
 
           <h2>6. Terminación del Contrato</h2>
           <p>Este Contrato puede ser terminado por cualquiera de las partes con previo aviso por escrito con al menos [Número de días de notificación] días de antelación.</p>
 
           <h2>7. Devolución del Equipo</h2>
           <p>Al finalizar el período de alquiler o en caso de terminación anticipada, el Cliente debe devolver el equipo de impresión a la Arrendadora en condiciones de funcionamiento adecuadas, salvo el desgaste normal por uso.</p>
 
           <h2>8. Ley Aplicable</h2>
           <p>Este Contrato se rige por las leyes del [País o Estado] y cualquier disputa relacionada con el mismo estará sujeta a la jurisdicción exclusiva de los tribunales del [País o Estado].</p>
 
           <h2>9. Firma</h2>
           <p>Las partes acuerdan este Contrato mediante sus firmas electrónicas o manuscritas a continuación:</p>
 
           <div class="firmas">
             <div class="firma-cliente">
               <p>Firma del Cliente: ____________________________</p>
               <p>Fecha: ________________</p>
             </div>
 
             <div class="firma-arrendadora">
               <p>Firma de la Arrendadora: ________________________</p>
               <p>Fecha: ________________</p>
             </div>
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
 