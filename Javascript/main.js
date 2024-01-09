//Agregar productos al carrito mientras que el total sea menos de 150KG:

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






