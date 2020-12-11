const getInputValue = selector => document.querySelector(selector).value;

export default function enviaAjuda() {
    
    const latitude = lat, longitude = lon;

    const inputValues = {
        nome: getInputValue('#f_nome'),
        idade: getInputValue('#f_idade'),
        mensagem: getInputValue('#f_pedido'),
        telefone: getInputValue('#f_telefone'),
        email: getInputValue('#f_email'),
        latitude, longitude,
    }

    fetch('https://staysafe-api.herokuapp.com/help', {

        method: 'POST',
        body: inputValues

    }).then(response => {

        console.log(response);
        alert('informações enviados');
        $('#modalHelpMe').modal('toggle');

    }).catch(err => {

        alert('houver um erro no envio de ajuda');
        console.error(err);

    });

}