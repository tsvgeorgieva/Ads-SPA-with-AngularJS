adsModule.controller('MainController', function($scope, mainData, constants,$log){
	$scope.constants = constants;
	$scope.noAds = false;

	// TODO
	$scope.isLoggedIn = false;

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

	$scope.onFilterClicked = function onFilterClicked(townId, categoryId){
		delete $scope.ads;
		$scope.ready = false;
		$scope.noAds = false;
		mainData.getAdsWithFilters(
			function success(data, status, headers, config){
				initializeAds(data);
				$scope.selectedTown = townId;
				$scope.selectedCategory = categoryId;
			}, 
			function error(data, status, headers, config){
				$log.error(data);
			},
			townId, 
			categoryId
		);
	}

	function initializeAds(data){
		if(data.ads.length == 0){
			$scope.noAds = true;
		} else{
			$scope.ads = data.ads;
		}
	}


	 $scope.adsParams = {
          'startPage' : constants.defaultStartPage,
          'pageSize' : constants.defaultPageSize
      };

      $scope.reloadAds = function() {
          mainData.getAds(
              $scope.adsParams,
              function success(data) {
                  $scope.ads = data;
              },
              function error(err) {
                  console.log(err);
              }
          );
      };

      $scope.reloadAds();
});