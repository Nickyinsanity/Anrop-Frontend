var angular = require('angular');

angular.module('app').factory('PwsSvc', function ($http) {
  return {
    add: function (operationId, data) {
      return $http.post('/api/operations/' + operationId + '/pws', data);
    },
    addons: function (operationId) {
      return $http.get('/api/operations/' + operationId + '/pws');
    },
    delete: function (operationId, id) {
      return $http.delete('/api/operations/' + operationId + '/pws/' + id);
    },
    search: function (query) {
      return $http.get('/api/pws/search?query=' + query);
    },
    templates: function () {
      return $http.get('/api/pws/templates');
    },
  };
});
