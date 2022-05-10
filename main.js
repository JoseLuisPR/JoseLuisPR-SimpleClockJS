function escribir(){
    let tiempo = new Date();
    let horas = tiempo.getHours();
    let minutos = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();

    if (horas < 10){
        horas = "0" + horas
    }

    if (minutos < 10){
        minutos = "0" + minutos
    }

    if (segundos < 10){
        segundos = "0" + segundos
    }
    let time = `${horas}:${minutos}:${segundos}`

    

    document.getElementById('reloj').innerHTML= time;
    document.getElementById("reloj").textContent = time;



    setTimeout(escribir, 1000);

}

escribir();