const lib=require("k-lib-im");
/**
 * @typedef {Object} t1109 [주식] 시세 - 시간외체결량
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1109_OutBlock} t1109OutBlock
 * @property {Array<t1109_OutBlock1>} t1109OutBlock1
 */
/**
 * @typedef {Object} t1109_OutBlock [주식] 시세 - 시간외체결량 
 * @property {string} ctsshcode 종목cts(6)
 * @property {string} ctschetime 체결cts(10)
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t1109_OutBlock1 [주식] 시세 - 시간외체결량 
 * @property {string} dan_chetime 시간(10)
 * @property {number} dan_price 현재가(8)
 * @property {string} dan_sign 전일대비구분(1)
 * @property {number} dan_change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} dan_cvolume 체결량(8)
 * @property {number} chdegree 체결강도(9.2)
 * @property {number} dan_volume 누적거래량(12)
 */
/**
 * [주식] 시세 - 시간외체결량 (초당 1건 제한)
 * @param {string} shcode 종목코드(6) - 
 * @param {string} dan_chetime 체결cts(10) - 연속조회시 OutBlock의 동일필드 입력
 * @param {number} idx IDX(4) - 연속조회시 OutBlock의 동일필드 입력
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1109|null>}  실패시 null 반환
 */
module.exports = async(shcode="",dan_chetime="",idx=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1109",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1109InBlock":{
        "shcode":shcode,
        "dan_chetime":dan_chetime,
        "idx":idx
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/market-data",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}