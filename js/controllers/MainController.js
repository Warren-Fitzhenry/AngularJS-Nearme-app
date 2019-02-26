app.controller('MainController', ['$scope', 'places', 'places2', function($scope, places, places2){

  $scope.newlat = 40.741934;
  $scope.newlng = -74.004897;

  $scope.mapCenter= { lat: $scope.newlat, lng: $scope.newlng, zoom: 17 };


  places.success(function(data){
      $scope.geodata = data;
      console.log($scope.geodata);
      $scope.mapMarkers = geodataToMarkers($scope.geodata);
  })


 $scope.$on('leafletDirectiveMap.click', function (e, wrap) {
         $scope.newlat = wrap.leafletEvent.latlng.lat;
         $scope.newlng = wrap.leafletEvent.latlng.lng;
         $scope.mapCenter.lat = $scope.newlat;
         $scope.mapCenter.lng = $scope.newlng;

         var newplace = {
          lat: $scope.newlat,
          lng: $scope.newlng,
          message: "Your Chosen Location"
            };

        $scope.mapMarkers.push(newplace);
        places2.getNewPlaces($scope.newlat,$scope.newlng).success(function(data){
              $scope.geodata = data;
              console.log($scope.geodata);
              $scope.mapMarkers = geodataToMarkers($scope.geodata);
        });
         // call function to remove old markers and create new markers.
        });

}])