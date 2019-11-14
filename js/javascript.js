var marker;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
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