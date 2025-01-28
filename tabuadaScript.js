document.getElementById('tabuadaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let number = document.getElementById('number').value;
    let tabuadaText = `<h2>Tabuada do ${number}</h2>`;
    
    for (let i = 1; i <= 10; i++) {
        tabuadaText += `<p>${number} x ${i} = ${number * i}</p>`;
    }

    document.getElementById('tabuadaResult').innerHTML = tabuadaText;
});
