import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import Notifications from 'vue-notification';

Vue.use(Notifications);

Vue.config.productionTip = false

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:fe330371-558f-49f2-b16e-b03420d178a8',
    region: 'us-east-1',
    userPoolId: 'us-east-1_O4Fn9z21X',
    userPoolWebClientId: '5cbrv27cb4ph041dmgbtmfrf1n',
    Analytics: {
      disabled: true,
    },
  },
});

Vue.use(AmplifyPlugin, AmplifyModules)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
