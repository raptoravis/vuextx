import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { profile } from './profile/index';
import { RootState } from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0' // a simple property
  },
  modules: {
    profile
  }
};

export default new Vuex.Store<RootState>(store);
