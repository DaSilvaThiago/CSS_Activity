const humam_age = 22;
let  dog_age = 0;
const name = "Thiago";

for (let i = humam_age; i >= 1; i--) { 
    dog_age += (i <= 2)? 10.5: 4;
}

console.log(`Meu nome é ${name}. Tenho ${humam_age} anos em anos humanos,
    que são ${dog_age} anos em anos de cão`)
