angular.module('App', [])
  .controller('AppController', function() {
    var scope = this;
    scope.countClick = 0;

    scope.increaseCounter = function() {
      scope.countClick++;
    }

    scope.decreaseCounter = function() {
      scope.countClick--;
    }
  });
