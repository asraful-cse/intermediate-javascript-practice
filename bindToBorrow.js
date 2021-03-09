// 25-3:: object use bind to borrow method from another...
//bind kivabe kaz kore? jokhon ekta object er vetore method ase ,
// ,amra seita niye kaz korte pari,
//  ,but ei method/function ke onno ekta object a niye kaz korte chai tokhon bind use kori.

//ek kothai ekta object er method/function ke onno object a bind kore bebohar kora hoi..

const normalPerson = {
    firstName :'Rohim',
    lastName  : 'Uddin',
    salary: 1500,

    getFullName: function () {
     console.log(this.firstName, this.lastName);     
    } ,
    chargeBill: function (amount) {
        this.salary = this.salary - amount;     
    }

}

const heroPerson = {
    firstName :'hero',
    lastName  : 'alom',
    salary: 1500,
}

const friendlyPerson = {
    firstName :'azom',
    lastName  : 'komar',
    salary: 1500,
}

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(500);
heroChargeBill(100);
console.log(heroPerson.salary);
console.log(normalPerson.salary);


const friendChargeBill =  normalPerson.chargeBill.bind(friendlyPerson);
friendChargeBill(500);
heroChargeBill(100);
console.log(friendlyPerson.salary);


//::all output::

// 900
// 1500
// 1000