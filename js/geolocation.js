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

fetch(`http://ip-api.com/json`, {
    "method": "GET"
})
.then(function(response){
    response.json().then(function(data){
        mountHome(data.region);
    });
})
.catch(err => console.error(err));


function mountHome(uf) {
    uf.toLowerCase();
    fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`, {
        "method": "GET"
    })
    .then(function(response){
        response.json().then(function(data){
            document.querySelector('#casos_confirmados').innerText = data.cases;
            document.querySelector('#casos_suspeitos').innerText = data.suspects;
            document.querySelector('#casos_recuperados').innerText = data.refuses;
            document.querySelector('#casos_mortes').innerText = data.deaths;
        });
    })
    .catch(err => console.error(err));
}


mountHome('RS');