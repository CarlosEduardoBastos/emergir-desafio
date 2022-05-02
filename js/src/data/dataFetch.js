function getToken() {
  return "379238b5-705c-48bc-b8c9-27e26676b417";
}
export async function getNotes(resource) {
  const url = `https://justcors.com/tl_f569cd7/https://farmbox.cc/api/public/technical_visit_report/${resource}.json?token=${getToken()}`;

  try {
    const note = await fetch(url);
    const dataNote = await note.json();

    return { dataNote, note };
  } catch (error) {
    return console.log(error);
  }
}
export async function getPlantetion(resource) {
  const url = `https://justcors.com/tl_f569cd7/https://farmbox.cc/api/public/technical_visit_report/${resource}.json?token=${getToken()}`;

  try {
    const plantetionData = await fetch(url);
    const platetionRes = await plantetionData.json();

    return { platetionRes, plantetionData };
  } catch (error) {
    return console.log(error);
  }
}

export async function getUser() {
  const url =
    "https://justcors.com/tl_f569cd7/https://farmbox.cc/api/public/content_details.json?token=379238b5-705c-48bc-b8c9-27e26676b417";

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    return console.log(error);
  }
}

export async function getFarm() {
  const url =
    "https://justcors.com/tl_f569cd7/https://farmbox.cc/api/public/technical_visit_report/farm.json?token=379238b5-705c-48bc-b8c9-27e26676b417";

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return { response, data };
  } catch (error) {
    return console.log(error);
  }
}
