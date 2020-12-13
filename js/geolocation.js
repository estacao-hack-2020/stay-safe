// const baseUrl = 'https://api.brasil.io/v1/dataset/covid19/caso/data';
// const token = 'c18ce3e3734f8881758e968cfe723e09fbdd7c17';

// function getCityCases(city) {
//     fetch(`${baseUrl}/?is_last=True&city=${city}`, {
//         headers: {
//         'Authorization': `Token ${token}`,
//         },
//     })
//     .then(res => res.json())
//     .then(res => {
//     const cityData = res.results[0];

//     document.querySelector('casos_confirmados').innerText = cityData.confirmed;
//     document.querySelector('casos_ativos').innerText = cityData.confirmed;
//     document.querySelector('casos_recuperados').innerText = cityData.confirmed;
//     document.querySelector('casos_mortes').innerText = cityData.deaths;

//     })
//  } 

//  getCityCases('Porto Alegre');

// fetch(`http://ip-api.com/json`, {
//     "method": "GET"
// })
// .then(function(response){
//     response.json().then(function(data){
//         document.querySelector('#ondeEstou').innerText = data.regionName;
//         mountHome(data.region);
//     });
// })
// .catch(err => console.error(err));

import { lat , lon } from './renderMap.js';

/**
 * Insere os dados da api do Covid a partir do estado indicado
 * @param {string} ufInitials iniciais referentes ao estado, exemplo 'SP'
 * @param {string} ufExtended estado escrito por extenso, exemplo 'São Paulo'
 */
function mountHome(ufInitials, ufExtended) {
    ufInitials.toLowerCase();
    fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${ufInitials}`, {
        "method": "GET"
    })
    .then(function(response){
        response.json().then(function(data){
            document.querySelector('#ondeEstou').innerText = ufExtended;
            document.querySelector('#casos_confirmados').innerText = data.cases;
            document.querySelector('#casos_suspeitos').innerText = data.suspects;
            document.querySelector('#casos_recuperados').innerText = data.refuses;
            document.querySelector('#casos_mortes').innerText = data.deaths;
        });
    })
    .catch(err => console.error(err));
}

/**
 * Retorna dados de localização a partir de latitude e longitude
 * @param {number} latitude 
 * @param {number} longitude
 * @return {Promise<{
 *  city : string,
 *  countryCode: string,
 *  countryName: string,
 *  locality: string,
 *  principalSubdivision: string,
 *  principalSubdivisionCode: string,
 * }>} 
 */
export async function getLocationData(latitude, longitude) {
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`)
    return await response.json();
}

/**
 * Monta a home com os dados de localização a partir da latitudee e longitude
 * o interval é pra função ser chamada de novo a cada segundo
 * até a outra api de localização pegar a lat e lon
 */
const interval = setInterval(() =>{
    getLocationData(lat,lon)
    .then(geoData => {

        const countryAndUf = geoData.principalSubdivisionCode;
        const ufInitials = countryAndUf.split('-')[1];
        const ufExtended = geoData.principalSubdivision;
        
        mountHome(ufInitials, ufExtended);
    });

    if(lat !== undefined && lon !== undefined) clearInterval(interval);
}, 1000)