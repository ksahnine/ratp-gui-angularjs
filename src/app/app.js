var metroApp = angular.module('metroApp', ['ngRoute', 'ui.bootstrap']);

// Constantes
metroApp.constant('AppConstants', {
    Direction: {
        ALLER: 'A',
        RETOUR: 'R'
    }
});

// Configuration du logger
metroApp.config(['$logProvider', function ($logProvider) {
    $logProvider.debugEnabled(false); // Debug false
}]);

// Configuration des routes. 
// PS : ui-router est une meilleure alternative à ng-route. 
// @see https://github.com/angular-ui/ui-router
metroApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/login', {
        templateUrl: 'views/login.html',
        controller: 'UserController',
        controllerAs: 'userCtrl'
    }).
    when('/metro/:ligne?/:station?/:sens?', {
        templateUrl: 'views/metro.html',
        controller: 'HorairesMetroController',
        controllerAs: 'ctrl',
        resolve: {
            lignes: function (ReseauService) {
                return ReseauService.lignesMetro().then(function (data) {
                    return data;
                });
            },
            stations: function (ReseauService) {
                return ReseauService.stationsMetro().then(function (data) {
                    return data;
                });
            }
       }
    }).
    when('/favoris', {
        templateUrl: 'views/favoris.html',
        controller: 'FavorisController',
        controllerAs: 'favCtrl'
    }).
    otherwise( { redirectTo: '/login' } )
}]);

// Redirection vers la page d'authentification 
// si l'utilisateur n'est pas connecté
metroApp.run(['$rootScope', '$location', 'UserService', function ($rootScope, $location, UserService) {
    // Routes ne necessitant pas d'authentification
    var noAuthRoutes = [ '/login' ];

    // Verifie que la route ne necessite pas d'authentification
    var authIsNotRequired = function (route) {
        return _.find(noAuthRoutes,
            function (noAuthRoute) {
                return _.startsWith(route, noAuthRoute);
            });
    };

    $rootScope.$on('$locationChangeStart', function (ev, to, toParams, from, fromParams) {
        if ( !authIsNotRequired($location.url()) && !UserService.isLoggedIn() ) {
            // Redirection vers la page d'authentification
            ev.preventDefault();
            $location.path('/login');
        }
    });
}]);

// Bootstraping des tooltips
$(document).on( 'mouseover', '#reseauMetro div', function () {
    $(this).tooltip();
});
