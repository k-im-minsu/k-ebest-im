const lib=require("k-lib-im");
/**
 * @typedef {Object} t1516 [업종] 시세 - 업종별종목시세
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1516_OutBlock} t1516OutBlock
 * @property {Array<t1516_OutBlock1>} t1516OutBlock1
 */
/**
 * @typedef {Object} t1516_OutBlock [업종] 시세 - 업종별종목시세 
 * @property {string} shcode 종목코드(6)
 * @property {number} pricejisu 지수(12.2)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(7.2)
 * @property {number} jdiff 등락율(6.2)
 */
/**
 * @typedef {Object} t1516_OutBlock1 [업종] 시세 - 업종별종목시세 
 * @property {string} hname 종목명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {number} open 시가(8)
 * @property {number} high 고가(8)
 * @property {number} low 저가(8)
 * @property {number} sojinrate 소진율(6.2)
 * @property {number} beta 베타계수(6.5)
 * @property {number} perx PER(8.2)
 * @property {number} frgsvolume 외인순매수(12)
 * @property {number} orgsvolume 기관순매수(12)
 * @property {number} diff_vol 거래증가율(10.2)
 * @property {string} shcode 종목코드(6)
 * @property {number} total 시가총액(12)
 * @property {number} value 거래대금(12)
 */
/**
 * [업종] 시세 - 업종별종목시세 (초당 1건 제한)
 * @param {string} upcode 업종코드(3) - 
 * @param {string} gubun 구분(1) - 1:코스피업종 2:코스닥업종 3:섹터지수
 * @param {string} shcode 종목코드(6) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 shcode 값으로 설정
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1516|null>}  실패시 null 반환
 */
module.exports = async(upcode="",gubun="",shcode="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1516",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1516InBlock":{
        "upcode":upcode,
        "gubun":gubun,
        "shcode":shcode
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