function mergeSort(arr) {
    // base case 
    if (arr.length <= 1) {
        return arr
    } else {

        let mid = Math.floor(arr.length / 2)
        let leftSide = arr.slice(0, mid)
        let rightSide = arr.slice(mid, arr.length)

        return merge(mergeSort(leftSide), mergeSort(rightSide))
    }

}

function merge(arr1, arr2) {
    let joinedarr = [];
    let i = 0,
        j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            joinedarr.push(arr1[i]);
            i++;
        } else {
            joinedarr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        joinedarr.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        joinedarr.push(arr2[j])
        j++
    }
    return joinedarr;
}

let index = mergeSort([2, 76, 12312, 43645, 7, 423, 5, 73])
console.log(index)