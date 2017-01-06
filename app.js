(function(){
'use strict';
  angular.module('myFirstApp',[])

  .controller('myFirstController', function($scope){
    $scope.name = "";
    $scope.totalNumericValue = 0;

    $scope.displayNumericValue = function(){
      var numericValue = personsNumericValue($scope.name);
      $scope.totalNumericValue  = numericValue;
    };

    function personsNumericValue(string){
      var totalNumericValueOfName = 0;
      for (var i = 0; i < string.length; i++) {
        totalNumericValueOfName += string.charCodeAt(i);
      }

      return totalNumericValueOfName;
    };
  });
})();
