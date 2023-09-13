<template>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :sort-by="[{ key: 'calories', order: 'asc' }]"
      class="elevation-1"
      style="height: 100%;
      width: 100%"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Usuarios</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="props"
              >
                Nuevo Usuario
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.rol"
                        label="Rol"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.id"
                        label="Id"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.usuario"
                        label="Usuario"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.clave"
                        label="Clave"
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
              <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          size="small"
          class="me-2"
          @click="editItem(item.raw)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          size="small"
          @click="deleteItem(item.raw)"
        >
          mdi-delete
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
    import {collection, getDocs, query, addDoc, updateDoc, doc} from 'firebase/firestore'

    export default {
      data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
          {
            align: 'start',
            sortable: false,
            key: 'rol',
          },
          { title: 'Id', key: 'id' },
          { title: 'Usuario', key: 'usuario' },
          { title: 'Clave', key: 'clave' },
          { title: 'Actions', key: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
          rol: 0,  
          id: 0,
          usuario: 0,
          clave: 0,
        },
        defaultItem: {
          rol: 0, 
          id: 0,
          usuario: 0,
          clave: 0,
        },
      }),
  
      computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'Nuevo Usuario' : 'Editar Usuario'
        },
      },
  
      watch: {
        dialog (val) {
          val || this.close()
        },
        dialogDelete (val) {
          val || this.closeDelete()
        },
      },

      created (){
        this.listarUsuarios()
        
      },

      methods: {

             async listarUsuarios(){
                const q = query(collection(db,"usuarios"));
                const resul = await getDocs(q);
                resul.forEach((doc) => {
                  console.log("datos",doc.data());
                  this.desserts.push(doc.data());
                })

            },

            async createUser(){
              const colRef = collection(db, 'usuarios');
              console.log(this.editedItem.rol,"",this.editedItem.id,"",this.editedItem.usuario,"",this.editedItem.clave,"",)
              const dataObj = {
                rol: this.editedItem.rol,
                id: this.editedItem.id,
                usuario: this.editedItem.usuario,
                clave: this.editedItem.clave
              }
              const docRef = await addDoc(colRef, dataObj)
              console.log ('Document was created with: ID:', docRef.id)

              

            },

            async updateUser() {
              const washingtonRef = doc(db, "usuarios", "4y5YHez2aX6k7BoTrdTR");
              // Set the "capital" field of the city 'DC'
              await updateDoc(washingtonRef, {
                  rol: "nuevos",
                  id:"3",
                  usuario: "Acevedo",
                  clave: "1234567",
                });
            },
            

        initialize () {
          this.desserts = [
            {
              rol: 'Administrador',
              usuario: 'Juan',
              clave: '1234',
              id: 1,
            
            },
            {
              rol: 'Tecnico',
              usuario: 'Javier',
              clave: '1234',
              id: 2,
            }, 
            /* {
              name: 'Eclair',
              calories: 262,
              fat: 16.0,
              carbs: 23,
              protein: 6.0,
            },
            {
              name: 'Cupcake',
              calories: 305,
              fat: 3.7,
              carbs: 67,
              protein: 4.3,
            },
            {
              name: 'Gingerbread',
              calories: 356,
              fat: 16.0,
              carbs: 49,
              protein: 3.9,
            },
            {
              name: 'Jelly bean',
              calories: 375,
              fat: 0.0,
              carbs: 94,
              protein: 0.0,
            },
            {
              name: 'Lollipop',
              calories: 392,
              fat: 0.2,
              carbs: 98,
              protein: 0,
            },
            {
              name: 'Honeycomb',
              calories: 408,
              fat: 3.2,
              carbs: 87,
              protein: 6.5,
            },
            {
              name: 'Donut',
              calories: 452,
              fat: 25.0,
              carbs: 51,
              protein: 4.9,
            },
            {
              name: 'KitKat',
              calories: 518,
              fat: 26.0,
              carbs: 65,
              protein: 7,
            }, */
          ]
        },
  
        editItem (item) {
          this.editedIndex = this.desserts.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialog = true
          this.updateUser();
          
        },
  
        deleteItem (item) {
          this.editedIndex = this.desserts.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialogDelete = true
        },
  
        deleteItemConfirm () {
          this.desserts.splice(this.editedIndex, 1)
          this.closeDelete()
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
          } else {
            this.desserts.push(this.editedItem)
            this.createUser();
            
          }
          this.close()
        },
      },
    }
  </script>


<style>



</style>