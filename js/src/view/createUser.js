export async function createUser(getUser, getFarm) {
  const data = await getUser();
  const farm = await getFarm();
  const mainContainerData = document.querySelector(".main-container-data");
  const mainContainerDataUser = mainContainerData.querySelector(
    ".main-container-data__user"
  );
  mainContainerDataUser.innerHTML = `
      <div class="user-title">
          <p>Fazenda</p>
      </div>
      <div class="user-name">
          <h3>${data.farm.name}</h3>
      </div>
      <div class="user-size">
          <p>${
            farm.data.plots + farm.data.active_harvest_plantations.length
          } talhões</p>
      </div>
    `;

  const mainContainer = document.querySelector(".main-container-data__number");
  mainContainer.innerHTML = `
      <div class="data-farm">
      <div class="date-form">
          <p>Data da visita</p>
          <h3>${data.details.date}</h3>
      </div>
      <div class="accomplished">
          <p>Realizada por</p>
          <h3>${data.owner.name}</h3>
      </div>
      <div class="rain">
          <p>Pluviometria</p>
          <div class="rain-content">
              <img src="./img/icon1.svg" alt="icon">
              <h2>${farm.data.rain_until_date} mm</h2>
          </div>
          <p>Acumulado na safra</p>
      </div>
  </div>
  <div class="data-harvest">
      <div class="harvest">
          <p>Safra</p>
          <h3>${data.harvest.name}</h3>
      </div>
      <div class="radius">${data.owner.initials}</div>
  </div>
    `;

  const description = document.querySelector(
    ".main-container-data__description"
  );
  description.innerHTML = `
    <p class="description-title">Observações</p>
    <p class="description">
    ${data.details.observation}
    </p>
    `;
}
