const lib=require("k-lib-im");
/**
 * @typedef {Object} t1485 [업종] 시세 - 예상지수
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1485_OutBlock} t1485OutBlock
 * @property {Array<t1485_OutBlock1>} t1485OutBlock1
 */
/**
 * @typedef {Object} t1485_OutBlock [업종] 시세 - 예상지수 
 * @property {number} pricejisu 현재지수(10.2)
 * @property {string} sign 지수전일대비구분(1)
 * @property {number} change 전일대비(10.2)
 * @property {number} volume 거래량(12)
 * @property {number} yhighjo 상승종목수(4)
 * @property {number} yupjo 상한종목수(4)
 * @property {number} yunchgjo 보합종목수(4)
 * @property {number} ylowjo 하락종목수(4)
 * @property {number} ydownjo 하한종목수(4)
 * @property {number} ytrajo 거래형성수(4)
 */
/**
 * @typedef {Object} t1485_OutBlock1 [업종] 시세 - 예상지수 
 * @property {string} chetime 시간(6)
 * @property {number} jisu 예상지수(10.2)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(10.2)
 * @property {number} volume 예상체결량(12)
 * @property {number} volcha 예상체결량직전대비(12)
 * @property {number} diff 예상등락율(6.2)
 */
/**
 * [업종] 시세 - 예상지수 (초당 1건 제한)
 * @param {string} upcode 업종코드(3) - 코스피#001 코스닥#301 KRX100#501 KP200#101 SRI#515 코스닥프리미어#404 KRX 보험#516 KRX 운송#517
 * @param {string} gubun 조회구분(1) - 1:장전 2:장후
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1485|null>}  실패시 null 반환
 */
module.exports = async(upcode="",gubun="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1485",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1485InBlock":{
        "upcode":upcode,
        "gubun":gubun
       }
    }
  const result= await lib.http.post(__ebestim.url+"/indtp/market-data",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}