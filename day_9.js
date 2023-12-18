#!/usr/bin/node

`Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.`;

// function adjustLights(lights) {
//   let result = 0;

//   if (lights[0] === "🔴") {
//     for (let i = 0; i < lights.length; i++) {
//       if (i % 2 === 0 && lights[i] != "🔴") {
//         result++;
//       } else if (lights[i] === "🟢") {
//         result++;
//       }
//     }
//   }

//   return result;
// }

function adjustLights(lights) {
  let right = 0;
  let left = 0;
  let nextColor = lights[0];

  for (let i = 1; i < lights.length; i++) {
    nextColor = nextColor === "🟢" ? "🔴" : "🟢";
    if (lights[i] !== nextColor) {
      left++;
    }
  }

  nextColor = lights[lights.length - 1];
  for (let i = lights.length - 2; i >= 0; i--) {
    nextColor = nextColor === "🟢" ? "🔴" : "🟢";
    if (lights[i] !== nextColor) {
      right++;
    }
  }
  if (left < right) {
    return left;
  } else {
    return right;
  }
}

console.log(adjustLights(["🔴", "🔴", "🔴"]));
