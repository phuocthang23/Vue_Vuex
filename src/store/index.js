import Vue from "vue";
import Vuex from "vuex";

Vue.config.devtools = true;
Vue.use(Vuex);

const storeData = {
  state: {
    todo: [
      { id: 1, text: "Learn Vue", completed: true },
      { id: 2, text: "Build something awesome", completed: true },
      { id: 3, text: "Build something awesome", completed: false },
    ],
    auth: {
      isAuthenticated: true,
    },
  },
};

const store = new Vuex.Store(storeData);

export default store;
