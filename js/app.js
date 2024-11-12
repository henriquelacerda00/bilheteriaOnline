function comprar(){
    let tipo = document.getElementById('tipo-ingresso').value ; 
    let qtd = Number(document.getElementById('qtd').value);
    if(isNaN(qtd)||qtd<=0||!Number.isInteger(qtd)){
        alert('Erro na quantidade de ingressos')
        document.getElementById('qtd').value = '';
        return;
    }
    if(tipo === 'pista'){
        let qtdPista = document.getElementById('qtd-pista')
        if(qtd>qtdPista.textContent){
            alert('Quantidade indisponível para Pista.')
            document.getElementById('qtd').value = '';
        }else{
            qtdPista.textContent = qtdPista.textContent - qtd
            alert('Compra realizada com sucesso!')
            document.getElementById('qtd').value = '';
        }
    }

    if(tipo === 'inferior'){
        let qtdInferior = document.getElementById('qtd-inferior')
        if(qtd>qtdInferior.textContent){
            alert('Quantidade indisponível para cadeira Inferior.')
            document.getElementById('qtd').value = '';
        }else{
            qtdInferior.textContent = qtdInferior.textContent - qtd
            alert('Compra realizada com sucesso!')
            document.getElementById('qtd').value = '';
        }
    }

    if(tipo === 'superior'){
        let qtdSuperior = document.getElementById('qtd-superior')
        if(qtd>qtdSuperior.textContent){
            alert('Quantidade indisponível para cadeira Superior.')
            document.getElementById('qtd').value = '';
        }else{
            qtdSuperior.textContent = qtdSuperior.textContent - qtd
            alert('Compra realizada com sucesso!')
            document.getElementById('qtd').value = '';
        }
    }

}