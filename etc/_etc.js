/**@typedef {import('./timesearch/_timesearch.js')} timesearch*/
/**@typedef {import('./realtime/_realtime.js')} realtime*/

/**
 * @typedef {Object} Etc
 * @property {timesearch} 시간조회
 * @property {realtime} 실시간
 */

/**@type {Etc} */
module.exports=(function(){
    this.시간조회=require('./timesearch/_timesearch.js')
    this.실시간=require('./realtime/_realtime.js')
    return this;
})();