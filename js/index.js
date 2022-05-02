import { getUser } from "./src/data/dataFetch.js";
import { getFarm } from "./src/data/dataFetch.js";
import { getNotes } from "./src/data/dataFetch.js";
import { getPlantetion } from "./src/data/dataFetch.js";
import { createContentHeader } from "./src/view/createHeader.js";
import { createUser } from "./src/view/createUser.js";
import { createTalhoes } from "./src/view/createTalhoes.js";
import { createEvents } from "./src/view/createAnnotation.js";

window.onload = async () => {
  document.querySelector(".main-conteiner-body").style = "display: none";
  if (document.readyState === "complete") {
    try {
      await createContentHeader(getUser);
      await createUser(getUser, getFarm);
      await createEvents(getNotes);
      await createTalhoes(getNotes, getPlantetion);
    } catch (e) {
      console.log(e);
    } finally {
      document.querySelector(".main-conteiner-body").style = "display: block";
      document.querySelector(".c-loader").style = "display: none;";
    }
  }
};
