// Maps (Similar to forEach but it returns the modified array with it unlike forEach)

let ranks=[1,2,3,4]

ranks.forEach((element,index) => {let ele=element+2
    console.log(ele,index)})

const modi=ranks.map((element,index)=>{let ele=element+2
return ele})

console.log(modi)

const even =ranks.map((ele,index)=>{
    if(ele%2===0)
        return ele
})

console.log(even)