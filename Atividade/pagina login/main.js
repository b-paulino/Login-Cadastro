document.addEventListener("DOMContentLoaded", function(){
    const botaoLogin = document.querySelector('.login')

    botaoLogin.addEventListener("click", function(){
        const email = document.querySelector('#email').value.trim()
        const senha = document.querySelector('#senha').value.trim()

        if (!email.includes("@")){
            alert("O email deve conter um @.")
            return
        }

        if (senha.trim() === ""){
            alert("Senha inválida.")
            return
        }

        window.location.href = "http://127.0.0.1:5500/Atividade/pagina%20bem-vindo/index.html"
    })
})









