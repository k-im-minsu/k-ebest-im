const lib=require("k-lib-im");
/**
 * @typedef {Object} t3401 [주식] 투자정보 - 투자의견
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t3401_OutBlock} t3401OutBlock
 * @property {Array<t3401_OutBlock1>} t3401OutBlock1
 */
/**
 * @typedef {Object} t3401_OutBlock [주식] 투자정보 - 투자의견 
 * @property {string} cts_date IDXDATE(8)
 * @property {number} price 현재가(8)
 * @property {string} sign 대비속성(1)
 * @property {number} change 대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 거래량(12)
 * @property {number} value 거래대금(12)
 */
/**
 * @typedef {Object} t3401_OutBlock1 [주식] 투자정보 - 투자의견 
 * @property {string} shcode 종목코드(9)
 * @property {string} tradno 회원사코드(3)
 * @property {string} date 의견일자(8)
 * @property {string} tradname 회원사명(30)
 * @property {string} bopn 투자의견변경후(30)
 * @property {string} nopn 투자의견변경전(30)
 * @property {number} boga 목표가변경전(12)
 * @property {number} noga 목표가변경후(12)
 * @property {number} close 의견일종가(8)
 */
/**
 * [주식] 투자정보 - 투자의견 (초당 1건 제한)
 * @param {string} shcode 종목코드(9) - 
 * @param {string} gubun1 구분(1) - 
 * @param {string} tradno 회원사코드(3) - 
 * @param {string} cts_date IDXDATE(8) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t3401|null>}  실패시 null 반환
 */
 exports.투자의견 = async(shcode="",gubun1="",tradno="",cts_date="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t3401",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t3401InBlock":{
        "shcode":shcode,
        "gubun1":gubun1,
        "tradno":tradno,
        "cts_date":cts_date
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