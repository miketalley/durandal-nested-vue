<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button class="primary button ui">Primary Button</button>
    <button class="secondary button ui">Secondary Button</button>
    <button class="basic button ui">Basic Button</button>
    <button class="button ui">Button</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
