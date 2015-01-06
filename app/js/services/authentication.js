adsModule.factory('authentication', function(){
	var key = 'user';

	function saveUserData(data){
		sessionStorage[key] = JSON.stringify(data);
	}

	function getUserData(){
		return JSON.parse(sessionStorage[key]);
	}

	return {
		saveUser: saveUserData,
		getUser: getUserData
	}
});