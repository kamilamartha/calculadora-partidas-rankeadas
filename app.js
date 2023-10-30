
function devolucao(){
    let vitorias = window.prompt("Insira seu número de vitórias")
    let derrotas = window.prompt("Insira seu número de derrotas")
    let calculo = vitorias - derrotas
    let mensagem;

    if(calculo < 10){
        mensagem = `O herói tem ${calculo} saldo de vitórias. Seu nível é ferro.`
    }
    else if(calculo >= 10 && calculo < 20){
        mensagem = `O herói tem ${calculo} saldos de vitórias. Seu nível é bronze.`
    }
    else if(calculo >= 20 && calculo < 50){
        mensagem = `O herói tem ${calculo} saldos de vitórias. Seu nível é ouro.`
    }
    else if(calculo >= 50 && calculo < 100){
       mensagem = `O herói tem ${calculo} saldos de vitórias. Seu nível é diamante.`
    }
    window.alert(mensagem)
    
}
devolucao()
