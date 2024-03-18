//get the elements from array and its total sum that match input target , not only 2 element ,choose elements inside the array in random
//example : [1,2,3,4,5,6,7,8,9,10] , target = 15

//but also 3 element or more

function getTargetSum(arr,target){
    let result = []
    let sum = 0
    let start = 0
    let end = 0
    while(start < arr.length){
        if(sum < target){
            sum += arr[end]
            end++
        } else if(sum > target){
            sum -= arr[start]
            start++
        } else {
            result.push(arr.slice(start,end))
            sum -= arr[start]
            start++
        }
    }
    return result
}

console.log(getTargetSum([1,2,3,4,5,6,7,8,9,10],15))




