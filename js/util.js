import {MAX_PICTURES_COUNT, MAX_COMMENTS_COUNT} from "../constants/data.js";

export function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

export const generatePictureId = createRandomIdFromRangeGenerator(1, MAX_PICTURES_COUNT);
export const generateCommentId = createRandomIdFromRangeGenerator(1, MAX_COMMENTS_COUNT);
export const getRandomArrayItem = (array) => array[getRandomInteger(0, array.length - 1)];
