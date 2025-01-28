document.getElementById('tabuadaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numero = parseFloat(document.getElementById('number').value); // Converte para número
    const operacao = document.getElementById('operation').value;
    const resultadoDiv = document.getElementById('tabuadaResult');
    
    let resultadoHTML = `<h3>Tabuada do ${numero} - Operação: ${operacao}</h3><div>`;

    // Verifica se a operação é divisão e se o número é 0
    if (operacao === 'divisao' && numero === 0) {
        resultadoHTML += `<p>Divisão por zero não é permitida!</p>`;
    } else {
        for (let i = 1; i <= 10; i++) {
            let resultado = 0;

            if (operacao === 'multiplicacao') {
                resultado = numero * i;
            } else if (operacao === 'soma') {
                resultado = numero + i;
            } else if (operacao === 'subtracao') {
                resultado = numero - i;
            } else if (operacao === 'divisao') {
                // Verifica se está tentando dividir por 0 em qualquer parte da tabuada
                if (i === 0) {
                    resultadoHTML += `<p>Divisão por zero não é permitida!</p>`;
                    break;  // Para de calcular as outras operações
                }
                resultado = (numero / i).toFixed(2); // Limita a 2 casas decimais
            }

            // Garantir que o número é mostrado corretamente sem o ponto (°) antes
            resultadoHTML += `<p>${numero} ${operacaoSymbol(operacao)} ${i} = ${resultado}</p>`;
        }
    }

    resultadoHTML += '</div>';
    resultadoDiv.innerHTML = resultadoHTML;
});

function operacaoSymbol(operacao) {
    switch (operacao) {
        case 'multiplicacao': return 'x';
        case 'soma': return '+';
        case 'subtracao': return '-';
        case 'divisao': return '/';
    }
}
