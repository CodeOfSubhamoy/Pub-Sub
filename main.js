import { actorForm } from "./modules/actor-form.js";
import { actors } from "./modules/actors.js";
import { stats } from "./modules/stats.js";

document.addEventListener("DOMContentLoaded", () => {
  let main = document.querySelector("main");
  let aside = document.querySelector("aside");
  //add a stats module
  stats.render(aside);
  //add an actors module
  actors.render(main);
  // add a form to add actors
  actorForm.render(aside);
});
