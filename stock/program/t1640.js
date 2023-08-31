const lib=require("k-lib-im");
/**
 * @typedef {Object} t1640 [주식] 프로그램 - 프로그램매매종합조회_미니
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1640_OutBlock} t1640OutBlock
 */
/**
 * @typedef {Object} t1640_OutBlock [주식] 프로그램 - 프로그램매매종합조회_미니 
 * @property {number} offervolume 매도수량(8)
 * @property {number} bidvolume 매수수량(8)
 * @property {number} volume 순매수수량(8)
 * @property {number} offerdiff 매도증감(8)
 * @property {number} biddiff 매수증감(8)
 * @property {number} sundiff 순매수증감(8)
 * @property {number} basis 베이시스(6.2)
 * @property {number} offervalue 매도금액(12)
 * @property {number} bidvalue 매수금액(12)
 * @property {number} value 순매수금액(12)
 * @property {number} offervaldiff 매도금액증감(12)
 * @property {number} bidvaldiff 매수금액증감(12)
 * @property {number} sunvaldiff 순매수증감(12)
 */
/**
 * [주식] 프로그램 - 프로그램매매종합조회_미니 (초당 1건 제한)
 * @param {string} gubun 구분(2) - 11#거래소전체 12#거래소차익 13#거래소비차익 21#코스닥전체 22#코스닥차익 23#코스닥비차익
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1640|null>}  실패시 null 반환
 */
module.exports= async(gubun="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1640",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1640InBlock":{
        "gubun":gubun
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/program",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}