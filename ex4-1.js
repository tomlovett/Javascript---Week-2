// angular.module('bananaTree', []); // separate module init from controller init

// angular.module('bananaTree')
// 	.controller('bananaTroller', ['$scope', function($scope) {

// 		$scope.greeting = 'Sup, dude?';

// 	}
// ]);

angular.module('intro', []);  // init module

angular.module('intro')
	.controller('cntrls', ['$scope', function($scope) {

		$scope.clickr = function() {
			console.log('It worked!');
			$scope.greeting = "Surprise mothertrucker!"
		}

		$scope.bigMistake = function() {
			$scope.showMe = true;
			$scope.title = 'You done goofed';
			$scope.one = 'I\'ve called the cyber police';
			$scope.two = 'I back-traced it!'
			$scope.three = 'Consequences will never be the same!!';
		}

	}])