const lib=require("k-lib-im");
/**
 * @typedef {Object} t1533 [주식] 섹터 - 특이테마
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1533_OutBlock} t1533OutBlock
 * @property {Array<t1533_OutBlock1>} t1533OutBlock1
 */
/**
 * @typedef {Object} t1533_OutBlock [주식] 섹터 - 특이테마 
 * @property {string} bdate 일자(8)
 */
/**
 * @typedef {Object} t1533_OutBlock1 [주식] 섹터 - 특이테마 
 * @property {string} tmname 테마명(36)
 * @property {number} totcnt 전체(4)
 * @property {number} upcnt 상승(4)
 * @property {number} dncnt 하락(4)
 * @property {number} uprate 상승비율(6.2)
 * @property {number} diff_vol 거래증가율(10.2)
 * @property {number} avgdiff 평균등락율(6.2)
 * @property {number} chgdiff 대비등락율(6.2)
 * @property {string} tmcode 테마코드(4)
 */
/**
 * [주식] 섹터 - 특이테마 (초당 1건 제한)
 * @param {string} gubun 구분(1) - 1#상승율 상위 2#하락율 상위 3#거래증가율 상위 4#거래증가율 하위 5#상승종목비율 상위 6#상승종목비율 하위 7#기준대비 상승율 상위 8#기준대비 하락율 상위
 * @param {number} chgdate 대비일자(2) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1533|null>}  실패시 null 반환
 */
module.exports = async(gubun="",chgdate=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1533",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1533InBlock":{
        "gubun":gubun,
        "chgdate":chgdate
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/sector",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}