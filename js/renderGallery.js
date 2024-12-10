import {generateData} from "./data.js";
import {createMiniatures} from "./createMiniatures.js";
import {renderPictureViewer} from "./renderPictureViewer.js";

function renderPicturesCollection(picturesData) {
  const miniatures = createMiniatures(picturesData);
  const container = document.querySelector("section.pictures");
  container.appendChild(miniatures);

  container.addEventListener("click", (evt) => {
    const picture = evt.target.closest("[data-picture-id]");
    if (!picture) {
      return;
    }

    const data = picturesData.find((x) => x.id === +picture.dataset.pictureId);
    renderPictureViewer(data);
  });
}

renderPicturesCollection(generateData());
