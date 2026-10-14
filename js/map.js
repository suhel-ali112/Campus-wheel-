let map;
let marker;

function initMap(){

map=new google.maps.Map(document.getElementById("map"),{

center:{lat:28.61,lng:77.23},

zoom:15

});

marker=new google.maps.Marker({

position:{lat:28.61,lng:77.23},

map:map

});

}

function startTracking(){

navigator.geolocation.watchPosition(pos=>{

let lat=pos.coords.latitude;

let lng=pos.coords.longitude;

let loc={lat:lat,lng:lng};

marker.setPosition(loc);

map.setCenter(loc);

});

}