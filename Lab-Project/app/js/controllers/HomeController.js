'use strict';

app.controller('HomeController',
   function ($scope, adsService, notifyService, pageSize) {
      $scope.adsParams = {
          'startPage' : 1,
          'pageSize' : pageSize
      };

      $scope.reloadAds = function() {
          adsService.getAds(
              $scope.adsParams,
              function success(data) {
                  $scope.ads = data;
              },
              function error(err) {
                  notifyService.showError("Cannot visualize ads at this moment, please try again later!", err);
              }
          );
      };

      $scope.reloadAds();

      // This event is sent by RightSideBarController when the current category is changed
      $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
          $scope.adsParams.categoryId = selectedCategoryId;
          $scope.adsParams.startPage = 1;
          $scope.reloadAds();
      });

      // This event is sent by RightSideBarController when the current town is changed
      $scope.$on("townSelectionChanged", function(event, selectedTownId) {
          $scope.adsParams.townId = selectedTownId;
          $scope.adsParams.startPage = 1;
          $scope.reloadAds();
      });
   }
);
