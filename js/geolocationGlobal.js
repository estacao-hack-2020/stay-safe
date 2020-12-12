let totalCasos = 0;
let totalSuspeitos = 0;
let totalRecuperados = 0;
let totalMortes = 0;

fetch('https://covid19-brazil-api.now.sh/api/report/v1', {
    "method": "GET"
})
.then(function(response){
    response.json().then(function(data){
        let i;
        for (i=0; i <= data.data.length; i++) {
            if(data.data[i]) {
                totalCasos = totalCasos + data.data[i].cases;
                totalSuspeitos = totalSuspeitos + data.data[i].cases;
                totalRecuperados = totalRecuperados + data.data[i].cases;
                totalMortes = totalMortes + data.data[i].cases;
                document.querySelector('#casos_confirmados').innerText = totalCasos;
                document.querySelector('#casos_suspeitos').innerText = totalSuspeitos;
                document.querySelector('#casos_recuperados').innerText = totalRecuperados;
                document.querySelector('#casos_mortes').innerText = totalMortes;

                document.querySelector('#casosGlobais').innerHTML += `
                    <div class='col-xs-12 col-md-4'>
                        <div class='boxCases text-center'>
                            <img src='https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${data.data[i].uf}.png'>
                            <h3>${data.data[i].state}</h3>
                            
                            <div class='row'>
                                <div class='col-6'>
                                    <p>
                                        <b>Total de casos</b><br>
                                        ${data.data[i].cases}
                                    </p>
                                </div>
                                <div class='col-6'>
                                    <p>
                                        <b>Suspeitos</b><br>
                                        ${data.data[i].suspects}
                                    </p>
                                </div>
                            </div>

                            <div class='row'>
                                <div class='col-6'>
                                    <p>
                                        <b>Recuperados</b><br>
                                        ${data.data[i].refuses}
                                    </p>
                                </div>
                                <div class='col-6'>
                                    <p>
                                        <b>Mortes</b><br>
                                        ${data.data[i].deaths}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
         }
    });
})
.catch(err => console.error(err));