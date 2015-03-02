metroApp.factory("ReseauService", [ "$http", "$log", function ($http, $log) {
    var reseauService = {
        lignesMetro: function () {
            return $http.get('/api/reseau-ratp/metro/lignes')
                        .then(function (r) {
                            return r.data;
                        }, function (error) {
                            $log.error("Erreur de recuperation des infos du reseau : " + error);
                        });
        },
        stationsMetro: function () {
            return $http.get('/api/reseau-ratp/metro/stations')
                        .then(function (r) {
                            return r.data;
                        }, function (error) {
                            $log.error("Erreur de recuperation des infos du reseau : " + error);
                        });
        },
        prochainsPassages: function (ligne, station, sens) {
            $log.debug("> direction : " + sens);
            return $http.get('/api/trafic-ratp/metro/' + ligne + '/' + station + '/' + sens)
                        .then(function (r) {
                            return r.data;
                        }, function (error) {
                            $log.error("Erreur de recuperation des infos du trafic : " + error);
                        });
        }
    }
    return reseauService;
}]);
