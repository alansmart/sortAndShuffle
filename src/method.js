var tileBoard = document.getElementById('playboard');

/**
 * @method fetchCurrentTiles
 * @param none
 * @returns nodes array of tiles in the playboard
 */
 export const fetchCurrentTiles = () => {
    let nodes = tileBoard.children;
    nodes = Array.prototype.slice.call(nodes);
    return nodes;
}

/**
 * 
 * @param {*} array It is an array of number of tiles available in the playboard
 * @returns A new array to be rendered in the DOM
 */
 const shuffledArray = (array) => {
    let arrToBeShuffled = array.splice(0); // makes a shallow copy of the array passed as an args
    for (let i = arrToBeShuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arrToBeShuffled[i], arrToBeShuffled[j]] = [arrToBeShuffled[j], arrToBeShuffled[i]]; // using destructuring assignment
    }
    return arrToBeShuffled;
}

/**
 * 
 * @param {*} arr An array which need to be sorted. Here we are using a generic sort function to compare the innerHTML of
 * the elements of passed array.
 * @returns A sorted array
 */
 const sortedArray = (arr) => {
    let updatedArray = arr.sort((x,y) => {
        return x.innerHTML - y.innerHTML;
    });

    return updatedArray;
}


/**
 * 
 * @param {*} arr number of elements to be rendered 
 */
 export const render = (arr) => {
    let i = 0;
    while(i < arr.length) {
        tileBoard.appendChild(arr[i]);
        ++i;
    }
}