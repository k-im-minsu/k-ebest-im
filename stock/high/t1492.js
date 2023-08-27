const lib=require("k-lib-im");
/**
 * @typedef {Object} t1492 [주식] 상위종목 - 단일가예상등락율상위
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1492_OutBlock} t1492OutBlock
 * @property {Array<t1492_OutBlock1>} t1492OutBlock1
 */
/**
 * @typedef {Object} t1492_OutBlock [주식] 상위종목 - 단일가예상등락율상위 
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t1492_OutBlock1 [주식] 상위종목 - 단일가예상등락율상위 
 * @property {string} hname 한글명(20)
 * @property {number} price 예상체결가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} yevolume 예상체결량(12)
 * @property {number} volume 누적거래량(12)
 * @property {number} offerrem1 매도잔량(12)
 * @property {number} bidrem1 매수잔량(12)
 * @property {number} offerho1 매도호가(12)
 * @property {number} bidho1 매수호가(12)
 * @property {string} shcode 종목코드(6)
 * @property {number} value 누적거래대금(12)
 */
/**
 * [주식] 상위종목 - 단일가예상등락율상위 (초당 1건 제한)
 * @param {string} gubun1 구분(1) - 0: 전체 1: 코스피 2: 코스닥
 * @param {string} gubun2 상승하락(1) - 0: 상승률 1: 하락률
 * @param {string} jongchk 종목체크(1) - 전체#0 우선제외#1 관리제외#2 우선관리제외#3
 * @param {string} volume 거래량(1) - 전체거래량#0 1백주 이상#1 5백주 이상#2 1천주 이상#3 5천주 이상#4 1만주 이상#5 5만주 이상#6 50만주 이상#6 100만주 이상#7
 * @param {number} idx IDX(4) - 연속조회시 OutBlock의 idx 입력
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1492|null>}  실패시 null 반환
 */
 exports.단일가예상등락율상위 = async(gubun1="",gubun2="",jongchk="",volume="",idx=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1492",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1492InBlock":{
        "gubun1":gubun1,
        "gubun2":gubun2,
        "jongchk":jongchk,
        "volume":volume,
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