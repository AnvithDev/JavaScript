// Maps (Similar to forEach but it returns the modified array with it unlike forEach)

// let ranks=[1,2,3,4]

// ranks.forEach((element,index) => {let ele=element+2
//     console.log(ele,index)})

// const modi=ranks.map((element,index)=>{let ele=element+2
// return ele})

// console.log(modi)

// const even =ranks.map((ele,index)=>{
//     if(ele%2===0)
//         return ele
// })

// console.log(even)   //Maps work on each element of the array
                    //In this case in place of 1 and 3 it returns undefined

// -----------------------------------------------------------

// Filter method (Same as map but it return only those elements which match a condition(usually))

let ranks=[1,2,3,4,5,6]

const even =ranks.filter((ele,index)=>{
         if(ele%2===0)
             return ele
     })

console.log(even)