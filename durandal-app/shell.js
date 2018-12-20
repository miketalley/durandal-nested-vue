define([
  'plugins/router',
  'durandal/app'
], function (router, app) {
  return {
    router: router,
    activateRoute: function (route) {
      router.navigate(route.hash);
    },
    activate: function () {
      router.map([
        { 
          route: '',
          title: 'Durandal - Welcome',
          moduleId: 'views/welcome/index',
          nav: true },
        {
          route: 'flickr',
          title: 'Durandal - Flickr',
          moduleId: 'views/flickr/index',
          nav: true
        },
        {
          route: ['vue*details'],
          title: 'Vue',
          moduleId: 'views/vue/index',
          nav: true,
          hash: '#vue'
        }
      ]).buildNavigationModel();
      
      return router.activate();
    }
  };
});