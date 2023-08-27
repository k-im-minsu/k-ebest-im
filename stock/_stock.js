/**@typedef {import('./account/_account.js')} account*/
/**@typedef {import('./chart/_chart.js')} chart*/
/**@typedef {import('./elw/_elw.js')} elw*/
/**@typedef {import('./etf/_etf.js')} etf*/
/**@typedef {import('./exchange/_exchange.js')} exchange*/
/**@typedef {import('./foreigner/_foreigner.js')} foreigner*/
/**@typedef {import('./high/_high.js')} high*/
/**@typedef {import('./investor/_investor.js')} investor*/
/**@typedef {import('./order/_order.js')} order*/
/**@typedef {import('./other/_other.js')} other*/
/**@typedef {import('./price/_price.js')} price*/
/**@typedef {import('./program/_program.js')} program*/
/**@typedef {import('./realtime/_realtime.js')} realtime*/
/**@typedef {import('./search/_search.js')} search*/
/**@typedef {import('./sector/_sector.js')} sector*/
/**@typedef {import('./tradeinfo/_tradeinfo.js')} tradeinfo*/

/**
 * @typedef {Object} Stock
 * @property {price} 시세
 * @property {exchange} 거래원
 * @property {tradeinfo} 투자정보
 * @property {program} 프로그램
 * @property {investor} 투자자
 * @property {foreigner} 외인기관
 * @property {elw} ELW
 * @property {etf} ETF
 * @property {sector} 섹터
 * @property {search} 종목검색
 * @property {high} 상위종목
 * @property {chart} 차트
 * @property {other} 기타
 * @property {account} 계좌
 * @property {order} 주문
 * @property {realtime} 실시간
 */

/**@type {Stock} */
module.exports=(function(){
    this.시세=require('./price/_price.js')
    this.거래원=require('./exchange/_exchange.js')
    this.투자정보=require('./tradeinfo/_tradeinfo.js')
    this.프로그램=require('./program/_program.js')
    this.투자자=require('./investor/_investor.js')
    this.외인기관=require('./foreigner/_foreigner.js')
    this.ELW=require('./elw/_elw.js')
    this.ETF=require('./etf/_etf.js')
    this.섹터=require('./sector/_sector.js')
    this.종목검색=require('./search/_search.js')
    this.상위종목=require('./high/_high.js')
    this.차트=require('./chart/_chart.js')
    this.기타=require('./other/_other.js')
    this.계좌=require('./account/_account.js')
    this.주문=require('./order/_order.js')
    this.실시간=require('./realtime/_realtime.js')
    return this;
})();