import axios from 'axios';
import { ActionTree } from 'vuex';
import { RootState } from '../types';
import { ProfileState, User } from './types';

export const actions: ActionTree<ProfileState, RootState> = {
  fetchData({ commit }): any {
    axios({
      url: 'https://jsonplaceholder.typicode.com/users'
    }).then(
      (response: any) => {
        const payload: User = response && response.data && response.data[0];
        commit('profileLoaded', payload);
      },
      (error: any) => {
        console.log(error);
        commit('profileError');
      }
    );
  }
};
