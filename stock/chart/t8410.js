const lib=require("k-lib-im");
/**
 * @typedef {Object} t8410 [주식] 차트 - API전용주식챠트_일주월년
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t8410_OutBlock} t8410OutBlock
 * @property {Array<t8410_OutBlock1>} t8410OutBlock1
 */
/**
 * @typedef {Object} t8410_OutBlock [주식] 차트 - API전용주식챠트_일주월년 
 * @property {string} shcode 단축코드(6)
 * @property {number} jisiga 전일시가(8)
 * @property {number} jihigh 전일고가(8)
 * @property {number} jilow 전일저가(8)
 * @property {number} jiclose 전일종가(8)
 * @property {number} jivolume 전일거래량(12)
 * @property {number} disiga 당일시가(8)
 * @property {number} dihigh 당일고가(8)
 * @property {number} dilow 당일저가(8)
 * @property {number} diclose 당일종가(8)
 * @property {number} highend 상한가(8)
 * @property {number} lowend 하한가(8)
 * @property {string} cts_date 연속일자(8)
 * @property {string} s_time 장시작시간(HHMMSS)(6)
 * @property {string} e_time 장종료시간(HHMMSS)(6)
 * @property {string} dshmin 동시호가처리시간(MM:분)(2)
 * @property {number} rec_count 레코드카운트(7)
 * @property {number} svi_uplmtprice 정적VI상한가(8)
 * @property {number} svi_dnlmtprice 정적VI하한가(8)
 */
/**
 * @typedef {Object} t8410_OutBlock1 [주식] 차트 - API전용주식챠트_일주월년 
 * @property {string} date 날짜(8)
 * @property {number} open 시가(12)
 * @property {number} high 고가(12)
 * @property {number} low 저가(12)
 * @property {number} close 종가(12)
 * @property {number} jdiff_vol 거래량(12)
 * @property {number} value 거래대금(12)
 * @property {number} jongchk 수정구분(13)
 * @property {number} rate 수정비율(6.2)
 * @property {number} pricechk 수정주가반영항목(13)
 * @property {number} ratevalue 수정비율반영거래대금(12)
 * @property {string} sign 종가등락구분(1:상한2:상승3:보합4:하한5:하락주식일만사용)(1)
 */
/**
 * [주식] 차트 - API전용주식챠트_일주월년 (초당 1건 제한)
 * @param {string} shcode 단축코드(6) - 
 * @param {string} gubun 주기구분(2:일3:주4:월5:년)(1) - 
 * @param {number} qrycnt 요청건수(최대-압축:2000비압축:500)(4) - 
 * @param {string} sdate 시작일자(8) - 조회구간종료일 Space:기본값
 * @param {string} edate 종료일자(8) - 처음조회기준일(LE) 처음조회일 경우 이 값 기준으로 조회
 * @param {string} cts_date 연속일자(8) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 cts_date 값으로 설정
 * @param {string} comp_yn 압축여부(Y:압축N:비압축)(1) - 
 * @param {string} sujung 수정주가여부(Y:적용N:비적용)(1) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t8410|null>}  실패시 null 반환
 */
module.exports = async(shcode="",gubun="",qrycnt=0,sdate="",edate="",cts_date="",comp_yn="",sujung="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t8410",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t8410InBlock":{
        "shcode":shcode,
        "gubun":gubun,
        "qrycnt":qrycnt,
        "sdate":sdate,
        "edate":edate,
        "cts_date":cts_date,
        "comp_yn":comp_yn,
        "sujung":sujung
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/chart",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}