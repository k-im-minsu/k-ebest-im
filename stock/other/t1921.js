const lib=require("k-lib-im");
/**
 * @typedef {Object} t1921 [주식] 기타 - 신용거래동향
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1921_OutBlock} t1921OutBlock
 * @property {Array<t1921_OutBlock1>} t1921OutBlock1
 */
/**
 * @typedef {Object} t1921_OutBlock [주식] 기타 - 신용거래동향 
 * @property {number} cnt CNT(4)
 * @property {string} date 날짜(8)
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t1921_OutBlock1 [주식] 기타 - 신용거래동향 
 * @property {string} mmdate 날짜(8)
 * @property {number} close 종가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} jchange 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} nvolume 신규(8)
 * @property {number} svolume 상환(8)
 * @property {number} jvolume 잔고(8)
 * @property {number} price 금액(8)
 * @property {number} change 대비(8)
 * @property {number} gyrate 공여율(6.2)
 * @property {number} jkrate 잔고율(6.2)
 * @property {string} shcode 종목코드(6)
 */
/**
 * [주식] 기타 - 신용거래동향 (초당 1건 제한)
 * @param {string} shcode 종목코드(6) - 
 * @param {string} gubun 융자대주구분(1) - 1:융자 2:대주
 * @param {string} date 날짜(8) - 다음 조회시 사용 OutBlock의 date 필드를 입력함.
 * @param {number} idx IDX(4) - 사용안함
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1921|null>}  실패시 null 반환
 */
module.exports= async(shcode="",gubun="",date="",idx=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1921",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1921InBlock":{
        "shcode":shcode,
        "gubun":gubun,
        "date":date,
        "idx":idx
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/etc",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}