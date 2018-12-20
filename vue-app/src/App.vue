<template>
  <div id="vue-app">
    <div id="vue-app-nav">
      <router-link to="/index">Index</router-link> |
      <router-link to="/about">About</router-link> | 
      <a href="#">Dashboard</a> | 
      <a href="#flickr">Contacts</a>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#vue-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#vue-app-nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
