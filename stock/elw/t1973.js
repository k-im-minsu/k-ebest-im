const lib=require("k-lib-im");
/**
 * @typedef {Object} t1973 [주식] ELW - ELW시간대별예상체결조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1973_OutBlock} t1973OutBlock
 * @property {Array<t1973_OutBlock1>} t1973OutBlock1
 */
/**
 * @typedef {Object} t1973_OutBlock [주식] ELW - ELW시간대별예상체결조회 
 * @property {string} cts_time 시간CTS(8)
 */
/**
 * @typedef {Object} t1973_OutBlock1 [주식] ELW - ELW시간대별예상체결조회 
 * @property {string} chetime 시간(8)
 * @property {number} yeprice 예상체결가격(8)
 * @property {string} yegubun 예상체결구분(1)
 * @property {string} jnilysign 전일종가대비구분(1)
 * @property {number} jnilychange 전일종가대비(8)
 * @property {number} yediff 예상체결등락율(6.2)
 * @property {number} yevolume 예상체결량(12)
 * @property {number} ymdvolume 예상매도체결량(12)
 * @property {number} ymsvolume 예상매수체결량(12)
 */
/**
 * [주식] ELW - ELW시간대별예상체결조회 (초당 2건 제한)
 * @param {string} shcode 단축코드(6) - 
 * @param {string} cts_time 시간CTS(8) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 cts_time 값으로 설정
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1973|null>}  실패시 null 반환
 */
 exports.ELW시간대별예상체결조회 = async(shcode="",cts_time="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1973",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1973InBlock":{
        "shcode":shcode,
        "cts_time":cts_time
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