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
    identityPoolId: 'us-east-1:b44d129c-dfdb-4a95-a765-fe2cdada53a3',
    region: 'us-east-1',
    userPoolId: 'us-east-1_7rGM0mhoJ',
    userPoolWebClientId: '6js5l4cq8g2vdc4l3hod13hr3e',
    Analytics: {
      disabled: true,
    },
  },
  API: {
    endpoints: [{
      name: 'SsegCustomersApi',
      endpoint: 'https://ssi5n34br9.execute-api.us-east-1.amazonaws.com/Prod',
      async custom_header() {
        try {
          const { idToken } = await AmplifyModules.Auth.currentSession();
          return {
            Authorization: idToken.jwtToken
          };
        } catch (e) {
          console.log(e);
          return {};
        }
      }
    }]
  }
});

Vue.use(AmplifyPlugin, AmplifyModules)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
