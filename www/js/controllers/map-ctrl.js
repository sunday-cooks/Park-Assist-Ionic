angular.module('parkAssist')
  // .controller('MapCtrl', function($scope, $state, $cordovaGeolocation, MapOptions, TrafficLayer) {
  //   var options = {
  //     timeout: 10000,
  //     enableHighAccuracy: true
  //   }; // can go in mapService's init() method

  //   $cordovaGeolocation.getCurrentPosition(options)
  //     .then(function(position) {
        
  //       var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  //       var mapOptions = MapOptions; // see map-options.js
  //       mapOptions.setCenter(latLng);

  //       $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  //       TrafficLayer.showTrafficLayer($scope.map); // see traffic-layer.js

  //       // google.maps.event.addListenerOnce($scope.map, 'idle', function() {

  //       //   var marker = new google.maps.Marker({
  //       //     map: $scope.map,
  //       //     animation: google.maps.Animation.DROP,
  //       //     position: latLng
  //       //   });

  //       //   var infoWindow = new google.maps.InfoWindow({
  //       //     content: 'Eccomi!'
  //       //   });

  //       //   google.maps.event.addListener(marker, 'click', function() {
  //       //     infoWindow.open($scope.map, marker);
  //       //   });
  //       // });

  //     }, function(error) {
  //       console.log("Could not get location. Error message: ", error);
  //     });
    
  });