metroApp.controller('HorairesMetroController', [ '$routeParams', '$scope', '$log', 'ReseauService', 'lignes', 'stations', 'AppConstants', function ($routeParams, $scope, $log, ReseauService, lignes, stations, AppConstants) {
    var self = this;
    this.lignes = lignes;
    this.stations = stations;

    this.itineraire = {};
    this.passages = [];

    /**
      * @name prochainsPassages
      * @desc Affichage de la liste des prochains passage du metro
      */
    this.prochainsPassages = function () {
        var iti = self.itineraire;
        $log.debug("> sens : " + iti.sens);
        $log.debug("> numero : " + iti.ligne.numero);
        ReseauService.prochainsPassages(iti.ligne.numero, iti.station.id, iti.sens).then(function (data) {
            self.passages = data;
            if ( data.length > 0 ) {
                self.itineraire.direction = data[0].direction;
            }
            $log.debug("< nb lignes : " + data.length);
        });
    };

    this.ligneMetro = function (numero) {
        return _.find(self.lignes, _.matchesProperty('numero', numero));
    };
    if ($routeParams.ligne) {
        self.itineraire.ligne = self.ligneMetro($routeParams.ligne) ;
    }
    if ($routeParams.station) {
        self.itineraire.station = {};
        self.itineraire.station.nom = $routeParams.station;
        self.itineraire.station.id = $routeParams.station;
    }
    if ($routeParams.sens) {
        self.itineraire.sens = $routeParams.sens;
        self.prochainsPassages(); // active la recherche
    } else {
        self.itineraire.sens = AppConstants.Direction.RETOUR; // par défaut
    }

}]);
