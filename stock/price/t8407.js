const lib=require("k-lib-im");
/**
 * @typedef {Object} t8407 [주식] 시세 - API용주식멀티현재가조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {Array<t8407_OutBlock1>} t8407OutBlock1
 */
/**
 * @typedef {Object} t8407_OutBlock1 [주식] 시세 - API용주식멀티현재가조회 
 * @property {string} shcode 종목코드(6)
 * @property {string} hname 종목명(40)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {number} offerho 매도호가(8)
 * @property {number} bidho 매수호가(8)
 * @property {number} cvolume 체결수량(8)
 * @property {number} chdegree 체결강도(9.2)
 * @property {number} open 시가(8)
 * @property {number} high 고가(8)
 * @property {number} low 저가(8)
 * @property {number} value 거래대금(백만)(12)
 * @property {number} offerrem 우선매도잔량(12)
 * @property {number} bidrem 우선매수잔량(12)
 * @property {number} totofferrem 총매도잔량(12)
 * @property {number} totbidrem 총매수잔량(12)
 * @property {number} jnilclose 전일종가(8)
 * @property {number} uplmtprice 상한가(8)
 * @property {number} dnlmtprice 하한가(8)
 */
/**
 * [주식] 시세 - API용주식멀티현재가조회 (초당 2건 제한)
 * @param {number} nrec 건수(3) - 최대 50개까지
 * @param {string} shcode 종목코드(300) - 구분자 없이 종목코드를 붙여서 입력 078020, 000660, 005930 을 전송시 '078020000660005930' 을 입력
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t8407|null>}  실패시 null 반환
 */
 exports.API용주식멀티현재가조회 = async(nrec=0,shcode="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t8407",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t8407InBlock":{
        "nrec":nrec,
        "shcode":shcode
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