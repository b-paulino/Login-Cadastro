document.addEventListener("DOMContentLoaded", function(){
    const botoes = document.querySelectorAll('.under')

    botoes.forEach((botao, index) => {
        botao.addEventListener("click", function(){
            if (index === 0){
                window.location.href = "http://127.0.0.1:5500/Atividade/pagina%20login/index.html";
            } else if (index === 1){
                window.location.href = "http://127.0.0.1:5500/Atividade/pagina%20cadastro/index.html";
            };
        });
    });
})

