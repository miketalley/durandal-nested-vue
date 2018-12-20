requirejs.config({
  paths: {
    'vue-app': '../vue-app',

    'text': 'node_modules/requirejs-text/text',
    'durandal':'node_modules/durandal/js',
    'plugins' : 'node_modules/durandal/js/plugins',
    'transitions' : 'node_modules/durandal/js/transitions',
    'knockout': 'node_modules/knockout/build/output/knockout-latest',
    'bootstrap': 'node_modules/bootstrap/dist/js/bootstrap.min',
    'jquery': 'node_modules/jquery/dist/jquery.min',
    'popper.js': 'node_modules/popper.js/dist/umd/popper.min'
  },
  shim: {
    'bootstrap': {
      deps: ['jquery', 'popper.js'],
      exports: 'jQuery'
    }
  }
});

define([
  'durandal/system',
  'durandal/app',
  'durandal/viewLocator'
], function(system, app, viewLocator) {
  system.debug(true);

  app.title = 'Durandal with Nested Vue';

  app.configurePlugins({
    router:true,
    dialog: true
  });

  app.start().then(function() {
    viewLocator.useConvention();
    app.setRoot('app/shell', 'entrance');
  });
});