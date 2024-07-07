const lib=require("k-lib-im");
/**
 * @typedef {Object} t1951 [주식] ELW - ELW시간대별체결조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1951_OutBlock} t1951OutBlock
 * @property {Array<t1951_OutBlock1>} t1951OutBlock1
 */
/**
 * @typedef {Object} t1951_OutBlock [주식] ELW - ELW시간대별체결조회 
 * @property {string} cts_time 시간CTS(8)
 */
/**
 * @typedef {Object} t1951_OutBlock1 [주식] ELW - ELW시간대별체결조회 
 * @property {string} chetime 시간(8)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} cvolume 체결수량(12)
 * @property {number} chdegree 체결강도(8.2)
 * @property {number} volume 거래량(12)
 * @property {number} mdvolume 매도체결수량(12)
 * @property {number} mdchecnt 매도체결건수(8)
 * @property {number} msvolume 매수체결수량(12)
 * @property {number} mschecnt 매수체결건수(8)
 * @property {number} revolume 순체결량(12)
 * @property {number} rechecnt 순체결건수(8)
 */
/**
 * [주식] ELW - ELW시간대별체결조회 (초당 2건 제한)
 * @param {string} shcode 단축코드(6) - 
 * @param {number} cvolume 특이거래량(12) - 체결량 > 특이체결량인 종목
 * @param {string} starttime 시작시간(4) - 
 * @param {string} endtime 종료시간(4) - 
 * @param {string} cts_time 시간CTS(8) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 cts_time 값으로 설정
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1951|null>}  실패시 null 반환
 */
module.exports = async(shcode="",cvolume=0,starttime="",endtime="",cts_time="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1951",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1951InBlock":{
        "shcode":shcode,
        "cvolume":cvolume,
        "starttime":starttime,
        "endtime":endtime,
        "cts_time":cts_time
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/elw",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}