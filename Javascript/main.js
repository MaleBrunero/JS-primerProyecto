
let suscription = confirm("¿Deseas suscribirte a nuestro Newsletter para obtener un 10% de descuento?")
if(suscription == true){
    let correo = prompt("Por favor, ingresá tu correo electrónico")
    while (correo == ""){
        correo = prompt("Ingresá al menos un caracter")
        
    }
    if (correo != "" && correo != undefined ) {
        let edad = parseInt(prompt("Por favor, ingresá tu edad"))
        if (edad >= 18) {
            alert("Suscripción creada con éxito")
        } else {
            alert("Para suscribirte al Newsletter debés ser mayor de 18 años")
        }
    } else {
    }
} else {
    alert('Recordá que podés suscribirte en cualquier momento ingresando a la pestaña "Suscripciones"')
}


//Agregar productos al carrito mientras que el total sea menos de 150:

let cartWeight = [];
let suma = 0;

while (suma <= 150) {
  let productWeight = (prompt("Por favor, ingrese el peso en KG de su producto"));

if (productWeight === null) {
    alert("Operación finalizada")
    break;
}

productWeight = parseFloat(productWeight);

  if (isNaN(productWeight)) {
    alert("Por favor, ingrese un número válido.");
    continue; 
  }

  if (suma + productWeight > 150) {
    alert("La suma total excede los 150 kg. No se pueden agregar más productos.");
    break;
  }

  cartWeight.push(productWeight);
  suma += productWeight;
}

console.log("La suma total del carrito es: " + suma);
console.log("Los pesos individuales en el carrito son: " + cartWeight.join(", "));






