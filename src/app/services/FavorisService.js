metroApp.factory('FavorisService', ['$log', '$http', '$timeout', function ($log, $http, $timeout) {
    var favService = {
        favoris: {}, // data store
        add: function (username, fav) {
            if (!favService.favoris[username]) {
                favService.favoris[username] = [];
            }
            favService.favoris[username].push(angular.copy(fav));
        },
        delete: function (username, idx) {
            // Simule l'acces a un backend. Retourne une promesse.
            return $timeout( function () {
                favService.favoris[username].splice(idx, 1);
                return favService.favoris[username];
            }, 500);
        },
        list: function (username) {
            // Simule l'acces a un backend. Retourne une promesse.
            return $timeout( function () {
                return favService.favoris[username];
            }, 500);
        }
    };
    return favService;
}]);
