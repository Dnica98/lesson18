

// const arr = [1,2,3,4,5,16]

// const arr1 =arr.filter((item,index,arr) =>{
//     return item % 2 === 0;
// })

// console.log(arr1)

// const arr2 = arr.filter((item,index,arr) =>{
//     if (item > 2) return item;
// })

// console.log(arr2)

// const arr23 = arr.filter((item,index,arr) => {
//     return item > 2;
// })

// console.log(arr23)


// selecteaza nr impare

// const arr3 =arr.filter((item,index,arr) => {
//     return index % 2 === 0 && index !== 0;
// })

// console.log(arr3)  

// // selecteaza nr pare

// const arr34 =arr.filter((item,index,arr) => {
//     return index % 2 > 0;
// })

// console.log(arr34)

// const arr = [1,2,3,4,5,6]
// const arr1 = [1,2,3,4,5]


// console.log([...arr, ...arr1])

// console.log(arr.map(item => item+1))

// console.log(arr)

// const pushResult = arr.push(9)

// console.log(arr)

// console.log(pushResult)


// const arr = [1,2,3,4,5,6,7]
// const func = (list,num) =>{
//     if (num < list.length) return list;
//     const result =[...list]

//     for (let i = 1; i <= num ;i++) {
//         result.pop()
//     }
//     return result;
// }

// console.log(func(arr, 6))
// console.log(arr)

// const restOperator =(arg1, arg2, ...rest) => {
//     console.log(rest)
// }

// restOperator(1,2,3,4,5,6,7,8)

const obj = {
    name:'DN',
    age:26,
    location:{
        city:'chisinau'
    }
}

// const name = obj.name
// const age = obj.age
// const location = obj.location

const {name, age, location} = {...obj}

console.log(obj.name)
console.log(obj.age)
console.log(obj.location.city)

