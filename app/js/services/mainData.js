adsModule.factory('mainData', function($http, constants, $resource){
	function getAds(success, error, startPage, pageSize){
		getAdsWithFilters(success, error, 0, 0, startPage, pageSize);
	}

	function getAdsWithFilters(success, error, townId, categoryId, startPage, pageSize){
		var url = constants.baseUrl + 'ads';
		var noFilters = false;
		if(townId > 0 && categoryId > 0){
			url = url + '?townid='+ townId +'&categoryid=' + categoryId;
		} else if(townId > 0){
			url = url + '?townid='+ townId;
		} else if(categoryId > 0){
			url = url + '?categoryid=' + categoryId;
		} else{
			noFilters = true;
		}

		if(!pageSize){
			pageSize = constants.defaultPageSize;
		}

		if(!startPage){
			startPage = constants.defaultStartPage;
		}

		url = url + (noFilters? '?' : '&') + 'pagesize=' + pageSize + '&startpage=' + startPage;

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

	var adsResource = $resource(
        constants.baseUrl + '/ads',
        null,
        {
            'getAll': {method:'GET'}
        }
    );
	

	return{
		getAds: function(params, success, error) {
	                return adsResource.getAll(params, success, error);
	            },
		getAllTowns: getAllTowns,
		getAllCategories: getAllCategories,
		getAdsWithFilters: getAdsWithFilters
	}
})