function createPictureElement(pictureData, template) {
  const {id, url, description, likes, comments} = pictureData;
  const newPictureElement = template.cloneNode(true);

  newPictureElement.dataset.pictureId = id;
  const imgElement = newPictureElement.querySelector("img.picture__img");
  imgElement.src = url;
  imgElement.alt = description;
  newPictureElement.querySelector("span.picture__likes").textContent = likes;
  newPictureElement.querySelector("span.picture__comments").textContent = comments.length;
  return newPictureElement;
}

export function createMiniatures(picturesData) {
  const template = document.querySelector("template#picture").content.querySelector("a");
  const fragment = document.createDocumentFragment();

  picturesData.forEach((data) => {
    const pictureElement = createPictureElement(data, template);
    fragment.appendChild(pictureElement);
  });

  return fragment;
}
