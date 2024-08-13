function getNumber() {
    let value = document.getElementById('value');
    const numero = parseFloat(value.value);
    const valuefinal = numero + 1;

    document.getElementById('result').innerText = `¿ahh si? pues gael te ama ${numero}`;
}