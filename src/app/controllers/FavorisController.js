metroApp.controller('FavorisController', ['$log', '$location', 'FavorisService', 'UserService', function ($log, $location, FavorisService, UserService) {
    var self = this;
    this.favoris = [];
    FavorisService.list(UserService.currentUser.login).then( function (data) {
        self.favoris = data;
        $log.debug( JSON.stringify(self.favoris) );
    });

    /**
      * @name ajouter
      * @desc Ajout de l'itineraire aux favoris de l'utilisateur courant
      * @param {Object} iti - Itineraire
      */
    this.ajouter = function (iti) {
        FavorisService.add(UserService.currentUser.login, iti);
    };

    /**
      * @name supprimer
      * @desc Suppression de l'itineraire des favoris de l'utilisateur courant
      * @param {Integer} index - Index
      */
    this.supprimer = function (index) {
        FavorisService.delete(UserService.currentUser.login, index).then( function (data) {
            self.favoris = data;
        });
    };

    this.afficherTrafic = function (ligne, station, sens) {
        $location.path('/metro/' + [ ligne, station, sens ].join('/') );
    };
}]);
