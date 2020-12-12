import { getAjudas } from './HelpApi.js';

window.onload = () => {
  getAjudas().then( ajudas => {
    const row = document.querySelector('#help div[class="row"]');

    console.info(ajudas)
    
    ajudas
      .filter( ajuda => ajuda.status === 'aguardando' )
      .map( ajuda => {
      
        const ajudaElement = document.createElement('div');
      
        ajudaElement.innerHTML = `
          <div class="col-xs-12 col-md-4 ">
            <div class="boxHelp">
              <h3>Cidade</h3>
              <ul>
                <li name="pessoa">${ajuda.nome}</li>
                <li name="idade">${ajuda.idade} anos</li>
                <li name="pedido" class="pedido">${ajuda.mensagem}<li>
                <li name="email">${ajuda.email}</li>
              </ul>
            </div>
          </div>
        `;

        row.appendChild(ajudaElement);
      
      });

  });
}