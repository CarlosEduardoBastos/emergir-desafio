export async function createContentHeader(getUser, loading) {
  const data = await getUser();
  const report = document.querySelector(".header-container__report");
  if (loading) {
    report.innerHTML += "loading";
  }
  report.innerHTML += `<h2>Relatório de visitas técnica ${data.details.date}</h2>`;
}
