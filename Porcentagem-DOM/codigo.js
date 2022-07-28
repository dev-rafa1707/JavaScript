
function calcularDesconto(){
    var e1 = document.getElementById('n1');
    var num1 = parseFloat(e1.value);
    var e2 = document.getElementById('n2');
    var num2 = parseFloat(e2.value);
    var r = num1 - (num1 * num2 / 100)
    var p = document.getElementById('Resultado');
    p.innerHTML = 'Resultado:' + r;

}

