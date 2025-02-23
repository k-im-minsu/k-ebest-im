const lib=require("k-lib-im");
/**
 * @typedef {Object} t1105 [주식] 시세 - 주식피봇_디마크조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1105_OutBlock} t1105OutBlock
 */
/**
 * @typedef {Object} t1105_OutBlock [주식] 시세 - 주식피봇_디마크조회 
 * @property {string} shcode 단축코드(6)
 * @property {number} pbot 피봇(8)
 * @property {number} offer1 1차저항(8)
 * @property {number} supp1 1차지지(8)
 * @property {number} offer2 2차저항(8)
 * @property {number} supp2 2차지지(8)
 * @property {number} stdprc 기준가격(8)
 * @property {number} offerd D저항(8)
 * @property {number} suppd D지지(8)
 */
/**
 * [주식] 시세 - 주식피봇_디마크조회 (초당 3건 제한)
 * @param {string} shcode 단축코드(6) - 
 * @param {string} exchgubun 거래소구분코드(1)
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1105|null>}  실패시 null 반환
 */
module.exports = async(shcode="",exchgubun="K",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1105",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1105InBlock":{
        "shcode":shcode,
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