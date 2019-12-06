// Use Insertion Sort algorithm to sort the argument array
insertionSort([4, 8, 20, 54, 2]);

function insertionSort(anArray) {
    let length = anArray.length;
    for (let i = 0; i < length; i++) {

        let insertVal = anArray[i];
        let insertPos = i - 1;

        while (insertPos >= 0 && anArray[insertPos] > insertVal) {
            anArray[insertPos + 1] = anArray[insertPos];
            insertPos--;
        }
        anArray[insertPos + 1] = insertVal;

    }
    console.log(anArray);
}



//   for every element starting at the second position to the end:
//     	save the current value
//
//initialize position variable for scanning left
//while (there are elements to the left of the current value and
//            the test element to the left is > current value)
//         slide the test element to the right
//         move onto the next test element
//
//      insert the current value into the proper position
