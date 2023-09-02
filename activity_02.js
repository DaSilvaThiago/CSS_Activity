//1
var favoriteFood = "Pizza";
//2
var numOfSlices = 8;
//3
console.log(favoriteFood);
//4
console.log(numOfSlices);
//5
/**let - limita a variavel ao scopo de um bloco, instrução ou expressão.
 * var - fica no scopo global ou no scopo da função.
 * const - é uma declaração para variaveis em scopo de um bloco onde ela nao pode ser alterada. Se for um objeto pode ser alterada, criada ou excluida 
 */
//6
let changeMe = true;
//7
changeMe = false;
//8
console.log(changeMe);
//9
const entree = "enchiladas";
//10
console.log(entree);
//11
//entree = "hello";
//12
let levelUp = 5;
levelUp += 1;
//13
let powerLevel = 100;
powerLevel -+ 1;
//14
let multiplyMe = 10;
multiplyMe *= 11;
//15
let quarterMe = 10;
quarterMe /= 4;
//16
let gainedDollar = 1;
gainedDollar++;
//17
let lostDollar = 10;
lostDollar--;
//18
let myName = "Thiago";
let myCity = "California";
console.log(`My name is ${myName}. My favorite city is ${myCity}`);