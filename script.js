// 1. Olá Mundo
function olaMundo() {
    document.getElementById('resultado1').textContent = 'Olá Mundo!';
}

// 2. Soma de 2 Inteiros
function somar() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const soma = num1 + num2;
    document.getElementById('resultado2').textContent = `A soma é: ${soma}`;
}

// 3. Alterar Propriedade por ID
function alterarPorId() {
    document.getElementById('paragrafoId').style.color = 'blue';
    document.getElementById('paragrafoId').style.fontWeight = 'bold';
}

// 4. Alterar Propriedade por Name
function alterarPorName() {
    const elementos = document.getElementsByName('nomeInput');
    elementos[0].value = 'Novo Texto';
}

// 5. Alterar Propriedade por Class
function alterarPorClasse() {
    const elementos = document.getElementsByClassName('caixa');
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = 'yellow';
    }
}