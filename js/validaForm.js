// Validação formulario


let formulario = document.getElementById("formHelpMe");
 let checked = false;
 let sendButton = document.querySelector(".btn-success")

function infoSend(){
    alert("informações enviados");
    $('#modal').modal('toggle');
}

sendButton.addEventListener("click", function(event) {
    let inputs = document.querySelectorAll("#formHelpMe input");
    let textArea = document.querySelector("#formHelpMe textarea")
    if (checked == false) {
    for (i = 0; i < inputs.length; i++) {         

            if(document.getElementById(inputs[i].id).value.length < 1) {
                document.getElementById(inputs[i].id+'Help').innerText = "Desculpe, este campo não pode ser deixado em branco";
                document.getElementById(inputs[i].id+'Help').classList.remove('text-muted');
                document.getElementById(inputs[i].id+'Help').style.color = "red";
                checked = false;

            } else {
                document.getElementById(inputs[i].id+'Help').innerText = '';
                checked = true;
            }      
        
            if(document.getElementById("f_pedido").value.length < 1){
                document.getElementById("f_pedido"+'Help').innerText = "Desculpe, este campo não pode ser deixado em branco";
                document.getElementById("f_pedido"+'Help').classList.remove('text-muted');
                document.getElementById("f_pedido"+'Help').style.color = "red";
                checked = false;

            }else{
                document.getElementById("f_pedido"+'Help').innerText = '';
                checked = true;
            }
         }
    } else{
        infoSend();
        checked = false;
        }
});