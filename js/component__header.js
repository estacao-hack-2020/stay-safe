export default function render() {
    //insere o código html dentro da tag header
    document.querySelector('header')
        .innerHTML = `
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-staysafe">
                    <a class="navbar-brand purple" href="index.html"><img src="image/logo_staySafe.png"> StaySafe</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                    </button>
                
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto"></ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="nav-item"><a class="nav-link purple" href="#status">Status COVID-19</a></li>
                        <li class="nav-item"><a class="nav-link purple" href="#help">Pedido de Ajuda</a></li>
                        <li class="nav-item"><a class="nav-link purple" data-toggle="modal" data-target="#modalContact">Contato</a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        `;
}