define([
  'plugins/router'
], (router) => {

  class VueApp {
    attached() {
      require(['vue-app/bundle'], (vueApp) => {
        this.vueApp = vueApp;
        this.handleVueRoutes();
        router.on('router:navigation:complete', () => {
          this.handleVueRoutes();
        });
      });
    }

    handleVueRoutes() {
      const hash = window.location.hash;
      const modifiedHash = hash.replace('#vue', '');
      
      this.vueApp.$router.push(modifiedHash);
    }
  }

  return new VueApp();
});