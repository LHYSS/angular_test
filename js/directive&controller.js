var myModule = agular.module('myModule', []);
myModule.controller('myCtrl', ['$scope', function($scope) {
	$scope.loadData = function() {
		console.log('数据加载中。。。')；
	};

}]);
myModule.controller('myCtr2', ['$scope', function($scope) {
	$scope.loadData2 = function() {
		console.log('数据加载中。。。2222')；
	};

}]);
myModule.directive('loader', function() {
	// Runs during compile
	return {
		restrict: 'AE';
		link: function($scope, iElm, iAttrs, controller) {
			iElm.bind('mouseenter', function(event) {
				$scope.$apply(iAttrs.howtoload);
			})
		}
	};
});

