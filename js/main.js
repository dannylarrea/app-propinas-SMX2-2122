function calcProp() {
    var total=document.getElementById('total').value
    var opciones=document.getElementById('servicio').value
    var personas=document.getElementById('personas').value
    var resultado=Number(total)*Number(opciones)/Number(personas)
    var result=document.getElementById('respuesta')
    result.innerHTML="La propina es: "+resultado
}