const lib=require("k-lib-im");
/**
 * @typedef {Object} t1411 [주식] 기타 - 증거금율별종목조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1411_OutBlock} t1411OutBlock
 * @property {Array<t1411_OutBlock1>} t1411OutBlock1
 */
/**
 * @typedef {Object} t1411_OutBlock [주식] 기타 - 증거금율별종목조회 
 * @property {number} jkrate 위탁증거금율(3)
 * @property {number} sjkrate 신용증거금율(3)
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t1411_OutBlock1 [주식] 기타 - 증거금율별종목조회 
 * @property {string} shcode 종목코드(6)
 * @property {string} hname 종목명(20)
 * @property {number} jkrate 위탁증거금율(3)
 * @property {number} sjkrate 신용증거금율(3)
 * @property {number} subprice 대용가(8)
 * @property {number} recprice 전일종가(8)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 */
/**
 * [주식] 기타 - 증거금율별종목조회 (초당 1건 제한)
 * @param {string} gubun 시장구분(1) - 0:전체 1:코스피 2:코스닥
 * @param {string} jongchk 위탁신용구분(1) - 1:위탁 2:신용
 * @param {string} jkrate 증거금율구분(1) - 2:20% 3:30% 5:40% 1:100%
 * @param {string} shcode 종목코드(6) - 
 * @param {number} idx IDX(4) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 idx 값으로 설정
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1411|null>}  실패시 null 반환
 */
module.exports = async(gubun="",jongchk="",jkrate="",shcode="",idx=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1411",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1411InBlock":{
        "gubun":gubun,
        "jongchk":jongchk,
        "jkrate":jkrate,
        "shcode":shcode,
        "idx":idx
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/etc",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}