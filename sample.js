var arr = [1,2,3,4,5,6]
console.log(count)

const half = Math.floor(arr.length/2)


var count= 0
for(i=arr.length; i<=half; i--){
    console.log(`${count} and ${i}`)
   	arr[count] = arr[i]
       count++
    }
    
// console.log(arr)