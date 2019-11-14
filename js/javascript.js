var marker;

function initMap() {
  var soldier = {lat: 41.861576, lng: -87.616701};
  var puppy = {lat: 41.864304, lng: -87.621565};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: {lat: 41.862681, lng: -87.616946}
  });

  marker = new google.maps.Marker({
    map: map,
	title: 'Soldier Field',
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 41.862681, lng: -87.616946}
  });
  marker.addListener('click', toggleBounce);
  
  var contentString = '<h1>Soldier Field Info</h1><p>This Place is Awesome</p>';
  
   var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  
  var marker1 = new google.maps.Marker({
    position: soldier,
    map: map,
    title: 'Soldier Field'
  });
  marker1.addListener('click', function() {
    infowindow.open(map, marker1);
  });
  
  var marker2 = new google.maps.Marker({
    position: puppy,
    map: map,
	title: 'Where my dog likes to mark his territory',
	icon: 'images/puppy1.jpg'
  });


}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
function loadScript() {
	var script = document.createElement('script');
	script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCRr3WDJF1L8LFfsakkZzsiU0d3i0WH-5k&callback=initMap';
	document.body.appendChild(script);
}
window.onload = loadScript;