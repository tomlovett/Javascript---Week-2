angular.module('primary', []);  // init module

angular.module('primary')
	.controller('pinko', ['$scope', function($scope) {

		$scope.pinker = function(p) {
			$scope.pinker[p] = true;
			// console.log('pinker fired on ', p);
			// console.log($scope.pinker[p]);
		}
		$scope.killPinker = function(p) {
			$scope.pinker[p] = false;
			// console.log('killPinker fired on ', p);
			// console.log($scope.pinker[p]);
		}

		$scope.bonus = '!!'

		$scope.fireLink = function(n) {
			$scope.prompt('Are you sure you want to do this?')
		}

	}]);


