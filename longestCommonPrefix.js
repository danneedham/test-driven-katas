const shortest = (arr) => {
    let shortest = arr[0]
    for (let i = 1; i<arr.length;i++){
        if (arr[i].length<shortest.length){
            shortest = arr[i]
        }
    }
    return shortest
}

const longestCommonPrefix = (arr) => {
    let shortestOne = shortest(arr)
    for (let i = shortestOne.length; i>0; i--) {
        for (let j = 0; j < arr.length; j++) {
            if (shortestOne !== arr[j].slice(0,shortestOne.length)){
                shortestOne=shortestOne.slice(0,i-1)
                break
            }
            if (shortestOne === arr[j].slice(0,shortestOne.length) && j===arr.length-1){
                return shortestOne
            }
        }
    }
}

module.exports = {
    shortest,
    longestCommonPrefix
}