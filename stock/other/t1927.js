const lib=require("k-lib-im");
/**
 * @typedef {Object} t1927 [주식] 기타 - 공매도일별추이
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1927_OutBlock} t1927OutBlock
 * @property {Array<t1927_OutBlock1>} t1927OutBlock1
 */
/**
 * @typedef {Object} t1927_OutBlock [주식] 기타 - 공매도일별추이 
 * @property {string} date 일자CTS(8)
 */
/**
 * @typedef {Object} t1927_OutBlock1 [주식] 기타 - 공매도일별추이 
 * @property {string} date 일자(8)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 거래량(12)
 * @property {number} value 거래대금(12)
 * @property {number} gm_vo 공매도수량(12)
 * @property {number} gm_va 공매도대금(12)
 * @property {number} gm_per 공매도거래비중(6.2)
 * @property {number} gm_avg 평균공매도단가(12)
 * @property {number} gm_vo_sum 누적공매도수량(12)
 * @property {number} gm_vo1 업틱룰적용공매도수량(12)
 * @property {number} gm_va1 업틱룰적용공매도대금(12)
 * @property {number} gm_vo2 업틱룰예외공매도수량(12)
 * @property {number} gm_va2 업틱룰예외공매도대금(12)
 */
/**
 * [주식] 기타 - 공매도일별추이 (초당 1건 제한)
 * @param {string} shcode 종목코드(6) - 
 * @param {string} date 일자(8) - 다음 조회시 사용. OutBlock의 date 필드 값을 입력함.
 * @param {string} sdate 시작일자(8) - 
 * @param {string} edate 종료일자(8) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1927|null>}  실패시 null 반환
 */
module.exports= async(shcode="",date="",sdate="",edate="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1927",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1927InBlock":{
        "shcode":shcode,
        "date":date,
        "sdate":sdate,
        "edate":edate
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/etc",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}