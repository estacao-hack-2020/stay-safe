// Validação formulario
console.log("Ola")

let formulario = document.getElementById("formHelpMe");
 let nomeForm = document.getElementById("f_nome");
 let sendButton = document.querySelector(".btn-success")
// let telForm
// let emailForm
// let cidade
sendButton.addEventListener("click", function(event) {
    event.preventDefault();
    let inputs = document.querySelectorAll("input");
    let textArea = document.querySelector("#formHelpMe textarea")

    // if(nomeForm.value == ""){
    //     alert("")
    // }

    for (i = 0; i < inputs.length; i++) {

        if(inputs[i].type == "password") {

            if(document.getElementById(inputs[i].id).value.length < 11) {
                document.getElementById(inputs[i].id+'Help').innerText = "Desculpe, você deve possuir uma senha com no mínimo 10 caracteres";
            } else {
                document.getElementById(inputs[i].id+'Help').innerText = '';
            }
        } else {
            if(document.getElementById(inputs[i].id).value.length < 1) {
                document.getElementById(inputs[i].id+'Help').innerText = "Desculpe, este campo não pode ser deixado em branco";
                document.getElementById(inputs[i].id+'Help').classList.remove('text-muted');
                document.getElementById(inputs[i].id+'Help').style.color = "red";
                

            } else {
                document.getElementById(inputs[i].id+'Help').innerText = '';
            }
        }
        
            if(document.getElementById("f_pedido").value.length < 1){
                document.getElementById("f_pedido"+'Help').innerText = "Desculpe, este campo não pode ser deixado em branco";
                document.getElementById("f_pedido"+'Help').classList.remove('text-muted');
                document.getElementById("f_pedido"+'Help').style.color = "red";
        }

    }
});