<template>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :sort-by="[{ key: 'numero', order: 'asc' }]"
      class="elevation-1"
      style="height: 100%;
      width: 100%"
      :search="search"
    >
      <template v-slot:top>


        <v-toolbar
          flat
        >
          <v-toolbar-title>Visitas de mantenimiento</v-toolbar-title>
          
          <v-spacer></v-spacer>

          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>

          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>          

          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                    >
                      <v-text-field
                        v-model="editedItem.observacion"
                        label="observacion"
                      ></v-text-field>
                    </v-col>
                    
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="close"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="save"
                >
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5" color="red">¿Esta seguro que desea eliminar este item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancelar</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK.Borrar</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }" >
        <v-icon activator="{ props }"
          size="small"
          class="me-2"
          @click="editItem(item.raw)"
        >
          mdi-pencil
        </v-icon>
        
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </template>
  <script>
  import db from '../firebase/datos.js';
  import {collection, addDoc, query, getDocs, updateDoc, doc, deleteDoc} from 'firebase/firestore'
    export default {
      data: () => ({
        dialog: false,
        dialogDelete: false,
        search: '',
        headers: [
          { title: 'Nit', align: 'start', sortable: false, key: 'nit',},
          { title: 'Nombre', align: 'start', key: 'nombre' },
          { title: 'Fecha ultima visita', align: 'start', key: 'fecha' },
          { title: 'observacion', align:'end', key: 'observacion'},
          { title: 'Actions', key: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
          keyId: 0,
          nombre: ' ',
          observacion: ' ',
          fecha: '',
        
        },
        defaultItem: {
          nit: ' ',
          nombre: ' ',
          observacion: '',
            fecha:'',
        },
      }),
  
      computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'Editar empresa' : 'Editar empresa'
        },
        getDate(){
            const currentDate = new Date();
            return `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;
        }
      },
  
      watch: {
        dialog (val) {
          val || this.close()
        },
        dialogDelete (val) {
          val || this.closeDelete()
        },
      },
  
      created () {
        this.listar()
      },
  
      methods: {
        initialize () {
          this.desserts = [
            {
              nit: ' ',
              nombre: ' ',
             observacion: ' ',
             fecha:''
            },
          ]
        },
        async listar() {
        const q = query(collection(db, 'empresas'));
        const result = await getDocs(q);
        result.forEach((doc) => {
          console.log("datos", doc.data());
          console.log('id', doc.id);
          this.desserts.push({
            keyId: doc.id,
            nit: doc.data().nit,
            nombre: doc.data().nombre,
            observacion: doc.data().observacion,
            fecha: doc.data().fecha
            
          })
        });
      },
        async actualizarDato() {
          console.log(this.editedItem.keyId)
          const ref = doc(db, 'empresas',this.editedItem.keyId);
          await updateDoc(ref,{
            observacion: this.editedItem.observacion,
            fecha: this.getDate
           
          })
          this.limpiar()
        this.listar()
          .then(console.log('actualizacion hecha'))
          .catch(function(error){
          console.log(error)})
        
        },
  
        async createUsuario(){
          const colRef= collection(db, 'empresas');
          console.log( this.editedItem.numero," ",this.editedItem.serial," ",this.editedItem.nombre," ",this.editedItem.marca," ",this.editedItem.mantenimiento )
          const dataObj ={
            nit: this.editedItem.nit,
            nombre: this.editedItem.nombre,
            observacion: this.editedItem.observacion,
            fecha: this.editedItem.fecha
        }
        const docRef= await addDoc(colRef, dataObj)
        console.log(docRef.id)
        this.limpiar()
        this.listar()
        },

        async limpiar(){
            this.desserts = []

        },

            async borrarItem (){
            const ref = doc(db, 'empresas',this.editedItem.keyId);
            await deleteDoc(ref)
            .then(console.log('eliminado'))
            .catch(function(error){
            console.log(error)})
        },

        editItem (item) {
          this.editedIndex = this.desserts.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialog = true
        },
  
        deleteItem (item) {
          this.editedIndex = this.desserts.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialogDelete = true
        },
  
        deleteItemConfirm () {
          this.desserts.splice(this.editedIndex, 1)
          this.closeDelete()
          this.borrarItem()
        },
  
        close () {
          this.dialog = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
        closeDelete () {
          this.dialogDelete = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
        save () {
          if (this.editedIndex > -1) {
            Object.assign(this.desserts[this.editedIndex], this.editedItem)
            this.actualizarDato()
          } else {
            this.desserts.push(this.editedItem)
            this.createUsuario()
          }
          this.close()
        },
    },
    }
</script>

<style>



</style>