const lib=require("k-lib-im");
/**
 * @typedef {Object} t1482 [주식] 상위종목 - 시간외거래량상위
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1482_OutBlock} t1482OutBlock
 * @property {Array<t1482_OutBlock1>} t1482OutBlock1
 */
/**
 * @typedef {Object} t1482_OutBlock [주식] 상위종목 - 시간외거래량상위 
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t1482_OutBlock1 [주식] 상위종목 - 시간외거래량상위 
 * @property {string} hname 종목명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {number} vol 회전율(6.2)
 * @property {string} shcode 종목코드(6)
 * @property {number} value 누적거래대금(12)
 */
/**
 * [주식] 상위종목 - 시간외거래량상위 (초당 1건 제한)
 * @param {string} gubun 구분(1) - 0: 전체 1: 코스피 2: 코스닥
 * @param {string} jongchk 거래량(1) - 0: 전체 1: 우선제외 2: 관리제외 3: 우선관리제외
 * @param {number} idx IDX(4) - 연속조회시 OutBlock의 idx 입력
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1482|null>}  실패시 null 반환
 */
module.exports= async(gubun="",jongchk="",idx=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1482",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1482InBlock":{
        "gubun":gubun,
        "jongchk":jongchk,
        "idx":idx
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/high-item",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}