import { INTERVALCLOCK } from "./config.js"; //Importa el intervalo de tiempo.

export class TimerService {
  //Exporta la función que detecta el estado de la suscripción.
  #processID = null; //Inicializa un ID de proceso a "apagado".

  suscribe(cb) {
    //https://developer.mozilla.org/es/docs/Web/API/WindowTimers/setInterval
    this.#processID = setInterval(cb, INTERVALCLOCK);
  } //Si se detecta un "encendido", el ID de proceso se actualiza. La función se ejecuta cada INTERVALCLOCK (1000).

  dispose() {
    //https://developer.mozilla.org/es/docs/Web/API/WindowTimers/clearInterval
    this.#processID && clearInterval(this.#processID); //Si se detecta un "apagado", cancela la acción reiterativa iniciada por setInterval(). Funciona como un if.
    this.#processID = null; //Reinicia la variable a "apagado", a la espera de una nueva suscripción.
  }
}
