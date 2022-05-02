export async function createContentHeader(getUser) {
  const data = await getUser();
  const report = document.querySelector(".header-container__report");
  report.innerHTML += `<h2>Relatório de visitas técnica ${data.details.date}</h2>`;
}
