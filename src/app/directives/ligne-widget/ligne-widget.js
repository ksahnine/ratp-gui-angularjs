metroApp.directive('ligneWidget', [ '$log', function ($log) {
    return {
        controller: 'LigneController',
        controllerAs: 'c',
        templateUrl: 'directives/ligne-widget/ligne-widget.html',
        restrict: 'AE',
        require: 'ngModel',
        scope: {
            data: '='
        },
        link: function ($scope, $element, $attrs, ngModelCtrl) {
            $scope.init = function () {
                $log.debug("init");
            };
            ngModelCtrl.$render = function () {
                $log.debug("get value");
                $scope.selected = ngModelCtrl.$viewValue;
            };
            $scope.onSelect = function (l) {
                $scope.selected = l;
                $log.debug("set value");
                ngModelCtrl.$setViewValue($scope.selected);
            };
        }
    }
}]);
