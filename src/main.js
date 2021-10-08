import { createApp } from 'vue'
import App from './App.vue'
import bootstrap from './bootstrap'
import VMask from 'vue-the-mask'
import money from 'v-money'
import router from './router.js'
import BaseButton from './UI/BaseButton.vue'
import BaseCard from './UI/BaseCard.vue'

const app = createApp(App)

app.use(bootstrap);
app.use(VMask);
app.use(money);
app.use(router);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);

app.mount('#app')
