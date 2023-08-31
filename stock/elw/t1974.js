const lib=require("k-lib-im");
/**
 * @typedef {Object} t1974 [주식] ELW - ELW기초자산동일종목
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1974_OutBlock} t1974OutBlock
 * @property {Array<t1974_OutBlock1>} t1974OutBlock1
 */
/**
 * @typedef {Object} t1974_OutBlock [주식] ELW - ELW기초자산동일종목 
 * @property {number} cnt 종목갯수(4)
 */
/**
 * @typedef {Object} t1974_OutBlock1 [주식] ELW - ELW기초자산동일종목 
 * @property {string} shcode 종목코드(6)
 * @property {string} hname 종목명(40)
 * @property {string} cpgubun 콜/풋구분(2)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 거래량(12)
 */
/**
 * [주식] ELW - ELW기초자산동일종목 (초당 2건 제한)
 * @param {string} shcode 종목코드(6) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1974|null>}  실패시 null 반환
 */
module.exports = async(shcode="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1974",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1974InBlock":{
        "shcode":shcode
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/elw",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}