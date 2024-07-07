const lib=require("k-lib-im");
/**
 * @typedef {Object} t1631 [주식] 프로그램 - 프로그램매매종합조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1631_OutBlock} t1631OutBlock
 * @property {Array<t1631_OutBlock1>} t1631OutBlock1
 */
/**
 * @typedef {Object} t1631_OutBlock [주식] 프로그램 - 프로그램매매종합조회 
 * @property {number} cdhrem 매도차익미체결잔량(8)
 * @property {number} bdhrem 매도비차익미체결잔량(8)
 * @property {number} tcdrem 매도차익주문수량(8)
 * @property {number} tbdrem 매도비차익주문수량(8)
 * @property {number} cshrem 매수차익미체결잔량(8)
 * @property {number} bshrem 매수비차익미체결잔량(8)
 * @property {number} tcsrem 매수차익주문수량(8)
 * @property {number} tbsrem 매수비차익주문수량(8)
 */
/**
 * @typedef {Object} t1631_OutBlock1 [주식] 프로그램 - 프로그램매매종합조회 
 * @property {number} offervolume 매도수량(8)
 * @property {number} offervalue 매도금액(12)
 * @property {number} bidvolume 매수수량(8)
 * @property {number} bidvalue 매수금액(12)
 * @property {number} volume 순매수수량(8)
 * @property {number} value 순매수금액(12)
 */
/**
 * [주식] 프로그램 - 프로그램매매종합조회 (초당 1건 제한)
 * @param {string} gubun 구분(1) - 1:거래소 2:코스닥
 * @param {string} dgubun 일자구분(1) - 1:당일조회 2:기간조회
 * @param {string} sdate 시작일자(8) - 
 * @param {string} edate 종료일자(8) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1631|null>}  실패시 null 반환
 */
module.exports = async(gubun="",dgubun="",sdate="",edate="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1631",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1631InBlock":{
        "gubun":gubun,
        "dgubun":dgubun,
        "sdate":sdate,
        "edate":edate
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/program",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}