<template>
    <div class="container">
        <div v-if="profile.user">
            <h2>{{version}}</h2>
            <p>
                Full name: {{ fullName }}
            </p>
            <p>
                Email: {{ email }}
            </p>
        </div>
        <div v-if="profile.error">
            Oops an error occured
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { State, Action, Getter } from 'vuex-class';
import Component from 'vue-class-component';
import { ProfileState, User } from '../vuexts/profile/types';
const namespace: string = 'profile';

@Component
export default class UserDetail extends Vue {
  @State('version') version!: string;

  @State('profile') profile!: ProfileState;

  @Action('fetchData', { namespace })
  fetchData: any;

  @Getter('fullName', { namespace })
  fullName!: string;

  mounted() {
    // fetching data as soon as the component's been mounted
    this.fetchData();
  }

  // computed variable based on user's email
  get email() {
    const user = this.profile && this.profile.user;
    return (user && user.email) || '';
  }
}
</script>
