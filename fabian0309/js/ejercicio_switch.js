let ipClass = prompt("Ingrese la clase de direccionaminto IP: A, B O C");
console.log( "🚀 ~ ipClass:", ipClass);
switch (ipClass) {
    case "A": 
    alert("Class A : 10.0.0.1"); 
    break;
    case "B": 
    alert("Class B : 172.0.0.1"); 
    break;
    case "C": 
    alert("Class C : 192.167.0.1"); 
    break;
    default:
        alert ("El valor Ingresado no corresponde a ninguna de las clases");
    case "D": alert("Class D : 224.0.0.1"); 
    break;
  case "E": alert("Class E : 240.0.0.1"); break;
}