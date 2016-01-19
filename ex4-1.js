angular.module('bananaTree', []); // separate module init from controller init

angular.module('bananaTree')
	.controller('bananaTroller', ['$scope', function($scope) {

		$scope.greeting = 'Sup, dude?';

	}
]);