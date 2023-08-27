const lib=require("k-lib-im");
/**
 * @typedef {Object} t1941 [주식] 기타 - 종목별대차거래일간추이
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {Array<t1941_OutBlock1>} t1941OutBlock1
 */
/**
 * @typedef {Object} t1941_OutBlock1 [주식] 기타 - 종목별대차거래일간추이 
 * @property {string} date 일자(8)
 * @property {number} price 종가(8)
 * @property {string} sign 대비구분(1)
 * @property {number} change 대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 거래량(12)
 * @property {number} upvolume 당일체결(12)
 * @property {number} dnvolume 당일상환(12)
 * @property {number} tovolume 당일잔고(12)
 * @property {number} tovalue 잔고금액(12)
 * @property {string} shcode 종목코드(6)
 * @property {number} tovoldif 대차증감(12)
 */
/**
 * [주식] 기타 - 종목별대차거래일간추이 (초당 1건 제한)
 * @param {string} shcode 종목코드(6) - 
 * @param {string} sdate 시작일자(8) - 
 * @param {string} edate 종료일자(8) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1941|null>}  실패시 null 반환
 */
 exports.종목별대차거래일간추이 = async(shcode="",sdate="",edate="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1941",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1941InBlock":{
        "shcode":shcode,
        "sdate":sdate,
        "edate":edate
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/etc",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}