// P5.JS TEMPLATE - COMMENTS

// Declare Global Variables

let array;
// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);

    // Initialize Global Variables
    array = [2309930123480, 7, 8, 38, 3, 2.5, 3, 1, 2]
    bubbleSort(array);

}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    // RUN LOGIC

    // DRAW FRAME
    background(255);
}
// Use Bubble Sort algorithm to sort the argument array.

function bubbleSort(anArray) {

    let length = anArray.length;

    for (let numCompare = length - 1; numCompare > 0; numCompare--) {

        for (let j = 0; j < numCompare; j++) {

            if (anArray[j] > anArray[j + 1]) {

                let tmp = anArray[j];
                anArray[j] = anArray[j + 1];
                anArray[j + 1] = tmp;

            }
        }
    }
    console.log(anArray);

}

//    for the max number of comparisons needed down to one comparison:
//        for the current number of comparisons needed:
//	       compare adjacent elements and swap if needed
