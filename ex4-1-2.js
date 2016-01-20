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

		$scope.killMeNow = [false, false];

		$scope.fireLink = function(n) {
			if (!confirm(promptMessage)) {
				event.preventDefault();
				$scope.killMeNow[n] = true;
			}
		}
		var promptMessage = 'Continue to outside link?\n(Note: If you refuse this link will be murdered)';

		$scope.showButton = function() {
			$scope.lookAtMyButt = true;
		}

		$scope.hideButt = function() {
			$scope.lookAtMyButt = false;
		}

	}]);


