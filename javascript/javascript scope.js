//javascript has three types of scope
/**
 * Block scope
 * function scope
 * global scope
 */

{
    let a=10;
    var b=10;
}

console.log(b);

//local scope below
carname="swift"
console.log(carname);
function myfun(){
    carname="i20";
    console.log(carname);
}
myfun();
console.log(carname);

