// export let lat, lon;

function getLocation()  {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition,showError);
      }  else{
          alert("Geolocalização não é suportada nesse browser.");
          }
      }
  
  function showPosition(position) {
    var lat=position.coords.latitude;
    var lon=position.coords.longitude;
    var latlon=new google.maps.LatLng(lat, lon);
    let mapholder=document.getElementById('map-canvas');
   
    let myOptions={
    center:latlon,zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    };
    var map=new google.maps.Map(document.getElementById("map-canvas"),myOptions);
    let marker=new google.maps.Marker({position:latlon,map:map,title:"Você está Aqui!"});

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
  
      getLocation();
  

  var markersData = [
    {
        lat: -23.5058752,
        lng: -46.482015,
        nome:"Godofredo",
        cidade:"São Paulo",
        bairro:"Ermelino Matarazzo",
        pedido:"Ir ao mercado"
     },
     {
        lat: -23.4933041,
        lng: -46.447502,
        nome:"Astolfo",
        cidade:"São Paulo",
        bairro:"São Miguel",
        pedido:"Ir à farmácia"
     },
     {
        lat: -23.4929306,
        lng: -46.4825332,
        nome:"José",
        cidade:"São Paulo",
        bairro:"Ermelino Matarazzo",
        pedido:"Ir ao pet shop"
     },
     {
        lat: -23.5304296,
        lng: -46.5308839,
        nome:"Sebastião",
        cidade:"São Paulo",
        bairro:"Vila Matilde",
        pedido:"Ir ao mercado"
     }

];

// Esta função vai percorrer a informação contida na variável markersData
// e cria os marcadores através da função createMarker
function displayMarkers(){

    // esta variável vai definir a área de mapa a abranger e o nível do zoom
    // de acordo com as posições dos marcadores
    var bounds = new google.maps.LatLngBounds();
 
    // Loop que vai percorrer a informação contida em markersData 
    // para que a função createMarker possa criar os marcadores 
    for (var i = 0; i < markersData.length; i++){
 
       var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
       var nome = markersData[i].nome;
       var cidade = markersData[i].cidade;
       var bairro = markersData[i].bairro;
       var pedido = markersData[i].pedido;
 
       createMarker(latlng, nome, cidade, bairro, pedido);
 
       // Os valores de latitude e longitude do marcador são adicionados à
       // variável bounds
       bounds.extend(latlng); 
    }
 
    // Depois de criados todos os marcadores,
    // a API, através da sua função fitBounds, vai redefinir o nível do zoom
    // e consequentemente a área do mapa abrangida de acordo com
    // as posições dos marcadores
    map.fitBounds(bounds);
 }

 // Função que cria os marcadores e define o conteúdo de cada Info Window.
function createMarker(latlng, nome, cidade, bairro, pedido){
    var marker = new google.maps.Marker({
       map: map,
       position: latlng,
       title: nome
    });
 
    // Evento que dá instrução à API para estar alerta ao click no marcador.
    // Define o conteúdo e abre a Info Window.
    google.maps.event.addListener(marker, 'click', function() {
       
       // Variável que define a estrutura do HTML a inserir na Info Window.
       var iwContent = '<div id="iw_container">' +
       '<div class="iw_title">' + nome + '</div>' +
       '<div class="iw_content">' + cidade + '<br />' +
       bairro + '<br />' +
       pedido + '</div></div>';
       
       // O conteúdo da variável iwContent é inserido na Info Window.
       infoWindow.setContent(iwContent);
 
       // A Info Window é aberta com um click no marcador.
       infoWindow.open(map, marker);
    });
 }

 function initialize() {
 
    // Cria a nova Info Window com referência à variável infoWindow.
    // O conteúdo da Info Window é criado na função createMarker.
    let infoWindow = new google.maps.InfoWindow();
 
    // Evento que fecha a infoWindow com click no mapa.
    google.maps.event.addListener(map, 'click', function() {
       infoWindow.close();
    });
 
    // Chamada para a função que vai percorrer a informação
    // contida na variável markersData e criar os marcadores a mostrar no mapa
    displayMarkers();
 }
 google.maps.event.addDomListener(window, 'load', initialize);


