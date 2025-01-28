document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let age = document.getElementById('age').value;
    let resultText = '';
    
    if (age >= 18) {
        resultText = 'Você é maior de 18 anos e pode votar.';
    } else if (age >= 16 && age < 18) {
        resultText = 'Você é maior que 16 e menor que 18 anos, seu voto é opcional.';
    } else {
        resultText = 'Você é menor de 16 anos e não pode votar.';
    }

    document.getElementById('result').innerText = resultText;
});
