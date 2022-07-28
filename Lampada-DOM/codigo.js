
function mudarLampada(){
    var st = document.getElementById('status');
    var la = document.getElementById('lamp');
    var bt = document.getElementById('onoff');

    if (st.innerHTML=='ON'){
        st.innerHTML='OFF';
        la.src='lampada.png';
        bt.innerText='Ligar'

    }else{
        st.innerHTML='ON';
        la.src='lampada-acesa.png';
        bt.innerText='Desligar'
    }
    
}

