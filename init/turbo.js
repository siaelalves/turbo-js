let frameInterval;

/**
 * Função que executa um callback a cada frame.
 * @param {*} callback Função a ser executada a cada frame.
 * @param {*} speed Velocidade do frame em milissegundos.
 * @returns {void} Esta função não retorna nada, a menos que ocorra 
 * um erro. Nesse caso, retornará um tipo Exception.
 */
function frame(callback, speed) {
 frameInterval = setInterval(callback, speed); 
}

/**
 * Executa uma ação ao pressionar uma tecla.
 * @param {*} e Tecla pressionada.
 * @param {*} callback Função a ser executada ao pressionar a tecla.
 * @returns {void} Esta função não retorna nada, a menos que ocorra 
 * um erro. Nesse caso, retornará um tipo Exception.
 */
function pressKey(callback){
 callback();
}

grid.M();