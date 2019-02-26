
app.factory('places2', function($http) {
  var newMap = {};
  newMap.getNewPlaces = function(newLat, newLong) {
  return $http.jsonp("https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=5000&gscoord=" + newLat + "%7C" + newLong + "&gslimit=30&format=json&callback=JSON_CALLBACK")
  
  }
  return newMap;

});