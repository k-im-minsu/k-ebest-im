const lib=require("k-lib-im");
/**
 * @typedef {Object} t3102 [주식] 투자정보 - 뉴스본문
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {Array<t3102_OutBlock>} t3102OutBlock
 * @property {Array<t3102_OutBlock1>} t3102OutBlock1
 * @property {t3102_OutBlock2} t3102OutBlock2
 */
/**
 * @typedef {Object} t3102_OutBlock [주식] 투자정보 - 뉴스본문 
 * @property {string} sJongcode 뉴스종목(6)
 */
/**
 * @typedef {Object} t3102_OutBlock1 [주식] 투자정보 - 뉴스본문 
 * @property {string} sBody 뉴스본문(100)
 */
/**
 * @typedef {Object} t3102_OutBlock2 [주식] 투자정보 - 뉴스본문 
 * @property {string} sTitle 뉴스타이틀(300)
 */
/**
 * [주식] 투자정보 - 뉴스본문 (초당 1건 제한)
 * @param {string} sNewsno 뉴스번호(24) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t3102|null>}  실패시 null 반환
 */
module.exports = async(sNewsno="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t3102",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t3102InBlock":{
        "sNewsno":sNewsno
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/investinfo",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}