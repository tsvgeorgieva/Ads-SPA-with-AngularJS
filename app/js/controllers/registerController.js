adsModule.controller('RegisterController', function($scope, userData, mainData, authentication){
	$scope.register = function register(user){
		userData.register(user).$promise.then(
			function success(data){
				authentication.saveUser(data);
			}, 
			function error(error){

			});
	}

	mainData.getAllTowns(
		function success(data){
			$scope.towns = data;
		},
		function error(error){
			console.log(error);
		}
	);
});