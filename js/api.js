const baseUrl = 'https://api.brasil.io/v1/dataset/covid19/caso/data';
const token = 'c18ce3e3734f8881758e968cfe723e09fbdd7c17';

function getCityCases(city) {
  fetch(`${baseUrl}/?is_last=True&city=${city}`, {
    headers: {
      'Authorization': `Token ${token}`,
    },
  })
    .then(res => res.json())
    .then(res => {
      const cityData = res.results[0];

      const confirmados = document.getElementById('casos_confirmados');
      const ativos = document.getElementById('casos_ativos');
      const recuperados = document.getElementById('casos_recuperados');
      const mortes = document.getElementById('casos_mortes');

      confirmados.innerText = cityData.confirmed;
      mortes.innerText = cityData.deaths;

      console.table(cityData);

    })
}