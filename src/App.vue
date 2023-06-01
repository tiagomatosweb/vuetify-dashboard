<template>
  <v-app theme="">
    <v-navigation-drawer v-model="drawer">
      Test
    </v-navigation-drawer>

    <v-app-bar floating class="border-b" density="comfortable">
      <v-container class="py-0">
        <div class="d-flex align-center">

          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3_624)">
              <path d="M12.8321 17.2961C11.6834 17.8234 10.4104 18.1249 9.06262 18.1249C4.05747 18.1249 0 14.0674 0 9.06262C0 4.05747 4.05747 0 9.06262 0C10.4104 0 11.6832 0.301464 12.8321 0.828735C10.7006 2.92727 9.375 5.84209 9.375 9.06262C9.375 12.2827 10.7006 15.1976 12.8321 17.2961Z" fill="#27272A"/>
              <path d="M29.1711 12.8333C27.0726 10.7007 24.1578 9.37497 20.9373 9.37497C17.7172 9.37497 14.8023 10.7006 12.7037 12.8333C12.1765 11.6835 11.875 10.4104 11.875 9.0626C11.875 4.05745 15.9325 -2.47955e-05 20.9373 -2.47955e-05C25.9424 -2.47955e-05 29.9999 4.05745 29.9999 9.0626C29.9999 10.4103 29.6984 11.6831 29.1711 12.8333Z" fill="#27272A"/>
              <path d="M20.9372 30C19.5894 30 18.3166 29.6985 17.1665 29.1713C19.2991 27.0728 20.6248 24.1579 20.6248 20.9374C20.6248 17.7173 19.2992 14.8024 17.1665 12.7039C18.3163 12.1766 19.5894 11.8751 20.9372 11.8751C25.9423 11.8751 29.9998 15.9326 29.9998 20.9374C29.9998 25.9425 25.9423 30 20.9372 30Z" fill="#27272A"/>
              <path d="M9.06262 30C4.05747 30 0 25.9425 0 20.9374C0 19.5896 0.301465 18.3168 0.828735 17.1679C2.92727 19.2994 5.84209 20.625 9.06262 20.625C12.2827 20.625 15.1976 19.2994 17.2961 17.1679C17.8234 18.3166 18.1249 19.5896 18.1249 20.9374C18.1249 25.9425 14.0674 30 9.06262 30Z" fill="#27272A"/>
            </g>
            <defs>
              <clipPath id="clip0_3_624">
                <rect width="30" height="30" fill="white" transform="matrix(1 0 0 -1 0 30)"/>
              </clipPath>
            </defs>
          </svg>


          <div class="ml-3 d-flex">
            <v-btn variant="tonal">
              Home
            </v-btn>

            <v-btn variant="text">
              Serviços
            </v-btn>

            <v-btn variant="text">
              Clientes
            </v-btn>

            <v-btn variant="text">
              Consultas
            </v-btn>
          </div>

          <v-spacer />

          <v-btn icon>
            <v-icon icon="mdi-bell-outline" />
          </v-btn>

          <v-menu flat>
            <template #activator="{ props }">
              <v-btn v-bind="props" icon>
                <v-avatar size="small">
                  <v-img src="https://i.pinimg.com/236x/b7/02/52/b70252344f68cd6035cf0225fcc32d6f---day-blog-tips.jpg" />
                </v-avatar>
              </v-btn>
            </template>

            <v-card width="250px">
             <v-list nav density="compact">
               <v-list-item>Item 1</v-list-item>
             </v-list>
            </v-card>

          </v-menu>
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <h4 class="mb-2">Buttons</h4>
        <v-btn color="primary">Primary</v-btn>
        <v-btn color="secondary" class="ml-2">Secondary</v-btn>
        <v-btn color="success" class="ml-2">Success</v-btn>
        <v-btn color="warning" class="ml-2">Warning</v-btn>
        <v-btn color="error" class="ml-2">Error</v-btn>
        <v-btn color="info" class="ml-2">Info</v-btn>

        <br>
        <br>

        <v-btn color="primary" variant="tonal">Primary</v-btn>
        <v-btn color="secondary" variant="tonal" class="ml-2">Secondary</v-btn>
        <v-btn color="success" variant="tonal" class="ml-2">Success</v-btn>
        <v-btn color="warning" variant="tonal" class="ml-2">Warning</v-btn>
        <v-btn color="error" variant="tonal" class="ml-2">Error</v-btn>
        <v-btn color="info" variant="tonal" class="ml-2">Info</v-btn>

        <br><br><br>

        <h5 class="mb-2">Drawer</h5>
        <v-btn @click="drawer = !drawer">Open</v-btn>

        <br><br><br>

        <h5 class="mb-2">Dropdown</h5>
        <v-menu width="200px">
          <template #activator="{ props }">
            <v-btn v-bind="props" color="primary">Dropdown</v-btn>
          </template>

          <v-card>
            <v-list density="compact">
              <v-list-item to="http://google.com">
                Item 1
              </v-list-item>
              <v-list-item>Item 2</v-list-item>
              <v-list-item>Item 3</v-list-item>
              <v-list-item>Item 4</v-list-item>
            </v-list>
          </v-card>
        </v-menu>

        <br><br><br>

        <h5 class="mb-2">Card</h5>
        <v-card>
          <v-card-item>
            <v-card-title>Novos usuários</v-card-title>
            <v-card-subtitle>Veja os novos usuários</v-card-subtitle>
          </v-card-item>

          <v-card-text>
            Body
          </v-card-text>

          <v-card-actions class="border-t">
            <v-spacer />
            <v-btn>Deletar</v-btn>
          </v-card-actions>
        </v-card>

        <br><br><br>

        <h5 class="mb-2">Table</h5>
        <v-card>
          <v-table>
            <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Fulano</td>
              <td>fulano@gmail.com</td>
              <td>
                <v-menu>
                  <template #activator="{ props }">
                    <v-btn v-bind="props" icon="mdi-dots-vertical" color="text" size="small" />
                  </template>

                  <v-card>
                    <v-list density="compact" nav>
                      <v-list-item to="http://google.com">
                        <template #prepend>
                          <v-icon icon="mdi-square-edit-outline" size="small" />
                        </template>

                        <v-list-item-title>Editar</v-list-item-title>
                      </v-list-item>

                      <v-list-item to="http://google.com">
                        <template #prepend>
                          <v-icon color="error" icon="mdi-delete-outline" size="small" />
                        </template>

                        <v-list-item-title>Deletar</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-menu>
              </td>
            </tr>
            </tbody>
          </v-table>
        </v-card>
        <br>
        <br>

        <h5 class="mb-2">Formulário</h5>
        <v-label>Nome</v-label>
        <v-text-field />
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
// import { useTheme } from 'vuetify';
// const theme = useTheme()
// console.log(theme);

import { ref } from 'vue';

const drawer = ref(false)
</script>
