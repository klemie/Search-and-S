function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let pivot = arr[arr.length - 1];
    let left = []
    let right = []

    for (let i = 0; i < arr.length - 1; i++) {
        let boi = arr[i]
        if (boi < pivot) {
            left.push(boi)
        } else {
            right.push(boi)
        }

    }
    return quickSort(left).concat([pivot]).concat(quickSort(right))
}

let array = [1, 5, 4, 9, 5, 0, -77, 88, 3, 9, -4, 834]
let sorty = quickSort(array)

console.log(sorty)