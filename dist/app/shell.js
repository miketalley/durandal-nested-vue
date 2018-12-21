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
          moduleId: 'app/views/welcome/index',
          nav: true
        },
        {
          route: 'flickr',
          title: 'Durandal - Flickr',
          moduleId: 'app/views/flickr/index',
          nav: true
        },
        {
          route: ['vue/index'],
          title: 'Vue - Index',
          moduleId: 'app/views/vue/index',
          nav: true,
          external: true
        },
        {
          route: ['vue/about'],
          title: 'Vue - About',
          moduleId: 'app/views/vue/index',
          nav: true,
          external: true
        }
      ]).buildNavigationModel();

      window.router = router;
      
      return router.activate();
    }
  };
});