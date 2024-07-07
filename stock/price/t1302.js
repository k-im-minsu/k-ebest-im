const lib=require("k-lib-im");
/**
 * @typedef {Object} t1302 [주식] 시세 - 주식분별주가조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1302_OutBlock} t1302OutBlock
 * @property {Array<t1302_OutBlock1>} t1302OutBlock1
 */
/**
 * @typedef {Object} t1302_OutBlock [주식] 시세 - 주식분별주가조회 
 * @property {string} cts_time 시간CTS(6)
 */
/**
 * @typedef {Object} t1302_OutBlock1 [주식] 시세 - 주식분별주가조회 
 * @property {string} chetime 시간(6)
 * @property {number} close 종가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} chdegree 체결강도(8.2)
 * @property {number} mdvolume 매도체결수량(12)
 * @property {number} msvolume 매수체결수량(12)
 * @property {number} revolume 순매수체결량(12)
 * @property {number} mdchecnt 매도체결건수(8)
 * @property {number} mschecnt 매수체결건수(8)
 * @property {number} rechecnt 순체결건수(8)
 * @property {number} volume 거래량(12)
 * @property {number} open 시가(8)
 * @property {number} high 고가(8)
 * @property {number} low 저가(8)
 * @property {number} cvolume 체결량(12)
 * @property {number} mdchecnttm 매도체결건수(시간)(8)
 * @property {number} mschecnttm 매수체결건수(시간)(8)
 * @property {number} totofferrem 매도잔량(12)
 * @property {number} totbidrem 매수잔량(12)
 * @property {number} mdvolumetm 시간별매도체결량(12)
 * @property {number} msvolumetm 시간별매수체결량(12)
 */
/**
 * [주식] 시세 - 주식분별주가조회 (초당 1건 제한)
 * @param {string} shcode 단축코드(6) - 
 * @param {string} gubun 작업구분(1) - 0:30초, 1:1분, 2:3분, 3:5분, 4:10분, 5:30분, 6:60분
 * @param {string} time 시간(6) - 처음 조회시는 Space, 연속 조회시에 이전 조회한 OutBlock의 cts_time 값으로 설정
 * @param {number} cnt 건수(3) - 1이상 900 이하
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1302|null>}  실패시 null 반환
 */
module.exports = async(shcode="",gubun="",time="",cnt=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1302",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1302InBlock":{
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