const lib=require("k-lib-im");
/**
 * @typedef {Object} t1444 [주식] 상위종목 - 시가총액상위
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1444_OutBlock} t1444OutBlock
 * @property {Array<t1444_OutBlock1>} t1444OutBlock1
 */
/**
 * @typedef {Object} t1444_OutBlock [주식] 상위종목 - 시가총액상위 
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t1444_OutBlock1 [주식] 상위종목 - 시가총액상위 
 * @property {string} shcode 종목코드(6)
 * @property {string} hname 종목명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 거래량(12)
 * @property {number} vol_rate 거래비중(6.2)
 * @property {number} total 시가총액(12)
 * @property {number} rate 비중(6.2)
 * @property {number} for_rate 외인비중(6.2)
 */
/**
 * [주식] 상위종목 - 시가총액상위 (초당 2건 제한)
 * @param {string} upcode 업종코드(3) - 
 * @param {number} idx IDX(4) - 처음 조회시 Space 연속 조회시 이전 조회한 OutBlock의 idx 값으로 설정
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1444|null>}  실패시 null 반환
 */
 exports.시가총액상위 = async(upcode="",idx=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1444",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1444InBlock":{
        "upcode":upcode,
        "idx":idx
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/high-item",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}