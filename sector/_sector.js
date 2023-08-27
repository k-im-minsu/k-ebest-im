/**@typedef {import('./price/_price.js')} price*/
/**@typedef {import('./chart/_chart.js')} chart*/
/**@typedef {import('./realtime/_realtime.js')} realtime*/

/**
 * @typedef {Object} Sector
 * @property {price} 시세
 * @property {chart} 차트
 * @property {realtime} 실시간
 */

/**@type {Sector} */
module.exports=(function(){
    this.시세=require('./price/_price.js')
    this.차트=require('./chart/_chart.js')
    this.실시간=require('./realtime/_realtime.js')
    return this;
})();