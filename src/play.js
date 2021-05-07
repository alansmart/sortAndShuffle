import {fetchCurrentTiles, render} from './method';

/**
 * function to be called on click of SHUFFLE button
 */
const shuffledTiles = () => {
    let nodes = fetchCurrentTiles();
    nodes = shuffledArray(nodes);
    render(nodes);
}

/**
 * Function to be called on click of SORT button
 */
const sortedTiles = () => {
    let nodes = fetchCurrentTiles();
    nodes = sortedArray(nodes);
    render(nodes);   
}

document.getElementById('shuffleBtn').onclick = shuffledTiles;
document.getElementById('sortBtn').onclick = sortedTiles;