metroApp.factory('UserService', ['$log', '$http', '$timeout', function ($log, $http, $timeout) {
    var userService = {
        currentUser: undefined,
        isLoggedIn: function () {
            return ( userService.currentUser );
        },
        login: function (user) {
            // Simulation de l'authentification de l'utilisateur.
            // Retourne une promesse
            return $timeout( function () {
                $log.debug("> Connexion utilisateur: " + user.login);
                userService.currentUser = user;
            }, 500);
        },
        logout: function () {
            // Simulation de la deconnexion de l'utilisateur.
            // Retourne une promesse
            return $timeout( function () {
                $log.debug("< Deconnexion utilisateur: " + userService.currentUser.login);
                userService.currentUser = undefined;
            }, 500);
        }
    };
    return userService;
}]);
