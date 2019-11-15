var marker;

function initMap() {
  var soldier = {lat: 41.861576, lng: -87.616701};
  var puppy = {lat: 41.864304, lng: -87.621565};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 41.862681, lng: -87.616946},
	mapTypeControl: true,
	mapTypeControlOptions: {
    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
  }

  });

  marker = new google.maps.Marker({
    map: map,
	title: 'Soldier Field',
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 41.862681, lng: -87.616946}
  });
  marker.addListener('click', toggleBounce);
  marker.addListener('click', function() {
    infowindow2.open(map, marker);
  });
  
  var contentString = '<h1>Soldier Field Info</h1><p>This Place is Awesome</p>';
  
  var contentString1 = '<h1>My Puppy</h1><p>Where my dog likes to mark his territory</p>';
  
  var contentString2 = '<h1>WAHOOOO!!!</h1>';
  
   var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  
    var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
  });
  
  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
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
  marker2.addListener('click', function() {
    infowindow1.open(map, marker2);
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
	script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBtlwn67utrYAPCrMuZpQVn60VrgLMcl-Q&callback=initMap';
	document.body.appendChild(script);
}
window.onload = loadScript;