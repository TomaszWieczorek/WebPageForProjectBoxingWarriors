function initMap() {
var uluru = {lat: 50.118579, lng: 18.889070};
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 17,
  center: uluru
});
var marker = new google.maps.Marker({
  position: uluru,
  map: map
});
}