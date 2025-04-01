document.addEventListener("DOMContentLoaded", function(){
    const botaoCadastro = document.querySelector('.cadastro')

    botaoCadastro.addEventListener("click", function(){
        const nome = document.querySelector('#nome').value.trim()
        const senha = document.querySelector('#senha').value.trim()

        if (nome.length < 2){
            alert("O nome deve ter pelo menos 2 letras.")
            return
        }

        if (senha.length < 8 || senha.length > 15){
            alert("A senha deve ter entre 8 e 15 caracteres")
            return
        }

        window.location.href = "http://127.0.0.1:5500/Atividade/pagina%20bem-vindo/index.html"
    })
})









