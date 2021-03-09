// 25-1:: object method property review .
// object array er vetore ek ba kathik method/function diya 'this.' use kore object er bahire theke call kore output dekhte pari.
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
//console.log(normalPerson.lastName);

normalPerson.chargeBill(1000);
normalPerson.chargeBill(500);
console.log(normalPerson.salary);     // output: 0