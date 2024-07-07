const lib=require("k-lib-im");
/**
 * @typedef {Object} t1471 [주식] 시세 - 시간대별호가잔량추이
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1471_OutBlock} t1471OutBlock
 * @property {Array<t1471_OutBlock1>} t1471OutBlock1
 */
/**
 * @typedef {Object} t1471_OutBlock [주식] 시세 - 시간대별호가잔량추이 
 * @property {string} time 시간CTS(6)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 */
/**
 * @typedef {Object} t1471_OutBlock1 [주식] 시세 - 시간대별호가잔량추이 
 * @property {string} time 체결시간(6)
 * @property {number} preoffercha1 메도증감(12)
 * @property {number} offerrem1 매도우선잔량(12)
 * @property {number} offerho1 매도우선호가(8)
 * @property {number} bidho1 매수우선호가(8)
 * @property {number} bidrem1 매수우선잔량(12)
 * @property {number} prebidcha1 매수증감(12)
 * @property {number} totofferrem 총매도(12)
 * @property {number} totbidrem 총매수(12)
 * @property {number} totsun 순매수(12)
 * @property {number} msrate 매수비율(6.2)
 * @property {number} close 종가(8)
 */
/**
 * [주식] 시세 - 시간대별호가잔량추이 (초당 1건 제한)
 * @param {string} shcode 종목코드(6) - 
 * @param {string} gubun 분구분(2) - 00:30초 01:1분 02:2분 03:3분 .....
 * @param {string} time 시간(6) - 기본값 : Space, 현재시간을 기준으로 함 연속조회시에 직전 조회결과인 OutBlock의 time 값으로 설정
 * @param {string} cnt 자료개수(3) - 요청건수( 1 이상 500 이하값만 유효) ex) 10건 요청시 "010"
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1471|null>}  실패시 null 반환
 */
module.exports= async(shcode="",gubun="",time="",cnt="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1471",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1471InBlock":{
        "shcode":shcode,
        "gubun":gubun,
        "time":time,
        "cnt":cnt
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