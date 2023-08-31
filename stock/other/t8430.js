const lib=require("k-lib-im");
/**
 * @typedef {Object} t8430 [주식] 기타 - 주식종목조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {Array<t8430_OutBlock>} t8430OutBlock
 */
/**
 * @typedef {Object} t8430_OutBlock [주식] 기타 - 주식종목조회 
 * @property {string} hname 종목명(20)
 * @property {string} shcode 단축코드(6)
 * @property {string} expcode 확장코드(12)
 * @property {string} etfgubun ETF구분(1:ETF)(1)
 * @property {number} uplmtprice 상한가(8)
 * @property {number} dnlmtprice 하한가(8)
 * @property {number} jnilclose 전일가(8)
 * @property {string} memedan 주문수량단위(5)
 * @property {number} recprice 기준가(8)
 * @property {string} gubun 구분(1:코스피2:코스닥)(1)
 */
/**
 * [주식] 기타 - 주식종목조회 (초당 2건 제한)
 * @param {string} gubun 구분(0:전체1:코스피2:코스닥)(1) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t8430|null>}  실패시 null 반환
 */
module.exports= async(gubun="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t8430",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t8430InBlock":{
        "gubun":gubun
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