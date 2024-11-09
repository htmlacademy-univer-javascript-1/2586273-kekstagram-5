import {getRandomArrayItem, getRandomInteger, generateCommentId, generatePhotoId} from "./util.js";
import {
  photoDescriptions,
  commentMessages,
  commenterNames,
  MAX_COMMENTS_COUNT,
  MAX_PHOTOS_COUNT
} from "../constants/data.js";

function generateCommentData() {
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayItem(commentMessages),
    name: getRandomArrayItem(commenterNames),
  };
}

function generatePhotoData() {
  const id = generatePhotoId();

  const comments = Array.from({length: getRandomInteger(0, MAX_COMMENTS_COUNT)}, generateCommentData);

  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayItem(photoDescriptions),
    likes: getRandomInteger(15, 200),
    comments
  };
}

export function generateData() {
  return Array.from({length: MAX_PHOTOS_COUNT}, generatePhotoData);
}
