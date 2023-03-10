console.log(this);

const person={
    name:"ayush",
    age:20,
    aboutme:function(){
        return this;
    },
    print:function(){
        console.log(this.name+" "+this.age)
    }
}

console.log(person.aboutme());
console.log("below");
person.print();


function fun1(){
    console.log("inside function")
    console.log(this);
}

fun1();

arrowfun1=()=>{
    console.log
}



const k1=()=>this;

console.log(k1());


const pp={
    name:"ayush",
    age:22,
    print:()=>this.name+" "+this.age
}

console.log(pp.print());