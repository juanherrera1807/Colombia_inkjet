import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPrint} from "@fortawesome/free-solid-svg-icons";
import { faBuildingUser } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faUserXmark } from "@fortawesome/free-solid-svg-icons";
import { faGears} from "@fortawesome/free-solid-svg-icons";


library.add(faUserSecret);
library.add(faHouseUser);
library.add(faScrewdriverWrench);
library.add(faFire);
library.add(faBars);
library.add(faPrint);
library.add(faBuildingUser);
library.add(faUserPlus);
library.add(faNewspaper);
library.add(faUserXmark);
library.add(faGears);


loadFonts()


createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(vuetify)
  .mount('#app')