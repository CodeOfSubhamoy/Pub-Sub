import { pubsub } from "./pubsub.js";

export const stats = {
  render: (container) => {
    let d = document.createElement("div");
    d.className = "stats-container";
    container.appendChild(d);

    let pa = document.createElement("p");
    pa.className = "actor-count";
    pa.innerHTML = `0 actors in list`;
    d.appendChild(pa);

    pubsub.subscribe("actorsUpdated", stats.actorsUpdated);
    console.log("STATS: listening for actorsUpdated events");

    pubsub.subscribe("actorDeleted", stats.actorsUpdated);
  },
  actorsUpdated: (list) => {
    console.log(
      `STATS: I hear that the actor list now has ${list.length} names.`
    );
    document.querySelector(
      ".actor-count"
    ).innerText = `${list.length} actors in list`;
  },
};
