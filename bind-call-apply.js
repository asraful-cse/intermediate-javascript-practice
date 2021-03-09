// 25-3:: object use bind to borrow method from another...
// 25-4:: different between bind,call and apply....

//bind kivabe kaz kore? jokhon ekta object er vetore method ase ,
// ,amra seita niye kaz korte pari,
//  ,but ei method/function ke onno ekta object a niye kaz korte chai tokhon bind,call,apply use kori.

//ek kothai ekta object er method/function ke onno object a bind kore bebohar kora hoi..

const normalPerson = {
    firstName :'Rohim',
    lastName  : 'Uddin',
    salary: 1500,

    getFullName: function () {
     console.log(this.firstName, this.lastName);     
    } ,
    chargeBill: function (amount ,tax , vat) {
        console.log(this);
        this.salary = this.salary - amount  - vat;    
        return this.salary; 
    }

}


const heroPerson = {
    firstName :'hero',
    lastName  : 'alom',
    salary: 1500,
}


//  /bind  ..start...
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(100,50,10);
console.log(heroPerson.salary);

// / bind ..end.. 



// / call..start..call kivabe kaz koore?::
// call hosee just oi method take call korbo > korar pore prothom  arguement hisebe jei method take korte chai seitake pass korbo
// > tarpore (,) comma diye diye pathabo.   call er hosse C/comma and .

// const heroChargeBill = normalPerson.chargeBill.call(heroPerson,900,20,10);
// console.log(heroPerson.salary);

// output::
// { firstName: 'hero', lastName: 'alom', salary: 1500 }
// 570
// / call ... end ... 




// / apply... start.....  first ..apply kivabe kaz koore?::
// apply hosee just oi object er method take call korbo > korar pore prothom  arguement hisebe jei method take korte chai seitake pass korbo
// > tarpore [] er vatore diye diye pathabo.   apply er hosse array/[] er age comma dite hobe .

// const heroChargeBill =  normalPerson.chargeBill.apply(heroPerson,[1000,100,10]); 
//  console.log(heroPerson.salary);

// output::
// { firstName: 'hero', lastName: 'alom', salary: 1500 }
// 400
// / apply... end...
