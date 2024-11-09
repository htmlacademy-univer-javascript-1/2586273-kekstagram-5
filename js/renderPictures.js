import {generateData} from "./data.js";

function createPictureElement(pictureData, template) {
  const {url, description, likes, comments} = pictureData;
  const newPictureElement = template.cloneNode(true);

  const imgElement = newPictureElement.querySelector("img.picture__img");
  imgElement.src = url;
  imgElement.alt = description;
  newPictureElement.querySelector("span.picture__likes").textContent = likes;
  newPictureElement.querySelector("span.picture__comments").textContent = comments.length;
  return newPictureElement;
}

function createPicturesCollection(picturesData) {
  const template = document.querySelector("template#picture").content.querySelector("a");
  const fragment = document.createDocumentFragment();

  picturesData.forEach((data) => {
    const pictureElement = createPictureElement(data, template);
    fragment.appendChild(pictureElement);
  });

  return fragment;
}

function renderPicturesCollection(picturesData) {
  const fragment = createPicturesCollection(picturesData);
  document.querySelector("section.pictures").appendChild(fragment);
}

renderPicturesCollection(generateData());


