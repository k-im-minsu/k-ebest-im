const lib=require("k-lib-im");
/**
 * @typedef {Object} t9942 [주식] ELW - ELW마스터조회API용
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {Array<t9942_OutBlock>} t9942OutBlock
 */
/**
 * @typedef {Object} t9942_OutBlock [주식] ELW - ELW마스터조회API용 
 * @property {string} hname 종목명(40)
 * @property {string} shcode 단축코드(6)
 * @property {string} expcode 확장코드(12)
 */
/**
 * [주식] ELW - ELW마스터조회API용 (초당 2건 제한)
 * @param {string} dummy Dummy(1) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t9942|null>}  실패시 null 반환
 */
module.exports = async(dummy="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t9942",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t9942InBlock":{
        "dummy":dummy
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/elw",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}