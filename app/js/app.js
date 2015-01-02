'use strict'

var adsModule = angular.module('adsModule', ['ngRoute']);

adsModule.config(function($routeProvider){
	$routeProvider
		.when(
			'/login',
			{ templateUrl:'templates/login.html' }
			)
		.when(
			'/register',
			{ templateUrl:'templates/register.html' }
			)
});