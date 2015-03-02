metroApp.controller('LigneController', [ 'ReseauService', function (ReseauService) {
    var self = this;
    this.lignes = [];
    this.lignesMetro = function () {
        if ( self.lignes.length === 0 ) {
            ReseauService.lignesMetro().then(function (data ) {
                self.lignes = data;
            });
        }
    };
}]);

