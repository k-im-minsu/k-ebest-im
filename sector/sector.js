
module.exports=(function(){
    this.시세=require('./price/price.js')
    this.차트=require('./chart/chart.js')
    this.실시간시세=require('./realtime/realtime.js')
    return this;
})();