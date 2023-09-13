// Styles
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";

import { createVuetify } from 'vuetify'
// Vuetify

export default createVuetify({
  components: {
    VDataTable,
    VDataTableServer,
    VDataTableVirtual,
  },
  icons:{
    iconfont: 'fa' || 'md',
    defaultSet: 'mdi',
  },
  theme: { defaultTheme: 'light' },
})
