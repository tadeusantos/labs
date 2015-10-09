(function() {
  'use strict';

  angular.module('xFilesApp.equipments')
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
        when('/equipments/classes', {
          templateUrl: 'views/equipments/classes.html',
          controller: 'EquipmentClassesCtrl'
        }).
        when('/equipments/equipments', {
          templateUrl: 'views/equipments/equipments.html',
          controller: 'EquipmentsCtrl'
        });
    }]);
})();
