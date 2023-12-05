#!/usr/bin/node

`En el taller de Santa, un elfo travieso ha estado jugando en la cadena de
fabricación de regalos, añadiendo o eliminando un paso no planificado.
Tienes la secuencia original de pasos en la fabricación original y la
secuencia modificada modified que puede incluir un paso extra o faltar un paso.
Tu tarea es escribir una función que identifique y devuelva el primer
paso extra que se ha añadido o eliminado en la cadena de fabricación.
Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.`

function findNaughtyStep(original, modified) {
   let difference = "";
   
   if (original.length === modified.length) {
      for (let i = 0; i < original.length; i++) {
       if (original[i] !== modified[i]) {
           difference = modified[i];
           break;
         }
      }
   }
   if (original.length < modified.length) {
      for (let i = 0; i < modified.length; i++) {
         if (!original.includes(modified[i])) {
            difference = modified[i];
         }
      }
   }

   if (original.length > modified.length) {
      for (let i = 0; i < original.length; i++) {
         if (!modified.includes(original[i])) {
            difference = original[i];
         }
      }
   }

   return difference;
}
   
const original = 'abde'
const modified = 'abde'
findNaughtyStep(original, modified)
const findy = findNaughtyStep(original, modified)
console.log(original, modified)
console.log(findy)
