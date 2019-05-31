// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// Vue.config.productionTip = false

// new Vue({
//     router,
//     store,
//     render: h => h(App)
// }).$mount('#app')



// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

import App from './App.vue'
import router from './router.js'

// Replace this with your project's endpoint
const GRAPHCMS_API = 'https://api-useast.graphcms.com/v1/cjw84winq11ra01hs4vmqb96c/master'

const apolloClient = new ApolloClient({
    link: new HttpLink({ uri: GRAPHCMS_API }),
    cache: new InMemoryCache()
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
})

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//     el: '#app',
//     apolloProvider,
//     router,
//     template: '<App/>',
//     components: { App }
// })

new Vue({
    router,
    // store,
    apolloProvider,
    render: h => h(App)
}).$mount('#app')