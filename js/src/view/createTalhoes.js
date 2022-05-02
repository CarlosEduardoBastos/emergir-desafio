export async function createTalhoes(getNotes, getPlantetion) {
  const { platetionRes } = await getPlantetion("plantations");
  const { dataNote } = await getNotes("notes");
  let isActive = false;

  // fazendo um loop em cada plantation
  platetionRes.results.forEach((element, index) => {
    const events = document.querySelector(".events");
    const mainContainer = document.querySelector(".main-section-container");
    const imgsA = [];

    const imgArr = [];
    dataNote.results.forEach((item) => {
      platetionRes.results.forEach((dataId) => {
        if (item.location.id === dataId.id) {
          imgArr.push(item);
          isActive = true;
        }
      });
    });

    imgArr.forEach((resF) => {
      resF.attachments.images.forEach((res) => imgsA.push(res.thumb_url));
    });

    // verificando se o annotation existe
    dataNote.results.forEach((noteElement) => {
      if (element.id === noteElement.location.id) {
        isActive = true;
      }
    });
    createHeader(events, element, index, mainContainer, imgArr, isActive);
    mainContainer.appendChild(events);
  });

  // a função para criar o header
  function createHeader(
    events,
    talhao,
    index,
    mainContainer,
    imgArr,
    isActive
  ) {
    events.innerHTML = `
    <div class="events-content">
        <div class="events-content-data">
            <div class="events-content-data__title">
                <h2>${talhao.name}</h2>
                <div>
                    <p>1º ciclo</p>
                </div>
            </div>
            <div class="events-content-data__text">
                <p>${talhao.planned_date}</p>
            </div>
            <div class="events-content-data__button">
                <button>Plantado</button>
            </div>
        </div>
        <div class="planting-data">
            <div class="planting-data-container">
                <div class="planting-data__content">
                    <div class="content-data">
                        <p>Data do Plantio</p>
                        <span>${talhao.date}</span>
                    </div>
                    <div class="content-data">
                        <p>Emergência</p>
                        <span>${talhao.emergence_prediction_date}</span>
                    </div>
                    <div class="content-data">
                        <p>Colheita</p>
                        <span>07/05/2020</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="arrow ">
          <img class="item-${talhao.id}" src="../../img/arrow.svg"/>
        </div>
    </div>
    </div>
    `;
    createCard(imgArr, talhao, index, isActive, events);
  }
  // a função para criar os cards
  function createCard(imgArr, talhao, index, isActive, events) {
    let annotationE = document.createElement("div");
    annotationE.classList.add(
      `content-annotation-events`,
      `element-${talhao.id}`
    );

    imgArr.forEach((element) => {
      if (index === 0 && talhao.id === element.location.id) {
        const itemE = document.createElement("div");
        itemE.classList.add("content-annotation");
        itemE.innerHTML = `
            <div class="content-annotation__title">
                <img src="img/pencil.svg" alt="pencil">
                <h4>Anotação</h4>
            </div>
          ${`
            <div class="content-annotation__imgs">
              ${
                talhao.id === element.location.id
                  ? element.attachments.images
                      .map((elementImg) => `<img src=${elementImg.thumb_url}/>`)
                      .join("")
                  : ""
              }
            </div>
          <div class="content-annotation__description">
            <p>${element.description}!</p>
          </div>
        </div>

      `}`;

        events.appendChild(annotationE);
        annotationE.appendChild(itemE);
      } else if (talhao.id === element.location.id) {
        const itemE = document.createElement("div");
        itemE.classList.add("content-annotation");
        itemE.innerHTML = `
          
            <div class="content-annotation__title">
                <img src="img/pencil.svg" alt="pencil">
                <h4>Anotação</h4>
            </div>
          ${`
            <div class="content-annotation__imgs">
              ${
                talhao.id === element.location.id
                  ? element.attachments.images
                      .map((elementImg) => `<img src=${elementImg.thumb_url}/>`)
                      .join("")
                  : ""
              }
            </div>
          <div class="content-annotation__description">
            <p>${element.description}!</p>
          </div>
        </div>
      
      `}`;

        events.appendChild(annotationE);
        annotationE.appendChild(itemE);
        annotationE.style.display = "none";
      }
    });

    animation(talhao);
  }
  function animation(talhao) {
    const arrow = document.querySelector(`.item-${talhao.id}`);
    const nota = document.querySelector(`.element-${talhao.id}`);
    if (nota.getAttribute("style")) {
      arrow.classList.add("active");
    }
    arrow.addEventListener("click", () => {
      if (!arrow.classList.contains("active") && nota) {
        arrow.classList.add("active");
        nota.style.display = "none";
      } else {
        arrow.classList.remove("active");
        nota.style.display = "flex";
      }
    });
  }
}
