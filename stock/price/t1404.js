const lib=require("k-lib-im");
/**
 * @typedef {Object} t1404 [주식] 시세 - 관리_불성실_투자유의조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1404_OutBlock} t1404OutBlock
 * @property {Array<t1404_OutBlock1>} t1404OutBlock1
 */
/**
 * @typedef {Object} t1404_OutBlock [주식] 시세 - 관리_불성실_투자유의조회 
 * @property {string} cts_shcode 종목코드_CTS(6)
 */
/**
 * @typedef {Object} t1404_OutBlock1 [주식] 시세 - 관리_불성실_투자유의조회 
 * @property {string} hname 한글명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {string} date 지정일(8)
 * @property {number} tprice 지정일주가(8)
 * @property {number} tchange 지정일대비(8)
 * @property {number} tdiff 대비율(6.2)
 * @property {string} reason 사유(4)
 * @property {string} shcode 종목코드(6)
 * @property {string} edate 해제일(8)
 */
/**
 * [주식] 시세 - 관리_불성실_투자유의조회 (초당 1건 제한)
 * @param {string} gubun 구분(1) - 0:전체 1:코스피 2:코스닥
 * @param {string} jongchk 종목체크(1) - 1:관리 2:불성실공시 3:투자유의 4.투자환기
 * @param {string} cts_shcode 종목코드_CTS(6) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 cts_shcode 값으로 설정
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1404|null>}  실패시 null 반환
 */
module.exports = async(gubun="",jongchk="",cts_shcode="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1404",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1404InBlock":{
        "gubun":gubun,
        "jongchk":jongchk,
        "cts_shcode":cts_shcode
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