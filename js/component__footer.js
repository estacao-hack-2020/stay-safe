function renderFooter() {
    //insere o código html dentro da tag footer
    document.querySelector('footer')
        .innerHTML = `
            <div class="animacoes">
                <img src="image/rodapeBicileta.png" class="animacao1">
                <img src="image/rodapeMenina.png" class="animacao2">
                <img src="image/rodapeMenino.png" class="animacao3">
                <img src="image/rodapeBicileta2.png" class="animacao4">
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-6 text-left">
                        Sistema desenvolvido pela equipe PI-3<br>
                        Estação Hack - Digital House - Facebook
                    </div>
                    <div class="col-6 text-right">
                        <a href="https://github.com/estacao-hack-2020/stay-safe" target="_blank"><i class="fab fa-github"></i> Click to Github</a>
                    </div>
                </div>
            </div>
        `;
}