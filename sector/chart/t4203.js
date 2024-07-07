const lib=require("k-lib-im");
/**
 * @typedef {Object} t4203 [업종] 시세 - 업종챠트_종합
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t4203_OutBlock} t4203OutBlock
 * @property {Array<t4203_OutBlock1>} t4203OutBlock1
 */
/**
 * @typedef {Object} t4203_OutBlock [업종] 시세 - 업종챠트_종합 
 * @property {string} shcode 단축코드(3)
 * @property {number} jisiga 전일시가(7.2)
 * @property {number} jihigh 전일고가(7.2)
 * @property {number} jilow 전일저가(7.2)
 * @property {number} jiclose 전일종가(7.2)
 * @property {number} jivolume 전일거래량(12)
 * @property {number} disiga 당일시가(7.2)
 * @property {number} dihigh 당일고가(7.2)
 * @property {number} dilow 당일저가(7.2)
 * @property {number} diclose 당일종가(7.2)
 * @property {number} disvalue 당일거래대금(12)
 * @property {string} cts_date 연속일자(8) - 연속조회키 연속 조회시 이 값을 InBlock의 cts_date 필드에 넣어준다.
 * @property {string} cts_time 연속시간(10) - 연속조회키 연속 조회시 이 값을 InBlock의 cts_time 필드에 넣어준다.
 * @property {string} cts_daygb 연속당일구분(1) - 연속조회키 연속 조회시 이 값을 InBlock의 cts_daygb 필드에 넣어준다.
 */
/**
 * @typedef {Object} t4203_OutBlock1 [업종] 시세 - 업종챠트_종합 
 * @property {string} date 날짜(8)
 * @property {string} time 시간(6)
 * @property {number} open 시가(7.2)
 * @property {number} high 고가(7.2)
 * @property {number} low 저가(7.2)
 * @property {number} close 종가(7.2)
 * @property {number} jdiff_vol 거래량(12)
 * @property {number} value 거래대금(12)
 */
/**
 * [업종] 시세 - 업종챠트_종합 (초당 2건 제한)
 * @param {string} shcode 단축코드(3) - 
 * @param {string} gubun 주기구분(0:틱1:분2:일3:주4:월)(1) - 0:틱 1:분 2:일 3:주 4:월
 * @param {number} ncnt 틱개수(4) - 
 * @param {number} qrycnt 건수(4) - 1 이상 500 이하값만 유효
 * @param {string} tdgb 당일구분(0:전체1:당일만)(1) - 0:전체 1:당일만
 * @param {string} sdate 시작일자(8) - 조회구간종료일 Space:기본값
 * @param {string} edate 종료일자(8) - 처음조회기준일(LE) 처음조회일 경우 이 값 기준으로 조회
 * @param {string} cts_date 연속일자(8) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 cts_date 값으로 설정
 * @param {string} cts_time 연속시간(10) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 cts_time 값으로 설정
 * @param {string} cts_daygb 연속당일구분(0:연속전체1:연속당일만2:연속전일만)(1) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 cts_daygb 값으로 설정
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t4203|null>}  실패시 null 반환
 */
module.exports = async(shcode="",gubun="",ncnt=0,qrycnt=0,tdgb="",sdate="",edate="",cts_date="",cts_time="",cts_daygb="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t4203",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t4203InBlock":{
        "shcode":shcode,
        "gubun":gubun,
        "ncnt":ncnt,
        "qrycnt":qrycnt,
        "tdgb":tdgb,
        "sdate":sdate,
        "edate":edate,
        "cts_date":cts_date,
        "cts_time":cts_time,
        "cts_daygb":cts_daygb
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