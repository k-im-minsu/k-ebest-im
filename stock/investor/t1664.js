const lib=require("k-lib-im");
/**
 * @typedef {Object} t1664 [주식] 투자자 - 투자자매매종합_챠트
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {Array<t1664_OutBlock1>} t1664OutBlock1
 */
/**
 * @typedef {Object} t1664_OutBlock1 [주식] 투자자 - 투자자매매종합_챠트 
 * @property {string} dt 일자시간(8)
 * @property {number} tjj01 증권순매수(12)
 * @property {number} tjj02 보험순매수(12)
 * @property {number} tjj03 투신순매수(12)
 * @property {number} tjj04 은행순매수(12)
 * @property {number} tjj05 종금순매수(12)
 * @property {number} tjj06 기금순매수(12)
 * @property {number} tjj07 기타순매수(12)
 * @property {number} tjj08 개인순매수(12)
 * @property {number} tjj17 외국인순매수(12)
 * @property {number} tjj18 기관순매수(12)
 * @property {number} cha 차익순매수(12)
 * @property {number} bicha 비차익순매수(12)
 * @property {number} totcha 종합순매수(12)
 * @property {number} basis 베이시스(6.2)
 */
/**
 * [주식] 투자자 - 투자자매매종합_챠트 (초당 1건 제한)
 * @param {string} mgubun 시장구분(1) - 1#코스피 2#코스닥 3#선 물 4#콜옵션 5#풋옵션
 * @param {string} vagubun 금액수량구분(1) - 1:수량 2:금액
 * @param {string} bdgubun 시간일별구분(1) - 1:시간별 2:일별
 * @param {number} cnt 조회건수(3) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1664|null>}  실패시 null 반환
 */
module.exports = async(mgubun="",vagubun="",bdgubun="",cnt=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1664",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1664InBlock":{
        "mgubun":mgubun,
        "vagubun":vagubun,
        "bdgubun":bdgubun,
        "cnt":cnt
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/investor",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}