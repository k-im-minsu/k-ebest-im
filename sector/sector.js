/**@typedef {import('./price/price.js')} price*/
/**@typedef {import('./chart/chart.js')} chart*/
/**@typedef {import('./realtime/realtime.js')} realtime*/

/**
 * @typedef {Object} Sector
 * @property {price} 시세
 * @property {chart} 차트
 * @property {realtime} 실시간
 */

/**@type {Sector} */
module.exports=(function(){
    this.시세=require('./price/price.js')
    this.차트=require('./chart/chart.js')
    this.실시간=require('./realtime/realtime.js')
    return this;
})();