(function() {
  'use strict';

  angular.module('xFilesApp.equipments')
    .controller('EquipmentClassesCtrl', ['$scope', EquipmentClassesCtrl]);


  function EquipmentClassesCtrl($scope) {
     this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
})();
