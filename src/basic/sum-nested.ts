// create a function that takes a nested array of numbers and returns the sum of all the numbers in the array

type NestedArray = number | NestedArray[]

function sumNested(arr: NestedArray[]) {
    let total = 0
    for (let e of arr) {
        if (typeof e === 'number') {
            total += e
        } else {
            total += sumNested(e)
        }
    }
    return total
}

export { sumNested }

