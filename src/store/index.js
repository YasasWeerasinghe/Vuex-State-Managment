import { createStore } from 'vuex';
import filterProducts from '../products/filter-products';

const store = createStore({
  state() {
    return {
      user: null,
      //   user: {
      //     firstName: 'Saman',
      //     lastName: 'Perera',
      //     email: 'saman@gmail.com',
      //   },
      // productFilter: null,
      products: null,
    };
  },
  getters: {
    getFilteredProducts(state) {
      return (filter) => filterProducts(filter, state.products);
    },
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    // setProductFilter(state, filter) {
    //   state.productFilter = filter;
    // },
  },
  action: {
    fetchProducts(){

    }, 
  },
});

export default store;
