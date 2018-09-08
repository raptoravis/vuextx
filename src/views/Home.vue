<template>
  <div class="home">
    <img src="../assets/logo.png">
    {{x}}
    {{y}}
    {{z}}
    <h1 ref="message">{{ message }}</h1>
    <button @click="showMessage"> log me </button>
    <tt></tt>
    <UserDetail></UserDetail>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import tt from '@/components/transitiontest.vue'; // @ is an alias to /src
import UserDetail from '@/components/user-detail.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    tt,
    UserDetail
  }
})
export default class Home extends Vue {
  message = 'Hello World!';
  x = 1;
  y = 2;

  showMessage() {
    console.log(this);
    this.x = 10;
    console.log(this.z);
    // alert(this.message);
  }

  get z() {
    return this.x + this.y;
  }

  created() {
    setTimeout(() => {
      const msg: any = this.$refs.message;
      msg.innerText = 'This is a test';
    }, 2000);

    setTimeout(() => {
      this.message = 'This is another test';
    }, 4000);
  }
}
</script>
