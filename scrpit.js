
function carregar(){ 
    var img = window.document.getElementById('imagem')
    var msg = window.document.getElementById('msg')
    var data = new Date()
var hora = 10
   //var hora = data.getHours()
    var dat= new Date()
    var mn = dat.getMinutes()
    msg.innerHTML= `Agora são ${hora} e ${mn} minutos`
    if (hora>= 0 && hora < 12){ 
        //bom dia
        img.src ='coca-lata.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hora>=12 && hora<18) { 
        //boa tarde
        img.src='coca.jpg'
        document.body.style.background ='#b9846f'
    }else{ 
        img.src='coca-zero.jpg'
        document.body.style.background ='#515154'
    }
}