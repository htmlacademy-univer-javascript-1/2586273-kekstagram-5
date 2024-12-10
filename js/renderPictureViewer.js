function createCommentElement({avatar, name, message}) {
  const container = document.createElement("li");
  container.outerHTML = "<li class=\"social__comment\"><img class=\"social__picture\" width=\"35\" height=\"35\"><p class=\"social__text\"></p></li>";

  const img = container.querySelector("img.social__picture");
  img.src = avatar;
  img.alt = name;
  container.querySelector("p.social__text").textContent = message;
  return container;
}

function createComments(comments) {
  const fragment = document.createDocumentFragment();

  comments.forEach((data) => {
    const newComment = createCommentElement(data);
    fragment.appendChild(newComment);
  });

  return fragment;
}

function renderPictureData({url, description, likes, comments}) {
  const img = document.querySelector(".big-picture__img").children[0];
  img.src = url;
  img.alt = description;
  document.querySelector("p.social__caption").textContent = description;
  document.querySelector("span.likes-count").textContent = likes;
  document.querySelector("span.comments-count").textContent = comments.length;
  document.querySelector("ul.social__comments").appendChild(createComments(comments));
}


export function closePictureViewer() {
  const popup = document.querySelector("section.big-picture.overlay");
  popup.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

export function renderPictureViewer(data) {
  const popup = document.querySelector("section.big-picture.overlay");
  popup.classList.remove("hidden");
  document.body.classList.add("modal-open");
  renderPictureData(data);

  const closeButton = document.querySelector("#picture-cancel");

  closeButton.addEventListener("click", closePictureViewer);
}
