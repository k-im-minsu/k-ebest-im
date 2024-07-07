const lib=require("k-lib-im");
/**
 * @typedef {Object} t1310 [주식] 시세 - 주식당일전일분틱조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1310_OutBlock} t1310OutBlock
 * @property {Array<t1310_OutBlock1>} t1310OutBlock1
 */
/**
 * @typedef {Object} t1310_OutBlock [주식] 시세 - 주식당일전일분틱조회 
 * @property {string} cts_time 시간CTS(10)
 */
/**
 * @typedef {Object} t1310_OutBlock1 [주식] 시세 - 주식당일전일분틱조회 
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
 * [주식] 시세 - 주식당일전일분틱조회 (초당 2건 제한)
 * @param {string} daygb 당일전일구분(1) - 0:당일 1:전일
 * @param {string} timegb 분틱구분(1) - 0:분 1:틱
 * @param {string} shcode 단축코드(6) - 
 * @param {string} endtime 종료시간(4) - 처음 조회시 시간 입력값. t1310OutBlock1.chetime <= endtime 인 데이터 조회됨.
 * @param {string} cts_time 시간CTS(10) - 처음 조회시 Space 다음 조회시 t1310OutBlock.cts_time 값 입력
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1310|null>}  실패시 null 반환
 */
module.exports= async(daygb="",timegb="",shcode="",endtime="",cts_time="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1310",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1310InBlock":{
        "daygb":daygb,
        "timegb":timegb,
        "shcode":shcode,
        "endtime":endtime,
        "cts_time":cts_time
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/market-data",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}