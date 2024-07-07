const lib=require("k-lib-im");
/**
 * @typedef {Object} t1308 [주식] 시세 - 주식시간대별체결조회챠트
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {Array<t1308_OutBlock1>} t1308OutBlock1
 */
/**
 * @typedef {Object} t1308_OutBlock1 [주식] 시세 - 주식시간대별체결조회챠트 
 * @property {string} chetime 시간(8)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} cvolume 체결수량(8)
 * @property {number} chdegvol 체결강도(거래량)(8.2)
 * @property {number} chdegcnt 체결강도(건수)(8.2)
 * @property {number} volume 거래량(12)
 * @property {number} mdvolume 매도체결수량(12)
 * @property {number} mdchecnt 매도체결건수(8)
 * @property {number} msvolume 매수체결수량(12)
 * @property {number} mschecnt 매수체결건수(8)
 * @property {number} open 시가(8)
 * @property {number} high 고가(8)
 * @property {number} low 저가(8)
 */
/**
 * [주식] 시세 - 주식시간대별체결조회챠트 (초당 1건 제한)
 * @param {string} shcode 단축코드(6) - 
 * @param {string} starttime 시작시간(4) - 장시작시간 이후(hhmm)
 * @param {string} endtime 종료시간(4) - 장종료시간 이전(hhmm)
 * @param {string} bun_term 분간격(2) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1308|null>}  실패시 null 반환
 */
module.exports = async(shcode="",starttime="",endtime="",bun_term="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1308",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1308InBlock":{
        "shcode":shcode,
        "starttime":starttime,
        "endtime":endtime,
        "bun_term":bun_term
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/market-data",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}