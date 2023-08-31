const lib=require("k-lib-im");
/**
 * @typedef {Object} t1903 [주식] ETF - ETF일별추이
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1903_OutBlock} t1903OutBlock
 * @property {Array<t1903_OutBlock1>} t1903OutBlock1
 */
/**
 * @typedef {Object} t1903_OutBlock [주식] ETF - ETF일별추이 
 * @property {string} date 일자(8)
 * @property {string} hname 종목명(20)
 * @property {string} upname 업종지수명(20)
 */
/**
 * @typedef {Object} t1903_OutBlock1 [주식] ETF - ETF일별추이 
 * @property {string} date 일자(8)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} volume 누적거래량(12)
 * @property {number} navdiff NAV대비(9.2)
 * @property {number} nav NAV(9.2)
 * @property {number} navchange 전일대비(9.2)
 * @property {number} crate 추적오차(9.2)
 * @property {number} grate 괴리(9.2)
 * @property {number} jisu 지수(8.2)
 * @property {number} jichange 전일대비(8.2)
 * @property {number} jirate 전일대비율(8.2)
 */
/**
 * [주식] ETF - ETF일별추이 (초당 1건 제한)
 * @param {string} shcode 단축코드(6) - 
 * @param {string} date 일자(8) - 연속조회키 연속 조회시 이 값을 InBlock의 date 필드에 넣어준다.
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1903|null>}  실패시 null 반환
 */
module.exports = async(shcode="",date="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1903",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1903InBlock":{
        "shcode":shcode,
        "date":date
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/etf",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}