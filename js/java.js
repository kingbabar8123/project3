function init () {
	var mapOptions = {
		center: new google.maps.LatLng(41.862681,-87.616946),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoom: 16
	};
	var venueMap;
	var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}
function loadScript() {
	var script = document.createElement('script');
	script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCRr3WDJF1L8LFfsakkZzsiU0d3i0WH-5k&callback=init';
	document.body.appendChild(script);
}
window.onload = loadScript;

