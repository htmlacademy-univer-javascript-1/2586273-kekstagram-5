import {getRandomArrayItem, getRandomInteger, generateCommentId, generatePictureId} from "./util.js";
import {
  pictureDescriptions,
  commentMessages,
  commenterNames,
  MAX_COMMENTS_COUNT,
  MAX_PICTURES_COUNT
} from "../constants/data.js";

function generateCommentData() {
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayItem(commentMessages),
    name: getRandomArrayItem(commenterNames),
  };
}

function generatePictureData() {
  const id = generatePictureId();

  const comments = Array.from({length: getRandomInteger(0, MAX_COMMENTS_COUNT)}, generateCommentData);

  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayItem(pictureDescriptions),
    likes: getRandomInteger(15, 200),
    comments
  };
}

export function generateData() {
  return Array.from({length: MAX_PICTURES_COUNT}, generatePictureData);
}
