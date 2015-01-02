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

	return{
		getAllAds: getAllAds
	}
})