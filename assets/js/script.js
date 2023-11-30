let boton = document.querySelector("#verificar")
boton.addEventListener("click", function(){
    let img1 = Number(document.querySelector("#logo1").value)
    let img2 = Number(document.querySelector("#logo2").value)
    let img3 = Number(document.querySelector("#logo3").value)
    let texto= document.querySelector("#respuesta")
    suma= img1+img2+img3
    
    if(suma<=10){
        texto.innerHTML="Llevas "+suma+" stickers"
    }else{
        texto.innerHTML="No puedes llevar mas de 10 stickers"
    }
});

let imgDK= document.querySelector("#imgDK")

imgDK.addEventListener("click", function(){

    if(imgDK.style.border=="2px solid red"){
        imgDK.style.border="none"
    }else{
        imgDK.style.border="2px solid red"
    }
})

let pass=document.querySelector("#password")
pass.addEventListener("click", function(){
    let nro1=document.querySelector("#nro1").value
    let nro2=document.querySelector("#nro2").value
    let nro3=document.querySelector("#nro3").value
    let respuesta=document.querySelector("#final")

    if(nro1==9 && nro2==1 && nro3==1){
        respuesta.innerHTML="El password 1 es correcto"     
    }else{
        if(nro1==7 && nro2==1 && nro3==4){
            respuesta.innerHTML="El password 2 es correcto"
        }else{
            respuesta.innerHTML="El password no es correcto"
        }
    }
})
