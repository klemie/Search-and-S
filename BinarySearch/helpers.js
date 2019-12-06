// Search a SORTED array for an item. If found, return index. 
// If not found, return -1
//function binarySearch(anArray, item) {
//    let lowerIndex = anArray[0];
//    let upperIndex = anArray[anArray.length - 1];
//    let middleIndex;
//
//    while (lowerIndex <= upperIndex) { //there are still values to check
//
//        middleIndex = Math.floor((lowerIndex + upperIndex) / 2);
//        //        set middle index to average of lower and upper index.
//        if (item == middleIndex) {
//            return middleIndex;
//
//        } else if (item < middleIndex) {
//            upperIndex = middleIndex - 1;
//            //  set upper index to one less than the middle index
//
//        } else {
//            //  set lower index to one more than the middle index
//            lowerIndex = middleIndex + 1;
//
//        }
//        // item is greater than the value at the middle index
//    }
//
//    // Went through loop without finding item
//    return -1
//}
