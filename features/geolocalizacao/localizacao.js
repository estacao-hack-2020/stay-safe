function getLocation()  {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition,showError);
    }  else{
        alert("Geolocalização não é suportada nesse browser.");
        }
    }

function showPosition(position) {
  lat=position.coords.latitude;
  lon=position.coords.longitude;
  latlon=new google.maps.LatLng(lat, lon)
  mapholder=document.getElementById('mapholder')
  mapholder.style.height='250px';
  mapholder.style.width='500px';
 
  var myOptions={
  center:latlon,zoom:14,
  mapTypeId:google.maps.MapTypeId.ROADMAP,
  mapTypeControl:false,
  navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
  };
  var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
  var marker=new google.maps.Marker({position:latlon,map:map,title:"Você está Aqui!"});
}
 
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("Usuário rejeitou a solicitação de Geolocalização.");
        break;
        case error.POSITION_UNAVAILABLE:
            alert("Localização indisponível.");
        break;
        case error.TIMEOUT:
            alert("O tempo da requisição expirou.");
        break;
        case error.UNKNOWN_ERROR:
            alert("Algum erro desconhecido aconteceu.");
        break;
    }
  }


if(confirm("Permita o acesso a sua localização")) {
    getLocation();
} else {
    alert("Precisamos da sua localização para continuar!");
    document.querySelector('#mapholder').innerHTML = "<button onclick='getLocation()'>Permitir localização</button>";    
}


 
