adsModule.controller('MainController', function($scope, mainData, constants,$log){
	$scope.constants = constants;
	$scope.ready = false;

	mainData.getAds(
		function success(data, status, headers, config){
			$scope.ads = data.ads;
			$scope.ready = true;
		}, 
		function error(data, status, headers, config){
			$log.error(data);
		},
		1
	);

	mainData.getAllTowns(
		function success(data, status, headers, config){
			data.unshift({ id: 0, name: "All", class: "active"});
			$scope.towns = data;
			$scope.selectedTown = 0;
		},
		function error(data, status, headers, config){
			$log.error(data);
		}
	);

	mainData.getAllCategories(
		function success(data, status, headers, config){
			data.unshift({ id: 0, name: "All"});
			$scope.categories = data;
			$scope.selectedCategory = 0;
		},
		function error(data, status, headers, config){
			$log.error(data);
		}
	);

	function onFilterClicked(townId, categoryId){
		delete $scope.ads;
		$scope.ready = false;
		mainData.getAdsWithFilters(
			function success(data, status, headers, config){
				$scope.ads = data.ads;
				$scope.selectedTown = townId;
				$scope.selectedCategory = categoryId;
				$scope.ready = true;
			}, 
			function error(data, status, headers, config){
				$log.error(data);
			},
			townId, 
			categoryId
		);
	}

	$scope.onFilterClicked = onFilterClicked;
});