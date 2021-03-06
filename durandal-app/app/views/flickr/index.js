﻿define([
  'plugins/http',
  'durandal/app',
  'knockout'
], function (http, app, ko) {

  return {
    displayName: 'Flickr',
    images: ko.observableArray([]),
    activate: function () {
      //the router's activator calls this function and waits for it to complete before proceeding
      if (this.images().length > 0) {
        return;
      }

      var that = this;
      return http.jsonp('http://api.flickr.com/services/feeds/photos_public.gne', { tags: 'mount ranier', tagmode: 'any', format: 'json' }, 'jsoncallback').then(function(response) {
        that.images(response.items);
      });
    },
    select: function(item) {
      //the app model allows easy display of modal dialogs by passing a view model
      //views are usually located by convention, but you an specify it as well with viewUrl
      item.viewUrl = 'views/detail';
      app.showDialog(item);
    }
  };
});