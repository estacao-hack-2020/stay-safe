export let lat, lon;
import { getAjudas } from './HelpApi.js';


var mapa = new google.maps.Map(document.getElementById("map-canvas"));
var infoWindow = new google.maps.InfoWindow();
var marcador = new google.maps.Marker();
var marcadorAjuda = new google.maps.Marker();


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
    var latlon=new google.maps.LatLng(lat, lon);
    /* mapholder = document.getElementById('map-canvas'); */
   
    var myOptions={
    center:latlon,zoom:14,minZoom:9,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    };
    mapa = new google.maps.Map(document.getElementById("map-canvas"),myOptions);
    marcador = new google.maps.Marker({position:latlon,map:mapa,title:"Você está Aqui!"});
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
  
      getLocation(mapa, marcador);


      
  getAjudas().then( ajudas => {

    let markersData = ajudas.filter( ajuda => ajuda.status === 'aguardando' );
    displayMarkers(markersData);
  
  });

// Esta função vai percorrer a informação contida na variável markersData
// e cria os marcadores através da função createMarker
function displayMarkers(markersData){

    // esta variável vai definir a área de mapa a abranger e o nível do zoom
    // de acordo com as posições dos marcadores
    var bounds = new google.maps.LatLngBounds();
 
    // Loop que vai percorrer a informação contida em markersData 
    // para que a função createMarker possa criar os marcadores 
    for (var i = 0; i < markersData.length; i++){
 
       var latlng = new google.maps.LatLng(markersData[i].latitude, markersData[i].longitude);
       var nome = markersData[i].nome;
       var idade = markersData[i].idade;
       var email = markersData[i].email;
       var mensagem = markersData[i].mensagem;
 
       createMarker(latlng, nome, idade, email, mensagem);
 
       // Os valores de latitude e longitude do marcador são adicionados à
       // variável bounds
       bounds.extend(latlng); 
    }
 
    // Depois de criados todos os marcadores,
    // a API, através da sua função fitBounds, vai redefinir o nível do zoom
    // e consequentemente a área do mapa abrangida de acordo com
    // as posições dos marcadores
    mapa.fitBounds(bounds);
 }

 // Função que cria os marcadores e define o conteúdo de cada Info Window.
function createMarker(latlng, nome, idade, email, mensagem){
    marcadorAjuda = new google.maps.Marker({
       map: mapa,
       position: latlng,
       title: nome
    });
 
    // Evento que dá instrução à API para estar alerta ao click no marcador.
    // Define o conteúdo e abre a Info Window.
    google.maps.event.addListener(marcadorAjuda, 'click', function() {
       
       // Variável que define a estrutura do HTML a inserir na Info Window.
       var iwContent = '<div id="iw_container">' +
       '<div class="iw_title">Nome: ' + nome + '</div>' +
       '<div class="iw_content">Idade: ' + idade + ' anos<br />Email: ' +
       email + '<br />Mensagem: ' +
       mensagem + '</div></div>';
       
       // O conteúdo da variável iwContent é inserido na Info Window.
       infoWindow.setContent(iwContent);
 
       // A Info Window é aberta com um click no marcador.
       infoWindow.open(mapa, marcadorAjuda);
    });
 }

 function initialize() {
 
    // Cria a nova Info Window com referência à variável infoWindow.
    // O conteúdo da Info Window é criado na função createMarker.
    infoWindow = new google.maps.InfoWindow();
 
    // Evento que fecha a infoWindow com click no mapa.
    google.maps.event.addListener(mapa, 'click', function() {
       infoWindow.close();
    });
 
    // Chamada para a função que vai percorrer a informação
    // contida na variável markersData e criar os marcadores a mostrar no mapa
    // displayMarkers();
 }
 google.maps.event.addDomListener(window, 'load', initialize);


