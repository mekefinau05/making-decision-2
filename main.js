console.log('Hello World')

let backpack = []

backpack.push('Sword')
backpack.push('Shield')
backpack.push('food')

// backpack.shift()
backpack.splice(0, 1)

let furCoat = 'fur coat'
backpack.push(furCoat)

backpack.pop()

let itemCount = backpack.length
//console.log(itemCount)


backpack.push('flint', 'blanket', 'knife', 'toothbrush')

let backpack2 = backpack.splice(3, 3)


// for( let i=0; i < backpack.length; i++){
//     console.log(backpack[i])
// }

// for( let i=0; i <= backpack2.length - 1; i++){
//     console.log(backpack2[i])
// }

backpack.push('hat')

// for (let i = 0; i < 3; i++){
//     console.log(backpack[i])
// }

// if(backpack.length >= 3) {
//     for (let i = 0; i < 3; i++){
//         console.log(backpack[i])
//     }else {
//         for( let i=0; i < backpack.length; i++){
//             console.log(backpack[i])  
//     }
// }

let guessMe = 54

while (guessMe < 100) {
    console.log('-----', guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
    } else {
        guessMe += 3
    }
    guessMe += 22
} console.log('final value', guessMe)





console.log(backpack, backpack2[0]) 
