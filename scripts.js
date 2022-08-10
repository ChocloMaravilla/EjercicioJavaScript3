
    let nombre1= "nombre";
    let number1 = 6;
    let Boolean="True"; 
    let nombre2=null;
    let number2= undefined;
    let simbolo= Symbol("O");
console.log(nombre1, number1, Boolean, nombre2, number2, simbolo);
console.log(typeof nombre1, typeof number1, typeof Boolean, typeof nombre2, typeof number2, typeof simbolo);
//Variable Scope Global.
var numer= 4;
//Variable Scope Local.
function aaa(){
    var numer = 4;
}
aaa();