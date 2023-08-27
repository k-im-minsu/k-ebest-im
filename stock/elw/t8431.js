const lib=require("k-lib-im");
/**
 * @typedef {Object} t8431 [주식] ELW - ELW종목조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {Array<t8431_OutBlock>} t8431OutBlock
 */
/**
 * @typedef {Object} t8431_OutBlock [주식] ELW - ELW종목조회 
 * @property {string} hname 종목명(40)
 * @property {string} shcode 단축코드(6)
 * @property {string} expcode 확장코드(12)
 * @property {number} uplmtprice 상한가(8)
 * @property {number} dnlmtprice 하한가(8)
 * @property {number} jnilclose 전일종가(8)
 * @property {number} recprice 기준가(8)
 */
/**
 * [주식] ELW - ELW종목조회 (초당 2건 제한)
 * @param {string} dummy Dummy(1) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t8431|null>}  실패시 null 반환
 */
 exports.ELW종목조회 = async(dummy="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t8431",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t8431InBlock":{
        "dummy":dummy
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/elw",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}