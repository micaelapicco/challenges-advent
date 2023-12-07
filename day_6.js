#!/usr/bin/node

`Los elfos están catalogando los renos de Santa 🦌 según la distancia que pueden recorrer.
Para ello tienen una cadena de texto movements donde cada caracter representa la dirección del movimiento del reno:

> = Avanza a la derecha
< = Avanza a la izquierda
* = Puede avanzar o retroceder

Por ejemplo, si el movimiento es >>*<, va hacia la derecha dos veces, luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.
Los elfos quieren saber cuál es la máxima distancia que recorre el reno al finalizar todos los movimientos.
En el ejemplo anterior, la máxima distancia que recorre el reno es 2. Va a la derecha dos veces +2, luego con el * puede ir a la derecha otra vez para maximizar la distancia +1 y luego va a la izquierda -1.
Ten en cuenta que no importa si es a la izquierda o la derecha, la distancia es el valor absoluto de la distancia recorrida máxima al finalizar los movimientos.`;

function maxDistance(movements) {
  let right = 0,
    left = 0,
    both = 0;
  for (let i = 0; i < movements.length; i++) {
    if (movements[i] === ">") {
      right++;
    } else if (movements[i] === "<") {
      left++;
    } else {
      both++;
    }
  }
  if (right + both - left >= left + both - right) {
    return right + both - left;
  } else {
    return left + both - right;
  }
}

const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
