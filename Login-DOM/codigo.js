
function fazerLogin(){

    var e1 = document.getElementById('usuario').value;
    var e2 = document.getElementById('senha').value;
    
    if (e1 == 'admin' && e2 == 9999){
        var h1 = document.createElement('h1');
        h1.innerHTML = ('Você foi autenticado com sucesso!');
        h1.style.color = '#00ff00'
        cab = document.getElementById('cabecalho');
        cab.appendChild(h1);
 
    }else{

        var h1 = document.createElement('h1');
        h1.innerHTML = ('Você errou o usuário. Tente novamente!');
        h1.style.color = '#ff0000'
        cab = document.getElementById('cabecalho');
        cab.appendChild(h1);


    }

}

