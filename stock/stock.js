/**@typedef {import('./account/account.js')} account*/
/**@typedef {import('./chart/chart.js')} chart*/
/**@typedef {import('./elw/elw.js')} elw*/
/**@typedef {import('./etf/etf.js')} etf*/
/**@typedef {import('./exchange/exchange.js')} exchange*/
/**@typedef {import('./foreigner/foreigner.js')} foreigner*/
/**@typedef {import('./high/high.js')} high*/
/**@typedef {import('./investor/investor.js')} investor*/
/**@typedef {import('./order/order.js')} order*/
/**@typedef {import('./other/other.js')} other*/
/**@typedef {import('./price/price.js')} price*/
/**@typedef {import('./program/program.js')} program*/
/**@typedef {import('./realtime/realtime.js')} realtime*/
/**@typedef {import('./search/search.js')} search*/
/**@typedef {import('./sector/sector.js')} sector*/
/**@typedef {import('./tradeinfo/tradeinfo.js')} tradeinfo*/

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
    this.시세=require('./price/price.js')
    this.거래원=require('./exchange/exchange.js')
    this.투자정보=require('./tradeinfo/tradeinfo.js')
    this.프로그램=require('./program/program.js')
    this.투자자=require('./investor/investor.js')
    this.외인기관=require('./foreigner/foreigner.js')
    this.ELW=require('./elw/elw.js')
    this.ETF=require('./etf/etf.js')
    this.섹터=require('./sector/sector.js')
    this.종목검색=require('./search/search.js')
    this.상위종목=require('./high/high.js')
    this.차트=require('./chart/chart.js')
    this.기타=require('./other/other.js')
    this.계좌=require('./account/account.js')
    this.주문=require('./order/order.js')
    this.실시간=require('./realtime/realtime.js')
    return this;
})();