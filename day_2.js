#!/usr/bin/node

`En el taller de Santa, los elfos tienen una lista de regalos que desean
fabricar y un conjunto limitado de materiales. Los regalos son cadenas de
texto y los materiales son caracteres. Tu tarea es escribir una función que,
dada una lista de regalos y los materiales disponibles, devuelva una lista
de los regalos que se pueden fabricar. Un regalo se puede fabricar si
contamos con todos los materiales necesarios para fabricarlo.`

function manufacture(gifts, materials) {
    const listGifts = [];
    for (const gift of gifts) {
        let allMaterials = true;
        for (const material of gift) {
            if (!materials.includes(material)) {
                allMaterials = false;
                break;
            }
        }
        if (allMaterials) {
            listGifts.push(gift)
        }
    }
    return listGifts
  }

  const gifts = ['tren', 'oso', 'pelota']
  const materials = 'tronesa'
  
    manufacture(gifts, materials)
  