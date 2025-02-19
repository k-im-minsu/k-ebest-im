const lib=require("k-lib-im");
/**
 * @typedef {Object} t1486 [주식] 시세 - 시간별예상체결가
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1486_OutBlock} t1486OutBlock
 * @property {Array<t1486_OutBlock1>} t1486OutBlock1
 */
/**
 * @typedef {Object} t1486_OutBlock [주식] 시세 - 시간별예상체결가 
 * @property {string} cts_time 시간CTS(10)
 * @property {string} ex_shcode 거래소별단축코드(10)
 */
/**
 * @typedef {Object} t1486_OutBlock1 [주식] 시세 - 시간별예상체결가 
 * @property {string} chetime 시간(8)
 * @property {number} price 예상체결가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} cvolume 예상체결량(12)
 * @property {number} offerho1 매도호가(8)
 * @property {number} bidho1 매수호가(8)
 * @property {number} offerrem1 매도잔량(12)
 * @property {number} bidrem1 매수잔량(12)
 * @property {string} exchname 거래소명(3)
 */
/**
 * [주식] 시세 - 시간별예상체결가 (초당 2건 제한)
 * @param {string} shcode 단축코드(6) - 
 * @param {string} cts_time 시간CTS(10) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 cts_time 값으로 설정
 * @param {number} cnt 조회건수(4) - 0020
 * @param {string} exchgubun 거래소구분코드(1)
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1486|null>}  실패시 null 반환
 */
module.exports = async(shcode="",cts_time="",cnt=0,exchgubun="K",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1486",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1486InBlock":{
        "shcode":shcode,
        "cts_time":cts_time,
        "cnt":cnt,
        "exchgubun":exchgubun
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