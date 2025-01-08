/**
 * @property {object} Define a configuração do sprite que representa o jogador.
 * @author Siael Alves
 * @copyright (c) 2025 Copyright, Siael Alves
 */
let player = {
 position: {
  x: 0,
  y: 0
 },
 speed: 5,

 events: {
  onclick: () => {
   document.querySelector("#player").classList.toggle("playerMove");
  }
 }
}