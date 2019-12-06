let array;
// Search an array for an item. If found, return index. 
// If not found, return -1
function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == item) {
            return i;
        }
    }

    // Went through for loop without finding item
    return -1
}

array = [1, 3, 91, 6, 10, 40, 2, 4, 23];

let index = linearSearch(array, 91);

if (index == -1) {
    console.log("nah");
} else {
    console.log("Found at " + index);
}
