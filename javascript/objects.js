var c=10
const person={
    firstname:'ayush',
    lastname:'malik',
    age:22,
    printc:function(){
        console.log(c)
    },
    fullname:function(){
        return this.firstname+" "+this.lastname
    }
}
person.printc()
console.log(person.fullname())
var p=12
function pp()
{
    p=88
    console.log(p)
}

pp()