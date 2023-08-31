module.exports=(function(){
    this.시간조회=require('./timesearch/timesearch.js')
    this.실시간시세=require('./realtime/realtime.js')
    return this;
})();