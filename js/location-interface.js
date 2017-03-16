// var Bike = require('./../js/bikes.js').bikeModule;
//
// $( document ).ready(function() {
//   $('#locateUser').click(locateUser);
// });
//
// //google maps functions
// function locateUser() {
//   // If the browser supports the Geolocation API
//   if (navigator.geolocation){
//     var positionOptions = {
//       enableHighAccuracy: true,
//       timeout: 10 * 1000 // 10 seconds
//     };
//     navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
//   }
//   else {
//     alert("Your browser doesn't support the Geolocation API");
//   }
// }
//
// function geolocationSuccess(position) {
//
//   var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//
//   var myOptions = {
//     zoom : 16,
//     center : userLatLng,
//     mapTypeId : google.maps.MapTypeId.ROADMAP
//   };
//   var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
//
//   new google.maps.Marker({
//     map: mapObject,
//     position: userLatLng
//   });
//   var uluru = {lat: 45.523049, lng: -122.667568};
//   new google.maps.Marker({
//     map: mapObject,
//     position: uluru
//   });
// }
//
// function geolocationError(positionError) {
//   alert(positionError);
// }
