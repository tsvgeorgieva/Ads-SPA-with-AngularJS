adsModule.factory('mainData', function($http, constants){
	function getAllAds(success, error, startPage, pageSize){
		if(!pageSize){
			pageSize = constants.defaultPageSize;
		}

		if(!startPage){
			startPage = constants.defaultStartPage;
		}

		$http({
			method: 'GET',
			url: constants.baseUrl + 'ads?pagesize=' + pageSize + '&startpage=' + startPage
		})
		.success(function (data, status, headers, config) {
			success(data, status, headers(), config);
		})
		.error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}

	function getAdsWithFilters(success, error, townId, categoryId){
		var url = constants.baseUrl + 'ads';
		if(townId > 0 && categoryId > 0){
			url = url + '?townid='+ townId +'&categoryid=' + categoryId;
		} else if(townId > 0){
			url = url + '?townid='+ townId;
		} else{
			url = url + '?categoryid=' + categoryId;
		}

		$http({
			method: 'GET',
			url: url
		})
		.success(function (data, status, headers, config) {
			success(data, status, headers(), config);
		})
		.error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}

	function getAllTowns(success, error){
		$http({
			method: 'GET',
			url: constants.baseUrl + 'towns'
		})
		.success(function (data, status, headers, config) {
			success(data, status, headers(), config);
		})
		.error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}

	function getAllCategories(success, error){
		$http({
			method: 'GET',
			url: constants.baseUrl + 'categories'
		})
		.success(function (data, status, headers, config) {
			success(data, status, headers(), config);
		})
		.error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}

	return{
		getAllAds: getAllAds,
		getAllTowns: getAllTowns,
		getAllCategories: getAllCategories,
		getAdsWithFilters: getAdsWithFilters
	}
})