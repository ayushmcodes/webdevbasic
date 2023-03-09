const arr=[]
arr[0]=12
arr[1]=221
arr[2]=12
arr[3]=31
arr[4]="ayuush"

console.log(arr)
console.log(Object.keys(arr))
console.log(Object.values(arr))

for(const index in Object.keys(arr))
{
    console.log(arr[index])
}
if(arr[1]){
    console.log("present")
}
else{
    console.log("not present")
}

console.log(typeof(arr[4]))


class node{
    constructor(val)
    {
        this.val=val
    }
    showval()
    {
        console.log(this.val)
        return this.val
    }
}

var obj1=new node(12)
console.log(typeof(obj1.showval()))

console.log(obj1)