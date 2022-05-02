export async function createEvents(getNotes, getLoadiing) {
  const { dataNote } = await getNotes("notes");
  console.log(dataNote);
  let value = "";
  dataNote.results.forEach((result) => {
    if (result.location_type === "Farm") {
      createAnnotation(result);
    }
  });

  function createAnnotation(dataNote) {
    const imgArr = [];
    dataNote.attachments.images.forEach((res) => imgArr.push(res.thumb_url));

    const annotationBody = document.querySelector(
      ".content-annotation-container"
    );
    const contentAnnotation = document.createElement("div");
    contentAnnotation.classList.add("content-annotation");

    contentAnnotation.innerHTML = `
      <div class="content-annotation__title">
          <img src="img/pencil.svg" alt="pencil">
          <h4>Anotação</h4>
      </div>
  
      ${
        dataNote.attachments.images.length > 0
          ? `
          <div class="content-annotation__imgs">
          ${imgArr.map(
            (element) =>
              `<div class="annotation-img"><img src=${element}></div>`
          )}
          </div>
          `
          : ""
      }
      </div>
          <div class="content-annotation__description">
              <p>${dataNote.description}!</p>
          </div>
      `;
    annotationBody.appendChild(contentAnnotation);
  }
}
