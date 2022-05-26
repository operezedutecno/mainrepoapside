import Vue from 'vue'
import App from './App.vue'
import AlertApside from 'alert-apside'
//import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.use(AlertApside)

Vue.config.productionTip = false

const app = new Vue({
  // vuetify,
  render: h => h(App),
}).$mount('#app')

console.log("Vue", app);