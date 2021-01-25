import TimerService from "../services/timerservice.js";
import "./gridmonth.js";
import "./systemdate.js";
import "./timer.js";
import "./monthdate.js";
import { PubSub } from "../services/pubsub.js";
class Calendar extends HTMLElement {
  #pubSub = new PubSub();
  connectedCallback() {
    TimerService.suscribe(this.#pubSub);
    this.appendChild(document.createElement("gnt-timer"));
    this.appendChild(document.createElement("gnt-system-date"));
    this.appendChild(document.createElement("gnt-month-date"));
    this.appendChild(document.createElement("gnt-gridmonth"));
  }
}

customElements.define("gnt-calendar", Calendar);
