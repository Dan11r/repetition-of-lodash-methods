// repetition of lodash methods
const chunk = (arr, num) => { // example  arg (['a', 'b', 'c', 'd', 'e'], 2)
    let result = [] // example returned [['a', 'b'], ['c', 'd'], ['e']]
    let part = []

    for (let i = 0; i < arr.length; i++) {

        if (part.length < num) {
            part.push(arr[i])
        }
        if (part.length === num) {
            result.push(part)
            part = []
        }

    }
    result.push(part)
    return result
}

const compact = ((arr) => { // example  arg ([0, 1, false, 2, '', 3])
    const result = []       // example returned [[1, 2, 3]]
    for (let i = 0; i < arr.length; i++) {
        !!arr[i] && result.push(arr[i])
    }
    return result
})([0, 1, false, 2, '', 3])