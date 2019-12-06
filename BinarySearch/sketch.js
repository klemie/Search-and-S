
  let array1;
array1 = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

function binarySearch(anArray, item) {

    let lowerIndex = 0;
    let upperIndex = anArray.length - 1;
    let middleIndex;
    

    while (lowerIndex <= upperIndex) { //there are still values to check

        middleIndex = Math.floor((lowerIndex + upperIndex) / 2);
        //        set middle index to average of lower and upper index.
        if (item == anArray[middleIndex]) {
            return middleIndex;

        } else if (item <= anArray[middleIndex]) {
            upperIndex = middleIndex - 1;
            //  set upper index to one less than the middle index

        } else {
            //  set lower index to one more than the middle index
            lowerIndex = middleIndex + 1;

        }
        // item is greater than the value at the middle index
    }

    // Went through loop without finding item
    return -1
}


    let index = binarySearch(array1, 21);

    if (index == -1) {
        console.log("nah");
    } else {
        console.log("Found at " + index);
    }
