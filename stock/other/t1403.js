const lib=require("k-lib-im");
/**
 * @typedef {Object} t1403 [주식] 기타 - 신규상장종목조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1403_OutBlock} t1403OutBlock
 * @property {Array<t1403_OutBlock1>} t1403OutBlock1
 */
/**
 * @typedef {Object} t1403_OutBlock [주식] 기타 - 신규상장종목조회 
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t1403_OutBlock1 [주식] 기타 - 신규상장종목조회 
 * @property {string} hname 한글명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {number} kmprice 공모가(8)
 * @property {string} date 등록일(8)
 * @property {number} recprice 등록일기준가(8)
 * @property {number} kmdiff 기준가등락율(6.2)
 * @property {number} close 등록일종가(8)
 * @property {number} recdiff 등록일등락율(6.2)
 * @property {string} shcode 종목코드(6)
 */
/**
 * [주식] 기타 - 신규상장종목조회 (초당 1건 제한)
 * @param {string} gubun 구분(1) - 0: 전체, 1:코스피, 2:코스닥
 * @param {string} styymm 시작상장월(6) - YYYYMM
 * @param {string} enyymm 종료상장월(6) - YYYYMM
 * @param {number} idx IDX(4) - 연속조회시 OutBlock의 동일필드 입력
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1403|null>}  실패시 null 반환
 */
module.exports = async(gubun="",styymm="",enyymm="",idx=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1403",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1403InBlock":{
        "gubun":gubun,
        "styymm":styymm,
        "enyymm":enyymm,
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