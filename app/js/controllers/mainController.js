adsModule.controller('MainController', function($scope, mainData, constants){
	mainData.getAllAds(
		function success(data, status, headers, config){
			$scope.ads = data.ads;
			$scope.constants = constants;
			$scope.data = data;
		}, 
		function error(){
			$log.error(data);
		},
		2
	)
});