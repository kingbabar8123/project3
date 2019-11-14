function init () {
	var pinLocation = new google.maps.LatLng(41.862681,-87.616946);
	var mapOptions = {
		center: new google.maps.LatLng(41.862681,-87.616946),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoom: 16
	};
	var venueMap;
	var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
	var startPosition = new google.maps.Marker({    
    position: pinLocation,                        
    map: venueMap,                                
    title: "my marker"
	draggable: true,
    animation: google.maps.Animation.DROP;
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
	script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCRr3WDJF1L8LFfsakkZzsiU0d3i0WH-5k&callback=init';
	document.body.appendChild(script);
}
window.onload = loadScript;

