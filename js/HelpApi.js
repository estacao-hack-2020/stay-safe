import { lat, lon } from './renderMap.js';

/**
 * Recupera o valor de algum elemento input no html
 * @param {string} selector id, classe o tag do input no html
 * @return valor digitado no input 
 */
const getInputValue = selector => document.querySelector(selector).value;

const baseURL = 'https://staysafe-api.herokuapp.com';

/**
 * Recolhe os dados no form de envio de ajuda pelo ID dos inputs
 * e envia requisição POST para a api https://staysafe-api.herokuapp.com/help
 * após o envio, é retornado uma mensagem de sucesso ou erro como alert e no console, 
 * em caso de sucesso o modal também é fechado
 */
export function enviaAjuda() {

    const inputValues = {
        nome:       getInputValue('#f_nome'),
        idade:      getInputValue('#f_idade'),
        mensagem:   getInputValue('#f_pedido'),
        telefone:   getInputValue('#f_telefone'),
        email:      getInputValue('#f_email'),
        latitude:   lat, 
        longitude:  lon,
    }

    fetch(`${baseURL}/help`, {

        method:     'POST',
        body:       JSON.stringify(inputValues),
        headers:    { "Content-type": "application/json; charset=UTF-8" } 

    }).then(response => {

        console.log(response);
        alert('informações enviadas');
        $('#modalHelpMe').modal('toggle');

    }).catch(err => {

        alert('houve um erro no envio de ajuda');
        console.error(err);

    });

}

/**
 * @return {Promise<{
 *  id:          number
 *  nome:        string
 *  telefone:	 string
 *  email:	     string
 *  idade:	     number
 *  latitude:	 string
 *  longitude:   string
 *  mensagem:    string
 *  dataCriacao: string
 *  status:      string
 * }[]>} retorna Promise com Array de ajudas da api
 */
export async function getAjudas(){
    const response = await fetch(`${baseURL}/help`);
    return await response.json();
}

/**
 * @param {number} id id da Ajuda a ser buscada na API
 * @return {Promise<{
 *  id:          number
 *  nome:        string
 *  telefone:	 string
 *  email:	     string
 *  idade:	     number
 *  latitude:	 string
 *  longitude:   string
 *  mensagem:    string
 *  dataCriacao: string
 *  status:      string
 * }>} retorna Promise com Array de uma Ajuda da API
*/
export async function getAjuda(id){
    const response = await fetch(`${baseURL}/help/${id}`);
    return await response.json();
}