const person1={
    name:"Pedro",
    surname:"Sanchez",
    sayName:function(){
        console.log(this.name+" "+this.surname);
    }
}
const person2 = {
    name: 'Jimena',
    surname: 'Juarez'
}

person1.sayName.call(person2)