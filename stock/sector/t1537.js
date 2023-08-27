const lib=require("k-lib-im");
/**
 * @typedef {Object} t1537 [주식] 섹터 - 테마종목별시세조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1537_OutBlock} t1537OutBlock
 * @property {Array<t1537_OutBlock1>} t1537OutBlock1
 */
/**
 * @typedef {Object} t1537_OutBlock [주식] 섹터 - 테마종목별시세조회 
 * @property {number} upcnt 상승종목수(4)
 * @property {number} tmcnt 테마종목수(4)
 * @property {number} uprate 상승종목비율(4)
 * @property {string} tmname 테마명(36)
 */
/**
 * @typedef {Object} t1537_OutBlock1 [주식] 섹터 - 테마종목별시세조회 
 * @property {string} hname 종목명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {number} jniltime 전일동시간(9.2)
 * @property {string} shcode 종목코드(6)
 * @property {number} yeprice 예상체결가(8)
 * @property {number} open 시가(8)
 * @property {number} high 고가(8)
 * @property {number} low 저가(8)
 * @property {number} value 누적거래대금(단위:백만)(12)
 * @property {number} marketcap 시가총액(단위:백만)(12)
 */
/**
 * [주식] 섹터 - 테마종목별시세조회 (초당 1건 제한)
 * @param {string} tmcode 테마코드(4) - t8425조회하여 확인 후 입력
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1537|null>}  실패시 null 반환
 */
 exports.테마종목별시세조회 = async(tmcode="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1537",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1537InBlock":{
        "tmcode":tmcode
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/sector",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}