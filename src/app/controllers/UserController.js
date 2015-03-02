metroApp.controller('UserController', ['$scope', '$log', '$location', 'UserService', function ($scope, $log, $location, UserService) {
    var self = this;
    this.message = 'Connexion';
    this.userService = UserService;

    /**
     * @name login
     * @desc Connexion de l'utilisateur
     */
    this.login = function () {
        UserService.login(self.user).then(function () {
            $location.path('/metro');
        });
    };

    /**
     * @name logout
     * @desc Deconnexion de l'utilisateur courant
     */
    this.logout = function () {
        UserService.logout(self.user).then(function () {
            $location.path('/login');
        });
    };

    /**
     * @name afficherAccueil
     * @desc Affichage de l'ecran d'accueil
     */
    this.afficherAccueil = function () {
        $location.path('/metro');
    };

    /**
     * @name afficherFavoris
     * @desc Affichage de la liste des favoris de l'utilisateur courant
     */
    this.afficherFavoris = function () {
        $location.path('/favoris');
    };

}]);
