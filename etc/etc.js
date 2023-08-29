/**@typedef {import('./timesearch/timesearch.js')} timesearch*/
/**@typedef {import('./realtime/realtime.js')} realtime*/

/**
 * @typedef {Object} Etc
 * @property {timesearch} 시간조회
 * @property {realtime} 실시간
 */

/**@type {Etc} */
module.exports=(function(){
    this.시간조회=require('./timesearch/timesearch.js')
    this.실시간=require('./realtime/realtime.js')
    return this;
})();