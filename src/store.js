import Vue from 'vue'
import Vuex from 'vuex'
// import { API } from 'aws-amplify';

Vue.use(Vuex)

// const API_NAME = 'SsegCustomersApi';

export default new Vuex.Store({
    state: {
        menu: true,
        user: null,
        customer: null,
        hashes: {
            user: null,
            customer: null
        },
        selectedContract: null
    },
    mutations: {
        toggleMenu(state) {
            state.menu = (state.menu) ? false : true;
        },
        setMenu(state, menu) {
            state.menu = menu;
        },
        setUser(state, user) {
            state.user = user;
        },
        clearUser(state) {
            state.user = null;
        },
        setCustomer(state, customer) {
            console.log(customer);
            state.customer = customer;
        },
        setSelectedContract(state, contract) {
            state.selectedContract = contract;
        }
    },
    // actions: {
    //   async getCustomer({ commit }, id) {
    //     try {
    //       let response = await API.get(API_NAME, '/customers/' + id, {
    //         headers: {
    //           Accept: 'application/json',
    //           'Content-Type': 'application/json'
    //         }
    //       });
    //       commit('setCustomer', response);
    //       commit('setSelectedContract', response.contracts[0]); // temporary for development
    //     } catch(e) {
    //       console.log('Error: ', e.message);
    //     }
    //   },
    //   async updateCustomer({ commit, state, dispatch }, router) {
    //     var customer = state.customer;
    //     var user = state.user;

    //     try {
    //       console.log('Updating customer...');
    //       let response = await API.put(API_NAME, '/customers/' + customer.id, {
    //         body: {
    //           user: { attributes: user.attributes },
    //           customer: { id: customer.id, email: customer.email, phone: customer.phone, address: customer.address }
    //         },
    //         headers: {
    //           Accept: 'application/json', 'Content-Type': 'application/json'
    //         }
    //       });
    //       if (user.attributes.email !== customer.email) {
    //         router.push({ path: '/auth/signout'});
    //       } else {
    //         await dispatch('getCustomer', user.attributes['custom:external_id']);
    //       }
    //     } catch (e) {
    //       console.log('Error:', e);
    //     }
    //   }
    // }
});