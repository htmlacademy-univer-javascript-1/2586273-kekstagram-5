const MAX_COMMENTS_COUNT = 30;
const MAX_PHOTOS_COUNT = 25;
const commenterNames = ["Софья", "Ева", "Анна", "Мария", "Виктория", "Александр", "Михаил", "Артем", "Матвей", "Максим"];
const commentMessages = ["Всё отлично!", "В целом всё неплохо. Но не всё.", "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.", "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.", "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.", "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"];

const photoDescriptions = ["Запечатленная картина этого заката словно мечта, ожившая на фото.", "Каждый снимок дарит возможность вернуть в память миг, который невозможно забыть.", "На фотографии улыбка ребенка излучает счастье, способное согреть любое сердце.", "Старыe фото напоминают о прошедших временах, когда жизнь была другой.", "В каждом кадре скрыта история, достойная множества слов и эмоций. "];

function getRandomInteger(min, max) {
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

const generatePhotoId = createRandomIdFromRangeGenerator(1, MAX_PHOTOS_COUNT);
const generateCommentId = createRandomIdFromRangeGenerator(1, MAX_COMMENTS_COUNT);
const getRandomArrayItem = (array) => array[getRandomInteger(0, array.length - 1)];

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

function generateData() {
  return Array.from({length: MAX_PHOTOS_COUNT}, generatePhotoData);
}
