    const ligar = document.getElementById('ligar')
    const desligar = document.getElementById('desligar')
    const lampada = document.getElementById('lamp')

    function estaquebrada(){
        return lampada.src.indexOf('quebrada') > -1
    }


    function ligada(){
        if(!estaquebrada()){
        lampada.src = "img/ligada.jpg"
        }
    }

    function desligada(){
        if(!estaquebrada()){
            lampada.src = "img/desligada.jpg"
            }
    }

    function quebrada(){
        lampada.src = "img/quebrada.jpg"
    }

    ligar.addEventListener('click',ligada)
    desligar.addEventListener('click',desligada )

    lampada.addEventListener('mouseover', ligada)
    lampada.addEventListener('mouseleave', desligada)
    lampada.addEventListener('dblclick',quebrada)