// / :25-6:new keyword , class and object difference ...
/// new keyword :: er kaz hosse kono object ke class banano jat onek golo object thakle tader bebohar same dekhai..


class person {
    constructor(firstName, lastName , salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;

        
    }
}

const heroPerson = new person('Hero', 'balam', 20000);
console.log(heroPerson);
const fndPerson = new person('nandu', 'pagla', 20000);
console.log(fndPerson);
const pPerson = new person('bogi', 'vai', 20000);
console.log(pPerson);

// / output:::
// $ node newKeyWordClassObject.js
// person { firstName: 'Hero', lastName: 'balam', salary: 20000 }
// person { firstName: 'nandu', lastName: 'pagla', salary: 20000 }
// person { firstName: 'bogi', lastName: 'vai', salary: 20000 }