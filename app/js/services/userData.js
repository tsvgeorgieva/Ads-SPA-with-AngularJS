adsModule.factory('userData', function($resource, constants){
	function registerUser(user){
		return $resource(constants.baseUrl + 'user/register').save(user);
	}

	function loginUser(user){
		return $resource(constants.baseUrl + 'user/login').save(user);
	}

	function logoutUser(){
		
	}

	return {
		register: registerUser,
		login: loginUser,	
		logout: logoutUser
	}
})