// Validação contato

let contato = document.getElementById("formContact");
 let verificado = false;
 let botaoEnviar = document.getElementById("btn-msg");

 let entradas = document.querySelectorAll("#formContact input");
 let areaTexto = document.querySelector("#formContact textarea");

function infoSend(){
    alert("informações enviadas");
    $('#modal').modal('toggle');
}

function validaCamposContact(){
    for (let i = 0; i < entradas.length; i++) {         

        if(document.getElementById(entradas[i].id).value.length < 1) {
            document.getElementById(entradas[i].id+'Contact').innerText = "Desculpe, este campo não pode ser deixado em branco";
            document.getElementById(entradas[i].id+'Contact').classList.remove('text-muted');
            document.getElementById(entradas[i].id+'Contact').style.color = "red";
            verificado = false;

        } else {
            document.getElementById(entradas[i].id+'Contact').innerText = '';
            verificado = true;
        }      
   
        if(document.getElementById("c_contact").value.length < 1){
            document.getElementById("c_contactSend").innerText = "Desculpe, este campo não pode ser deixado em branco";
            document.getElementById("c_contactSend").classList.remove('text-muted');
            document.getElementById("c_contactSend").style.color = "red";
            verificado = false;

        }else{
            document.getElementById("c_contactSend").innerText = '';
            verificado = true;
        }
     }
}

contato.onchange = function(){
    validaCamposContact();
}

botaoEnviar.addEventListener("click", function(event) {
    if (verificado == false) {
        validaCamposContact();

    } else{
        infoSend();
        }
});

