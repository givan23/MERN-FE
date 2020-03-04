import {TABLET_SCREEN_768} from "../Core/Costants/GenericConstants";


export const isMobile = (myArray, chunk_size) => {
        return window.innerWidth > TABLET_SCREEN_768 ? chunkArray(myArray, chunk_size) : myArray;
};

export const chunkArray = (myArray, chunk_size) => {

    let index;
    let arrayLength = myArray.length;
    let tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
        let myChunk = myArray.slice(index, index + chunk_size);
        tempArray.push(myChunk);
    }
    return tempArray;
};