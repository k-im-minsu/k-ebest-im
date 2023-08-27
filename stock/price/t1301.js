const lib=require("k-lib-im");
/**
 * @typedef {Object} t1301 [주식] 시세 - 주식시간대별체결조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1301_OutBlock} t1301OutBlock
 * @property {Array<t1301_OutBlock1>} t1301OutBlock1
 */
/**
 * @typedef {Object} t1301_OutBlock [주식] 시세 - 주식시간대별체결조회 
 * @property {string} cts_time 시간CTS(10)
 */
/**
 * @typedef {Object} t1301_OutBlock1 [주식] 시세 - 주식시간대별체결조회 
 * @property {string} chetime 시간(10)
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
 * [주식] 시세 - 주식시간대별체결조회 (초당 2건 제한)
 * @param {string} shcode 단축코드(6) - 
 * @param {number} cvolume 특이거래량(12) - 거래량 > 특이거래량
 * @param {string} starttime 시작시간(4) - 장시작시간 이후
 * @param {string} endtime 종료시간(4) - 장종료시간 이전
 * @param {string} cts_time 시간CTS(10) - 연속조회시 OutBlock의 동일필드 입력
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1301|null>}  실패시 null 반환
 */
 exports.주식시간대별체결조회 = async(shcode="",cvolume=0,starttime="",endtime="",cts_time="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1301",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1301InBlock":{
        "shcode":shcode,
        "cvolume":cvolume,
        "starttime":starttime,
        "endtime":endtime,
        "cts_time":cts_time
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