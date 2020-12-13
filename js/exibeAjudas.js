import { getAjudas } from './HelpApi.js';
import { getLocationData } from './geolocation.js'

getAjudas().then( ajudas => {
  const row = document.querySelector('#help div[class="row"]');

  ajudas
    .filter( ajuda => ajuda.status === 'aguardando' )
    .map( ajuda => {
      const { latitude, longitude } = ajuda;

      getLocationData(latitude, longitude).then( geoData => {

        const ajudaElement = document.createElement('div');
        ajudaElement.classList.add('col-xs-12', 'col-md-4');

        const cidade = geoData.city;

        ajudaElement.innerHTML = `
            <div class="boxHelp">
              <h3>${cidade}</h3>
              <ul>
                <li name="pessoa">${ajuda.nome}</li>
                <li name="idade">${ajuda.idade} anos</li>
                <li name="email"><small>email:</small> ${ajuda.email}</li>
                <li name="pedido" class="pedido">${ajuda.mensagem}<li>
              </ul>
            </div>
          `;

        row.appendChild(ajudaElement);

      });

    });

});