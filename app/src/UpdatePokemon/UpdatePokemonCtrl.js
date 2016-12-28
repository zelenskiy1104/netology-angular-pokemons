'use strict';

pokemonApp.controller('UpdatePokemonCtrl', function($scope, $routeParams, PokemonsService) {

    PokemonsService.getPokemon($routeParams['pokemonId']).then(function(response) {
        $scope.pokemon = response.data;
        $scope.pokemonLoaded = true;
    });

    $scope.updatePokemon = function(pokemon) {

        $scope.updateSuccess = false;

        PokemonsService.updatePokemon(pokemon).then(function(response) {

            $scope.updateSuccess = true;

        });

    }

});
